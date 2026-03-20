import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import WriteHeader from "../components/blog/write/WriteHeader";
import WriteSidebar from "../components/blog/write/WriteSidebar";
import WriteEditor from "../components/blog/write/WriteEditor";
import { createPost, updatePost, deletePost, fetchPostDetailAdmin } from "../api/blogApi";
import type { BlogDraft, BlogWriteUser, Category } from "../types/blog";
import Dialog from "../components/ui/Dialog";
import { useDialog } from "../hooks/useDialog";

const DRAFT_KEY = "blog-autosave-draft";

const INITIAL_POST: BlogDraft = {
  title: "",
  content: "",
  category: "TIL",
  tags: [],
  coverImage: null,
  lastSaved: new Date().toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  }),
};

const USER: BlogWriteUser = {
  name: "Hyeyeon Ko",
  role: "Author Mode",
  avatar: "https://picsum.photos/id/1005/200/200",
};


function generateExcerpt(content: string): string {
  const plain = content.replace(/[#*`>[\]!_~]/g, "").replace(/\s+/g, " ").trim();
  return plain.slice(0, 280) + (plain.length > 280 ? "..." : "");
}

export default function BlogWrite() {
  const { id } = useParams<{ id?: string }>();
  const editId = id ? parseInt(id, 10) : null;
  const isEditMode = editId !== null && !isNaN(editId);

  const navigate = useNavigate();
  const { dialogProps, confirm, alert } = useDialog();
  const [post, setPost] = useState<BlogDraft>(INITIAL_POST);
  const [savedPostId, setSavedPostId] = useState<number | null>(editId);
  const [loadingEdit, setLoadingEdit] = useState(isEditMode);
  const [isSaving, setIsSaving] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const postRef = useRef(post);
  postRef.current = post;

  // 새 글 작성 시 자동저장 복원
  useEffect(() => {
    if (isEditMode) return;
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return;
    try {
      const draft = JSON.parse(raw) as Partial<Pick<BlogDraft, "title" | "content" | "category" | "tags">>;
      setPost((prev) => ({ ...prev, ...draft, lastSaved: "자동저장 복원됨" }));
    } catch {
      // 손상된 데이터 무시
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 30초마다 자동저장 (새 글 작성 시만)
  useEffect(() => {
    if (isEditMode) return;
    const id = setInterval(() => {
      const { title, content, category, tags } = postRef.current;
      if (!title.trim() && !content.trim()) return;
      localStorage.setItem(DRAFT_KEY, JSON.stringify({ title, content, category, tags }));
      setPost((prev) => ({
        ...prev,
        lastSaved: new Date().toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit" }) + " (자동저장)",
      }));
    }, 30_000);
    return () => clearInterval(id);
  }, [isEditMode]);

  // 수정 모드: 기존 글 불러오기
  useEffect(() => {
    if (!isEditMode || !editId) return;
    fetchPostDetailAdmin(editId)
      .then((data) => {
        setPost({
          title: data.title,
          content: data.contentMd,
          category: (data.category as Category) || "TIL",
          tags: data.tags ?? [],
          coverImage: null,
          lastSaved: "불러옴",
        });
      })
      .catch(() => {
        alert("글을 불러오지 못했습니다.", { type: "error" });
        navigate("/blog");
      })
      .finally(() => setLoadingEdit(false));
  }, [editId, isEditMode, navigate, alert]);

  const handleUpdatePost = (updates: Partial<BlogDraft>) => {
    setPost((prev) => ({ ...prev, ...updates }));
  };

  const handleSaveDraft = useCallback(async () => {
    if (!post.title.trim() || !post.content.trim()) {
      await alert("제목과 내용을 입력해주세요.", { type: "error" });
      return;
    }
    setIsSaving(true);
    const basePayload = {
      title: post.title,
      contentMd: post.content,
      excerpt: generateExcerpt(post.content),
      category: post.category,
      tags: post.tags.length > 0 ? post.tags.join(",") : undefined,
    };
    try {
      if (savedPostId) {
        await updatePost(savedPostId, basePayload);
      } else {
        const newId = await createPost({ ...basePayload, status: "DRAFT" as const });
        setSavedPostId(newId);
      }
      handleUpdatePost({
        lastSaved: new Date().toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        }),
      });
    } catch {
      await alert("임시저장에 실패했습니다. 다시 시도해주세요.", { type: "error" });
    } finally {
      setIsSaving(false);
    }
  }, [post, savedPostId, alert]);

  const handlePublish = useCallback(async () => {
    if (!post.title.trim() || !post.content.trim()) {
      await alert("제목과 내용을 입력해주세요.", { type: "error" });
      return;
    }
    const ok = await confirm("글을 발행할까요?", {
      type: "confirm",
      icon: "send",
      message: "발행된 글은 블로그에 공개됩니다.",
      confirmLabel: "발행",
      cancelLabel: "취소",
    });
    if (!ok) return;

    setIsPublishing(true);
    const payload = {
      title: post.title,
      contentMd: post.content,
      excerpt: generateExcerpt(post.content),
      category: post.category,
      status: "PUBLISHED" as const,
      tags: post.tags.length > 0 ? post.tags.join(",") : undefined,
    };
    try {
      if (savedPostId) {
        await updatePost(savedPostId, payload);
        localStorage.removeItem(DRAFT_KEY);
        navigate(`/blog/${savedPostId}`);
      } else {
        const newId = await createPost(payload);
        localStorage.removeItem(DRAFT_KEY);
        navigate(`/blog/${newId}`);
      }
    } catch {
      await alert("글 발행에 실패했습니다. 다시 시도해주세요.", { type: "error" });
    } finally {
      setIsPublishing(false);
    }
  }, [post, savedPostId, navigate, alert, confirm]);

  const handleDelete = async () => {
    const title = isEditMode ? "이 글을 영구 삭제할까요?" : "이 초안을 삭제할까요?";
    const ok = await confirm(title, {
      type: "danger",
      message: isEditMode ? "삭제 후 복구할 수 없습니다." : undefined,
      confirmLabel: "삭제",
      cancelLabel: "취소",
    });
    if (!ok) return;

    if (isEditMode && savedPostId) {
      deletePost(savedPostId)
        .then(() => navigate("/blog"))
        .catch(() => alert("삭제에 실패했습니다.", { type: "error" }));
    } else {
      localStorage.removeItem(DRAFT_KEY);
      setPost({ ...INITIAL_POST, title: "", content: "" });
      setSavedPostId(null);
    }
  };

  if (loadingEdit) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <span className="material-symbols-outlined text-4xl text-slate-300 animate-pulse">hourglass_empty</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] overflow-hidden bg-[#f8fafc]">
      <Dialog {...dialogProps} />
      <WriteHeader
        lastSaved={post.lastSaved}
        isSaving={isSaving}
        onSave={handleSaveDraft}
        onDelete={handleDelete}
        onPublish={handlePublish}
        isPublishing={isPublishing}
      />
      <div className="flex flex-1 overflow-hidden">
        <WriteSidebar
          category={post.category}
          tags={post.tags}
          coverImage={post.coverImage}
          onUpdateCategory={(category: Category) => handleUpdatePost({ category })}
          onUpdateTags={(tags) => handleUpdatePost({ tags })}
          onUpdateCoverImage={(coverImage) => handleUpdatePost({ coverImage })}
          user={USER}
        />
        <main className="flex-1 overflow-y-auto bg-white">
          <WriteEditor
            title={post.title}
            content={post.content}
            onUpdateTitle={(title) => handleUpdatePost({ title })}
            onUpdateContent={(content) => handleUpdatePost({ content })}
          />
        </main>
      </div>
    </div>
  );
}

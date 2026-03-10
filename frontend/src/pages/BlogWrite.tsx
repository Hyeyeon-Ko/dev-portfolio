import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import WriteHeader from "../components/blog/write/WriteHeader";
import WriteSidebar from "../components/blog/write/WriteSidebar";
import WriteEditor from "../components/blog/write/WriteEditor";
import { createPost } from "../api/blogApi";
import type { BlogDraft, BlogWriteUser, Category } from "../types/blog";

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

function estimateReadTime(text: string): number {
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function generateExcerpt(content: string): string {
  const plain = content.replace(/[#*`>\[\]!_~]/g, "").replace(/\s+/g, " ").trim();
  return plain.slice(0, 280) + (plain.length > 280 ? "..." : "");
}

export default function BlogWrite() {
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogDraft>(INITIAL_POST);
  const [isSaving, setIsSaving] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);

  const handleUpdatePost = (updates: Partial<BlogDraft>) => {
    setPost((prev) => ({ ...prev, ...updates }));
  };

  const handleSaveDraft = useCallback(async () => {
    if (!post.title.trim() || !post.content.trim()) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }
    setIsSaving(true);
    try {
      await createPost({
        title: post.title,
        contentMd: post.content,
        excerpt: generateExcerpt(post.content),
        category: post.category,
        status: "DRAFT",
        readTimeMin: estimateReadTime(post.content),
      });
      handleUpdatePost({
        lastSaved: new Date().toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        }),
      });
    } catch (e) {
      alert("임시저장에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsSaving(false);
    }
  }, [post]);

  const handlePublish = useCallback(async () => {
    if (!post.title.trim() || !post.content.trim()) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }
    if (!confirm("글을 발행할까요?")) return;

    setIsPublishing(true);
    try {
      const newId = await createPost({
        title: post.title,
        contentMd: post.content,
        excerpt: generateExcerpt(post.content),
        category: post.category,
        status: "PUBLISHED",
        readTimeMin: estimateReadTime(post.content),
      });
      navigate(`/blog/${newId}`);
    } catch (e) {
      alert("글 발행에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsPublishing(false);
    }
  }, [post, navigate]);

  const handleDelete = () => {
    if (confirm("이 초안을 삭제할까요?")) {
      setPost({ ...INITIAL_POST, title: "", content: "" });
    }
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] overflow-hidden bg-[#f8fafc]">
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
          onUpdateCategory={(category: Category) => handleUpdatePost({ category })}
          onUpdateTags={(tags) => handleUpdatePost({ tags })}
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

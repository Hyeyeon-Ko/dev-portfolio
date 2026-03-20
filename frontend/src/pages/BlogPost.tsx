import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import BlogPostContent from "../components/blog/BlogPostContent";
import BlogPostSidebar from "../components/blog/BlogPostSidebar";
import CommentSection from "../components/blog/CommentSection";
import AdminCommentPanel from "../components/blog/AdminCommentPanel";
import { fetchPostDetail, fetchAllPostIds, deletePost } from "../api/blogApi";
import type { PostDetail } from "../types/blog";
import { isAdmin } from "../utils/auth";
import Dialog from "../components/ui/Dialog";
import { useDialog } from "../hooks/useDialog";
import { usePageMeta } from "../hooks/usePageMeta";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { dialogProps, confirm, alert } = useDialog();
  const postId = id ? parseInt(id, 10) : NaN;

  const [post, setPost] = useState<PostDetail | null>(null);
  const [allIds, setAllIds] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  usePageMeta(post?.title ?? "블로그");

  useEffect(() => {
    if (Number.isNaN(postId)) {
      setNotFound(true);
      setLoading(false);
      return;
    }
    let cancelled = false;
    setLoading(true);
    setNotFound(false);

    Promise.all([fetchPostDetail(postId), fetchAllPostIds()])
      .then(([detail, ids]) => {
        if (cancelled) return;
        setPost(detail);
        setAllIds(ids);
      })
      .catch(() => {
        if (!cancelled) setNotFound(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [postId]);

  if (loading) {
    return (
      <div className="flex justify-center py-32">
        <span className="material-symbols-outlined text-4xl text-slate-300 animate-pulse">hourglass_empty</span>
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <p className="text-slate-500 mb-6">포스트를 찾을 수 없습니다.</p>
        <Link to="/blog" className="text-primary font-semibold hover:underline">
          블로그 목록으로
        </Link>
      </div>
    );
  }

  const currentIndex = allIds.indexOf(postId);
  const prevId = currentIndex > 0 ? allIds[currentIndex - 1] : null;
  const nextId = currentIndex >= 0 && currentIndex < allIds.length - 1 ? allIds[currentIndex + 1] : null;

  const handleDeletePost = async () => {
    const ok = await confirm("이 글을 영구 삭제할까요?", {
      type: "danger",
      message: "삭제 후 복구할 수 없습니다.",
      confirmLabel: "삭제",
      cancelLabel: "취소",
    });
    if (!ok) return;
    deletePost(postId)
      .then(() => navigate("/blog"))
      .catch(() => alert("삭제에 실패했습니다.", { type: "error" }));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <Dialog {...dialogProps} />
      {isAdmin() && (
        <div className="flex justify-end gap-2 mb-6">
          <button
            type="button"
            onClick={() => navigate(`/blog/edit/${postId}`)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">edit</span>
            수정
          </button>
          <button
            type="button"
            onClick={handleDeletePost}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-rose-500 bg-rose-50 hover:bg-rose-100 transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">delete</span>
            삭제
          </button>
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        <div className="lg:col-span-2">
          <BlogPostContent
            post={post}
            onPrev={prevId ? () => navigate(`/blog/${prevId}`) : undefined}
            onNext={nextId ? () => navigate(`/blog/${nextId}`) : undefined}
          />
          <CommentSection postId={postId} />
          {isAdmin() && <AdminCommentPanel postId={postId} />}
        </div>
        <div className="lg:col-span-1">
          <BlogPostSidebar author={post.author} relatedPosts={post.relatedPosts ?? []} />
        </div>
      </div>
    </div>
  );
}

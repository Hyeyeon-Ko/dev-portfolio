import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import BlogPostContent from "../components/blog/BlogPostContent";
import BlogPostSidebar from "../components/blog/BlogPostSidebar";
import { fetchPostDetail, fetchAllPostIds } from "../api/blogApi";
import type { PostDetail } from "../types/blog";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const postId = id ? parseInt(id, 10) : NaN;

  const [post, setPost] = useState<PostDetail | null>(null);
  const [allIds, setAllIds] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

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

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        <div className="lg:col-span-2">
          <BlogPostContent
            post={post}
            onPrev={prevId ? () => navigate(`/blog/${prevId}`) : undefined}
            onNext={nextId ? () => navigate(`/blog/${nextId}`) : undefined}
          />
        </div>
        <div className="lg:col-span-1">
          <BlogPostSidebar author={post.author} relatedPosts={post.relatedPosts ?? []} />
        </div>
      </div>
    </div>
  );
}

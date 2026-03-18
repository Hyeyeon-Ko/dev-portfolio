import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { isAdmin } from "../utils/auth";

import BlogHero from "../components/blog/BlogHero";
import BlogFilterBar from "../components/blog/BlogFilterBar";
import PostCard from "../components/blog/PostCard";

import { BLOG_CATEGORIES } from "../constants/blog/mockBlog";
import { fetchPosts } from "../api/blogApi";
import type { Post, BlogCategory } from "../types/blog";

const PAGE_SIZE = 9;

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = (searchParams.get("category") as BlogCategory) ?? "All";
  const currentPage = parseInt(searchParams.get("page") ?? "0", 10);

  const [searchInput, setSearchInput] = useState("");
  const [debouncedQ, setDebouncedQ] = useState("");

  const [posts, setPosts] = useState<Post[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // 검색어 디바운스 (400ms)
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQ(searchInput), 400);
    return () => clearTimeout(t);
  }, [searchInput]);

  // 글 목록 조회
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(false);

    fetchPosts({ category: activeCategory, q: debouncedQ, page: currentPage, size: PAGE_SIZE })
      .then((page) => {
        if (!cancelled) {
          setPosts(page.items);
          setTotalPages(page.totalPages);
        }
      })
      .catch(() => { if (!cancelled) setError(true); })
      .finally(() => { if (!cancelled) setLoading(false); });

    return () => { cancelled = true; };
  }, [activeCategory, debouncedQ, currentPage]);

  const handleCategoryChange = (cat: BlogCategory) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (cat === "All") next.delete("category");
      else next.set("category", cat);
      next.delete("page");
      return next;
    });
  };

  const handlePageChange = (p: number) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (p === 0) next.delete("page");
      else next.set("page", String(p));
      return next;
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isFiltering = activeCategory !== "All" || debouncedQ.length > 0;
  const isLastPage = currentPage >= totalPages - 1;

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <BlogHero />

      {isAdmin() && (
        <div className="flex justify-end mb-6">
          <Link
            to="/blog/write"
            className="px-5 py-2.5 rounded-xl text-sm font-bold bg-primary text-white hover:bg-primary/90 transition-all"
          >
            글 쓰기
          </Link>
        </div>
      )}

      <BlogFilterBar
        categories={BLOG_CATEGORIES}
        activeCategory={activeCategory}
        onChangeCategory={handleCategoryChange}
        searchQuery={searchInput}
        onChangeSearchQuery={setSearchInput}
      />

      {error && (
        <p className="text-center text-slate-400 py-16">글을 불러오지 못했습니다. 잠시 후 다시 시도해주세요.</p>
      )}

      {loading && !error && (
        <div className="flex justify-center py-16">
          <span className="material-symbols-outlined text-4xl text-slate-300 animate-pulse">hourglass_empty</span>
        </div>
      )}

      {!loading && !error && posts.length === 0 && (
        <div className="py-20 text-center">
          <span className="material-symbols-outlined text-4xl text-slate-300 mb-4 block">search_off</span>
          <p className="text-slate-400 font-medium">검색 결과가 없습니다.</p>
        </div>
      )}

      {!loading && !error && posts.length > 0 && (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}

          {isLastPage && !isFiltering && (
            <article className="glass-card p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-500 group cursor-pointer flex flex-col h-full border-dashed border-2 border-slate-300">
              <div className="flex flex-col items-center justify-center flex-1 text-center py-12">
                <span className="material-symbols-outlined text-4xl text-slate-300 mb-4 animate-pulse">
                  more_horiz
                </span>
                <p className="text-slate-400 font-bold">계속해서 업데이트 중입니다...</p>
              </div>
            </article>
          )}
        </section>
      )}

      {/* 페이지네이션 */}
      {!loading && !error && totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mb-24">
          <button
            type="button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 0}
            className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-500 hover:bg-slate-100 disabled:opacity-30 transition-all"
          >
            이전
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handlePageChange(i)}
              className={`w-9 h-9 rounded-xl text-sm font-bold transition-all ${
                i === currentPage
                  ? "bg-primary text-white shadow-sm"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage >= totalPages - 1}
            className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-500 hover:bg-slate-100 disabled:opacity-30 transition-all"
          >
            다음
          </button>
        </div>
      )}

    </div>
  );
}

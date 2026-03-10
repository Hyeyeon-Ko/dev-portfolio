import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { isAdmin } from "../utils/auth";

import BlogHero from "../components/blog/BlogHero";
import BlogFilterBar from "../components/blog/BlogFilterBar";
import PostCard from "../components/blog/PostCard";
import CodeSnippet from "../components/blog/CodeSnippet";
import BlogAssistant from "../components/blog/BlogAssistant";

import { BLOG_CATEGORIES } from "../constants/blog/mockBlog";
import { fetchPosts } from "../api/blogApi";
import type { Post, BlogCategory } from "../types/blog";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(false);

    fetchPosts({ category: activeCategory, q: searchQuery, size: 50 })
      .then((page) => {
        if (!cancelled) setPosts(page.items);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [activeCategory, searchQuery]);

  // 검색은 API가 처리하므로 local filter 불필요
  const filteredPosts = useMemo(() => posts, [posts]);

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

      <div className="mb-16">
        <CodeSnippet />
      </div>

      <BlogFilterBar
        categories={BLOG_CATEGORIES}
        activeCategory={activeCategory}
        onChangeCategory={setActiveCategory}
        searchQuery={searchQuery}
        onChangeSearchQuery={setSearchQuery}
      />

      {error && (
        <p className="text-center text-slate-400 py-16">글을 불러오지 못했습니다. 잠시 후 다시 시도해주세요.</p>
      )}

      {loading && !error && (
        <div className="flex justify-center py-16">
          <span className="material-symbols-outlined text-4xl text-slate-300 animate-pulse">hourglass_empty</span>
        </div>
      )}

      {!loading && !error && (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}

          <article className="glass-card p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-500 group cursor-pointer flex flex-col h-full border-dashed border-2 border-slate-300">
            <div className="flex flex-col items-center justify-center flex-1 text-center py-12">
              <span className="material-symbols-outlined text-4xl text-slate-300 mb-4 animate-pulse">
                more_horiz
              </span>
              <p className="text-slate-400 font-bold">계속해서 업데이트 중입니다...</p>
            </div>
          </article>
        </section>
      )}

      <BlogAssistant posts={filteredPosts} />
    </div>
  );
}

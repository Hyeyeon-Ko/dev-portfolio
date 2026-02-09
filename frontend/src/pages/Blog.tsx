import { useMemo, useState } from "react";

import BlogHero from "../components/blog/BlogHero";
import BlogFilterBar from "../components/blog/BlogFilterBar";
import PostCard from "../components/blog/PostCard";
import CodeSnippet from "../components/blog/CodeSnippet";
import BlogAssistant from "../components/blog/BlogAssistant";

import { BLOG_CATEGORIES, BLOG_POSTS } from "../constants/blog/mockBlog";
import type { BlogCategory } from "../types/blog";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;

      const matchesSearch =
        q.length === 0 ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <BlogHero />

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

      {/* 선택: AI Assistant(일단 UI만) */}
      <BlogAssistant posts={BLOG_POSTS} />
    </div>
  );
}

import React from "react";
import { BLOG_POSTS } from "../../constants/blog/mockBlog";
import { Link } from "react-router-dom";

import PostCard from "../blog/PostCard";

function parseBlogDateToNumber(date: string): number {
  // Expected format: YYYY.MM.DD
  return Number(date.replaceAll(".", ""));
}

const BlogSection: React.FC = () => {
  const latestPosts = [...BLOG_POSTS]
    .sort((a, b) => parseBlogDateToNumber(b.date) - parseBlogDateToNumber(a.date))
    .slice(0, 3);

  return (
    <section id="blog" className="max-w-7xl mx-auto px-6 mb-32">
      <div className="flex items-end justify-between mb-12">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold text-slate-900 leading-tight">Blog</h2>
          <p className="text-slate-500">배움의 과정을 기록하고 공유하는 개인적인 기술 저널입니다.</p>
        </div>
        <Link
          to="/blog"
          className="text-slate-400 font-bold text-sm hover:text-slate-600 transition-colors"
        >
          기록 전체 보기
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {latestPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

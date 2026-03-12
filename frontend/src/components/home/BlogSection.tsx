import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostCard from "../blog/PostCard";
import { fetchPosts } from "../../api/blogApi";
import type { Post } from "../../types/blog";

const BlogSection: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts({ size: 3 })
      .then((page) => setPosts(page.items))
      .catch(() => {});
  }, []);

  return (
    <section id="blog" className="max-w-7xl mx-auto px-6 mb-32">
      <div className="flex items-end justify-between mb-12">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold text-slate-900 leading-tight font-brand">Blog</h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">배움의 과정을 기록하고 공유하는 개인적인 기술 저널입니다.</p>
        </div>
        <Link
          to="/blog"
          className="text-slate-400 font-bold text-sm hover:text-slate-600 transition-colors"
        >
          기록 전체 보기
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

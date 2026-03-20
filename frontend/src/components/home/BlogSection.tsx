import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostCard from "../blog/PostCard";
import { fetchPosts } from "../../api/blogApi";
import type { Post } from "../../types/blog";

const BlogSection: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchPosts({ size: 3 })
      .then((page) => setPosts(page.items))
      .catch(() => setError(true));
  }, []);

  return (
    <section id="blog" className="max-w-7xl mx-auto px-6 mb-32">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-12">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 leading-tight font-brand">Blog</h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">배움의 과정을 기록하고 공유하는 개인적인 기술 저널입니다.</p>
        </div>
        <Link
          to="/blog"
          className="text-slate-400 dark:text-slate-500 font-bold text-sm hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
        >
          기록 전체 보기
        </Link>
      </div>

      {error && (
        <p className="text-slate-400 text-sm text-center py-12">
          포스트를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.
        </p>
      )}

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

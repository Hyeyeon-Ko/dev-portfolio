
import React from 'react';
import { BLOG_POSTS } from '../../constants';

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="max-w-7xl mx-auto px-6 mb-32">
      <div className="flex items-end justify-between mb-12">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold text-slate-900 leading-tight">Blog</h2>
          <p className="text-slate-500">배움의 과정을 기록하고 공유하는 개인적인 기술 저널입니다.</p>
        </div>
        <a href="#" className="text-slate-400 font-bold text-sm hover:text-slate-600 transition-colors">기록 전체 보기</a>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <div key={post.id} className="bg-white rounded-3xl p-8 border border-slate-100 card-shadow flex flex-col hover:-translate-y-2 transition-all group">
            <div className="flex items-center justify-between mb-6">
              <span className={`px-3 py-1 rounded-lg text-[10px] font-black tracking-widest ${
                post.category === 'TIL' ? 'bg-indigo-50 text-indigo-500' :
                post.category === 'RETROSPECTIVE' ? 'bg-purple-50 text-purple-500' :
                'bg-emerald-50 text-emerald-500'
              }`}>
                {post.category}
              </span>
              <span className="text-xs text-slate-300 font-medium">{post.date}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-indigo-600 transition-colors">
              {post.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
              {post.excerpt}
            </p>
            <div className="h-0.5 w-8 bg-slate-100 group-hover:w-full transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

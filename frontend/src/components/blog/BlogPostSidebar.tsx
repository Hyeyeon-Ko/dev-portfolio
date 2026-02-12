import type { FC } from "react";
import { Link } from "react-router-dom";
import type { Author, RelatedPost } from "../../types/blog";

type Props = {
  author: Author;
  relatedPosts: RelatedPost[];
};

const BlogPostSidebar: FC<Props> = ({ author, relatedPosts }) => {
  return (
    <aside className="space-y-8">
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm text-center">
        <div className="relative inline-block mb-4">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-24 h-24 rounded-full border-4 border-primary/20 p-1"
          />
          <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full" />
        </div>
        <h3 className="text-xl font-bold mb-1">{author.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">{author.bio}</p>
        <button
          type="button"
          className="w-full bg-slate-900 text-white py-3 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all"
        >
          팔로우하기
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2 px-1">
          <span className="text-primary text-xl">✦</span>
          <h4 className="font-bold text-gray-800">연관 포스트</h4>
        </div>
        {relatedPosts.map((post, idx) => (
          <Link
            key={idx}
            to={`/blog/${idx + 2}`}
            className="block bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:border-primary/30 transition-all group cursor-pointer"
          >
            <span
              className={`text-[10px] font-bold tracking-widest uppercase mb-2 block ${
                post.type === "TIL"
                  ? "text-blue-500"
                  : post.type === "Thinking"
                    ? "text-purple-500"
                    : "text-rose-400"
              }`}
            >
              {post.category}
            </span>
            <h5 className="font-bold text-gray-800 group-hover:text-primary transition-colors mb-2 line-clamp-2">
              {post.title}
            </h5>
            <span className="text-gray-400 text-xs">{post.date}</span>
          </Link>
        ))}
      </div>

      <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h4 className="font-bold text-xl mb-2">Newsletter</h4>
          <p className="text-white/80 text-sm mb-6 leading-relaxed">
            매주 금요일, 프론트엔드 트렌드를 전해드립니다.
          </p>
          <div className="relative group">
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-sm placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
            <button
              type="button"
              className="absolute right-2 top-2 p-1.5 rounded-lg hover:bg-white/20 transition-colors"
              aria-label="구독"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="rotate-[-20deg]"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
        <div className="absolute top-[-20%] right-[-20%] w-48 h-48 bg-white/10 rounded-full blur-3xl" />
      </div>
    </aside>
  );
};

export default BlogPostSidebar;

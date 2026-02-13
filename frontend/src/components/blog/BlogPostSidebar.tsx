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
        <p className="text-gray-500 text-sm leading-relaxed">{author.bio}</p>
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
    </aside>
  );
};

export default BlogPostSidebar;

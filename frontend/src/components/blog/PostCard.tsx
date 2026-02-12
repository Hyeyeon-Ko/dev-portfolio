import { Link } from "react-router-dom";
import type { Post } from "../../types/blog";

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  const isAccent = post.category === "Retrospective";
  const tagColor = isAccent ? "text-accent bg-accent/10" : "text-primary bg-primary/10";
  const hoverColor = isAccent ? "group-hover:text-accent" : "group-hover:text-primary";
  const arrowColor = isAccent ? "text-accent" : "text-primary";

  return (
    <Link to={`/blog/${post.id}`}>
      <article className="glass-card p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-500 group cursor-pointer flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest ${tagColor}`}>
          {post.category}
        </span>
        <span className="text-xs text-slate-400 font-medium">{post.date}</span>
      </div>

      <h3 className={`text-2xl font-bold mb-4 ${hoverColor} transition-colors leading-tight`}>
        {post.title}
      </h3>

      <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">
        {post.excerpt}
      </p>

      <div className="flex items-center justify-between pt-6 border-t border-slate-100/50">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-sm text-slate-400">schedule</span>
          <span className="text-xs text-slate-400 font-bold">{post.readTime}</span>
        </div>
        <span
          className={`material-symbols-outlined ${arrowColor} opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all`}
        >
          arrow_forward
        </span>
      </div>
    </article>
    </Link>
  );
}

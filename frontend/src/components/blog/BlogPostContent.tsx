import { useState, type FC } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { HeartIcon, MessageCircleIcon } from "./BlogIcons";
import type { PostDetail } from "../../types/blog";
import { likePost } from "../../api/blogApi";

type Props = {
  post: PostDetail;
  onPrev?: () => void;
  onNext?: () => void;
};

const BlogPostContent: FC<Props> = ({ post, onPrev, onNext }) => {
  const { author, category, date, title, subtitle, tags, content } = post;

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likeCount);

  const handleLike = async () => {
    if (liked) return;
    setLiked(true);
    setLikeCount((c) => c + 1);
    try {
      await likePost(post.id);
    } catch {
      setLiked(false);
      setLikeCount((c) => c - 1);
    }
  };

  return (
    <article className="lg:pr-12">
      <div className="flex items-center gap-4 text-sm text-gray-400 mb-6 font-medium">
        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-tight">
          {category}
        </span>
        <span>{date}</span>
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-4xl font-extrabold text-slate-900 leading-[1.15] mb-8">
        {title}
        {subtitle && (
          <>
            <br />
            <span className="text-primary">{subtitle}</span>
          </>
        )}
      </h1>

      <div className="flex items-center justify-between mb-12 py-6 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-12 h-12 rounded-full ring-2 ring-primary/20"
          />
          <div>
            <div className="font-bold text-slate-800">{author.name}</div>
            <div className="text-sm text-gray-400">{author.title}</div>
          </div>
        </div>
      </div>

      {/* 마크다운 본문 */}
      <div className="prose prose-slate max-w-none mb-12
        prose-headings:font-extrabold prose-headings:text-slate-900
        prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
        prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
        prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1 prose-code:rounded prose-code:font-semibold prose-code:text-sm
        prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-2xl prose-pre:p-6
        prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-slate-700 prose-blockquote:bg-primary/5 prose-blockquote:py-4 prose-blockquote:rounded-r-xl
        prose-ul:text-gray-600 prose-ol:text-gray-600
        prose-li:mb-2
        prose-strong:text-slate-800
        prose-table:w-full prose-th:bg-slate-50 prose-th:font-bold
        prose-img:rounded-2xl prose-img:my-8">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-16">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-slate-100 text-slate-500 rounded-full text-sm font-semibold hover:bg-slate-200 transition-colors cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between p-8 bg-white rounded-3xl border border-gray-100 shadow-sm mb-20">
        <div className="flex gap-6">
          <div className="relative group/like">
            <button
              type="button"
              onClick={handleLike}
              disabled={liked}
              className="flex items-center gap-2.5 text-slate-500 hover:text-rose-500 transition-colors group disabled:cursor-default"
            >
              <HeartIcon
                className={liked ? "fill-rose-500 stroke-rose-500" : "group-hover:fill-rose-500 group-hover:stroke-rose-500"}
              />
              <span className="font-bold">{likeCount}</span>
            </button>
            {liked && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-800 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover/like:opacity-100 transition-opacity pointer-events-none">
                이미 좋아요를 눌렀어요 🩷
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800" />
              </div>
            )}
          </div>
          <button
            type="button"
            className="flex items-center gap-2.5 text-slate-500 hover:text-blue-500 transition-colors"
          >
            <MessageCircleIcon />
            <span className="font-bold">{post.commentCount}</span>
          </button>
        </div>
        <div className="flex gap-4 text-sm font-bold text-gray-400">
          <button
            type="button"
            onClick={onPrev}
            disabled={!onPrev}
            className="hover:text-primary transition-colors disabled:opacity-30"
          >
            이전 글
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={!onNext}
            className="hover:text-primary transition-colors disabled:opacity-30"
          >
            다음 글
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogPostContent;

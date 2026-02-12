import { useState, type FC, type KeyboardEvent } from "react";
import type { Category, BlogWriteUser } from "../../../types/blog";

type Props = {
  category: Category;
  tags: string[];
  onUpdateCategory: (category: Category) => void;
  onUpdateTags: (tags: string[]) => void;
  user: BlogWriteUser;
};

const CATEGORIES: Category[] = ["TIL", "Retrospective", "Thinking"];

const WriteSidebar: FC<Props> = ({ category, tags, onUpdateCategory, onUpdateTags, user }) => {
  const [tagInput, setTagInput] = useState("");

  const handleAddTag = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim()) {
      const newTag = tagInput.trim().toLowerCase();
      if (!tags.includes(newTag)) {
        onUpdateTags([...tags, newTag]);
      }
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    onUpdateTags(tags.filter((t) => t !== tagToRemove));
  };

  return (
    <aside className="w-80 flex flex-col p-8 border-r border-slate-100 bg-[#f8fafc] shrink-0">
      <div className="mb-10">
        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">
          Category
        </h3>
        <div className="space-y-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => onUpdateCategory(cat)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                category === cat
                  ? "bg-primary/10 text-primary shadow-sm border border-primary/20"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              {cat}
              {category === cat && (
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-200/60 text-slate-600 rounded-full text-xs font-bold transition-colors hover:bg-slate-200"
            >
              #{tag}
              <button
                type="button"
                onClick={() => removeTag(tag)}
                className="p-0.5 hover:text-rose-500 rounded-full"
                aria-label={`${tag} 태그 제거`}
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </span>
          ))}
        </div>
        <input
          type="text"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={handleAddTag}
          placeholder="Add tag..."
          className="w-full bg-slate-100/80 border-none rounded-xl px-4 py-3 text-sm placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 transition-all"
        />
      </div>

      <div className="mb-10">
        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">
          Cover Image
        </h3>
        <div className="aspect-video w-full rounded-2xl border-2 border-dashed border-slate-200 bg-white/50 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-primary/40 hover:bg-primary/5 transition-all group">
          <div className="p-2 bg-slate-100 rounded-xl text-slate-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <span className="text-xs font-semibold text-slate-400 group-hover:text-primary">
            Click to upload
          </span>
        </div>
      </div>

      <div className="mt-auto pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm"
          />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-800 tracking-tight">{user.name}</span>
            <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">
              {user.role}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default WriteSidebar;

import type { FC } from "react";

type Props = {
  title: string;
  content: string;
  onUpdateTitle: (title: string) => void;
  onUpdateContent: (content: string) => void;
};

const WriteEditor: FC<Props> = ({ title, content, onUpdateTitle, onUpdateContent }) => {
  return (
    <div className="h-full flex flex-col max-w-4xl mx-auto px-12 py-12">
      <input
        type="text"
        value={title}
        onChange={(e) => onUpdateTitle(e.target.value)}
        placeholder="Enter post title..."
        className="w-full text-5xl font-serif font-black placeholder:text-slate-100 text-slate-900 border-none focus:ring-0 mb-12 py-4 bg-transparent"
      />

      <div className="flex-1 flex flex-col min-h-0">
        <textarea
          value={content}
          onChange={(e) => onUpdateContent(e.target.value)}
          placeholder="# Start writing..."
          className="flex-1 w-full font-mono text-lg text-slate-700 placeholder:text-slate-200 border-none focus:ring-0 resize-none leading-relaxed bg-transparent min-h-[200px]"
        />
      </div>
    </div>
  );
};

export default WriteEditor;

import { useState, useCallback } from "react";
import WriteHeader from "../components/blog/write/WriteHeader";
import WriteSidebar from "../components/blog/write/WriteSidebar";
import WriteEditor from "../components/blog/write/WriteEditor";
import type { BlogDraft, BlogWriteUser, Category } from "../types/blog";

const INITIAL_POST: BlogDraft = {
  title: "",
  content:
    "# React 19: The Future of Web Development\nReact 19 is introducing some groundbreaking changes that will redefine how we build user interfaces. The most anticipated feature is the **React Compiler**.\n\n## Key Features\n1. **Auto-memoization**: No more `useMemo` and `useCallback` manual optimization.\n2. **Actions API**: Simplified form handling and data mutations.\n3. **New Hooks**: Enhanced support for server components and concurrent features.\n\n> \"The best code is the code you don't have to write.\"",
  category: "TIL",
  tags: ["react", "typescript"],
  coverImage: null,
  lastSaved: new Date().toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  }),
};

const USER: BlogWriteUser = {
  name: "Dev.Aesthetic",
  role: "Author Mode",
  avatar: "https://picsum.photos/seed/dev/100/100",
};

export default function BlogWrite() {
  const [post, setPost] = useState<BlogDraft>(INITIAL_POST);
  const [isSaving, setIsSaving] = useState(false);

  const handleUpdatePost = (updates: Partial<BlogDraft>) => {
    setPost((prev) => ({ ...prev, ...updates }));
  };

  const handleSaveDraft = useCallback(() => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      handleUpdatePost({
        lastSaved: new Date().toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        }),
      });
    }, 1000);
  }, []);

  const handleDelete = () => {
    if (confirm("이 초안을 삭제할까요?")) {
      setPost({ ...INITIAL_POST, title: "", content: "" });
    }
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] overflow-hidden bg-[#f8fafc]">
      <WriteHeader
        lastSaved={post.lastSaved}
        isSaving={isSaving}
        onSave={handleSaveDraft}
        onDelete={handleDelete}
      />
      <div className="flex flex-1 overflow-hidden">
        <WriteSidebar
          category={post.category}
          tags={post.tags}
          onUpdateCategory={(category: Category) => handleUpdatePost({ category })}
          onUpdateTags={(tags) => handleUpdatePost({ tags })}
          user={USER}
        />
        <main className="flex-1 overflow-y-auto bg-white">
          <WriteEditor
            title={post.title}
            content={post.content}
            onUpdateTitle={(title) => handleUpdatePost({ title })}
            onUpdateContent={(content) => handleUpdatePost({ content })}
          />
        </main>
      </div>
    </div>
  );
}

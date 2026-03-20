import { useEffect, useState, type FC } from "react";
import { fetchComments, createComment, type Comment } from "../../api/blogApi";

type Props = {
  postId: number;
};

const CommentSection: FC<Props> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [authorName, setAuthorName] = useState("");
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchComments(postId)
      .then(setComments)
      .catch(() => setComments([]));
  }, [postId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !content.trim()) return;
    setSubmitting(true);
    setError(null);
    try {
      await createComment(postId, { authorName: authorName.trim(), content: content.trim() });
      setAuthorName("");
      setContent("");
      setSubmitted(true);
    } catch {
      setError("댓글 작성에 실패했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
  };

  return (
    <section className="mt-12">
      <h2 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 mb-6">
        댓글 <span className="text-primary">{comments.length}</span>
      </h2>

      {/* 댓글 목록 */}
      {comments.length === 0 ? (
        <div className="bg-white dark:bg-slate-800 rounded-[2rem] border border-gray-100 dark:border-slate-700 shadow-sm p-10 text-center text-gray-400 dark:text-slate-500 mb-8">
          첫 번째 댓글을 남겨보세요
        </div>
      ) : (
        <div className="flex flex-col gap-4 mb-8">
          {comments.map((c) => (
            <div
              key={c.id}
              className="bg-white dark:bg-slate-800 rounded-[2rem] border border-gray-100 dark:border-slate-700 shadow-sm px-7 py-5"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="font-bold text-slate-800 dark:text-slate-100 text-sm">
                  {c.authorName ?? "익명"}
                </span>
                <span className="text-xs text-gray-400 dark:text-slate-500">{formatDate(c.createdAt)}</span>
              </div>
              <p className="text-gray-600 dark:text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">{c.content}</p>
            </div>
          ))}
        </div>
      )}

      {/* 작성 폼 */}
      {submitted ? (
        <div className="bg-primary/5 border border-primary/20 rounded-[2rem] p-8 text-center">
          <p className="text-primary font-semibold">댓글이 등록되었습니다.</p>
          <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">관리자 승인 후 공개됩니다.</p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-4 text-sm text-primary font-bold hover:underline"
          >
            댓글 더 작성하기
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-slate-800 rounded-[2rem] border border-gray-100 dark:border-slate-700 shadow-sm px-7 py-6 flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="닉네임 (필수)"
            maxLength={20}
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            required
            className="w-full rounded-xl border border-gray-200 dark:border-slate-700 px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <textarea
            placeholder="댓글을 입력하세요 (필수)"
            maxLength={500}
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full rounded-xl border border-gray-200 dark:border-slate-700 px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
          />
          {error && <p className="text-sm text-rose-500">{error}</p>}
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-400 dark:text-slate-500">승인 후 공개됩니다</p>
            <button
              type="submit"
              disabled={submitting}
              className="px-6 py-2 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {submitting ? "등록 중..." : "댓글 등록"}
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default CommentSection;

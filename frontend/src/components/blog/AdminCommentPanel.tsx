import { useCallback, useEffect, useState, type FC } from "react";
import {
  fetchPendingComments,
  approveComment,
  deleteComment,
  type Comment,
} from "../../api/blogApi";
import { isAdmin } from "../../utils/auth";

type Props = {
  postId: number;
};

const AdminCommentPanel: FC<Props> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(() => {
    setLoading(true);
    fetchPendingComments(postId)
      .then(setComments)
      .catch(() => setComments([]))
      .finally(() => setLoading(false));
  }, [postId]);

  useEffect(() => {
    if (!isAdmin()) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
  }, [load]);

  if (!isAdmin()) return null;

  const handleApprove = async (id: number) => {
    await approveComment(id);
    load();
  };

  const handleDelete = async (id: number) => {
    await deleteComment(id);
    load();
  };

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
  };

  return (
    <section className="mt-10">
      <h2 className="text-lg font-extrabold text-slate-700 mb-4">
        관리자 — 승인 대기 댓글{" "}
        <span className="text-primary">{comments.length}</span>
      </h2>

      {loading ? (
        <div className="text-sm text-gray-400 py-4">불러오는 중...</div>
      ) : comments.length === 0 ? (
        <div className="bg-slate-50 rounded-[2rem] border border-gray-100 p-8 text-center text-gray-400 text-sm">
          승인 대기 중인 댓글이 없습니다
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {comments.map((c) => (
            <div
              key={c.id}
              className="bg-slate-50 rounded-[2rem] border border-gray-200 px-7 py-5 flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <span className="font-bold text-slate-700 text-sm">
                  {c.authorName ?? "익명"}
                </span>
                <span className="text-xs text-gray-400">{formatDate(c.createdAt)}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">
                {c.content}
              </p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => handleApprove(c.id)}
                  className="px-5 py-1.5 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary/90 transition-colors"
                >
                  승인
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(c.id)}
                  className="px-5 py-1.5 bg-rose-500 text-white text-xs font-bold rounded-xl hover:bg-rose-600 transition-colors"
                >
                  삭제
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default AdminCommentPanel;

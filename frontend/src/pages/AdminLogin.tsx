import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { setAdminKey } from "../utils/auth";

export default function AdminLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string })?.from ?? "/";

  const [key, setKey] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!key.trim()) return;

    setLoading(true);
    setError(false);

    try {
      // 관리자 API 호출로 키 유효성 검증
      const res = await fetch("/api/admin/posts?size=1", {
        headers: { "X-ADMIN-KEY": key.trim() },
      });

      if (res.ok) {
        setAdminKey(key.trim());
        navigate(from, { replace: true });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="glass-card p-10 rounded-[2rem]">
          <div className="text-center mb-8">
            <span className="material-symbols-outlined text-4xl text-primary mb-3 block">
              lock
            </span>
            <h1 className="text-2xl font-extrabold text-slate-900">관리자 로그인</h1>
            <p className="text-sm text-slate-400 mt-2">관리자 키를 입력하세요</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="Admin Key"
              autoFocus
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />

            {error && (
              <p className="text-sm text-rose-500 font-medium text-center">
                키가 올바르지 않습니다.
              </p>
            )}

            <button
              type="submit"
              disabled={loading || !key.trim()}
              className="w-full py-3 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary/90 disabled:opacity-50 transition-all"
            >
              {loading ? "확인 중..." : "로그인"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

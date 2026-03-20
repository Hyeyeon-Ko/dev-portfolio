import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta("페이지를 찾을 수 없습니다");

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <p className="text-8xl font-black text-gradient mb-4">404</p>
      <h1 className="text-2xl font-bold text-slate-700 dark:text-slate-200 mb-3">페이지를 찾을 수 없습니다</h1>
      <p className="text-slate-400 mb-10">요청하신 주소가 존재하지 않거나 이동되었습니다.</p>
      <Link
        to="/"
        className="px-6 py-3 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}

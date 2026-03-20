type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
};

export default function Pagination({ currentPage, totalPages, onPageChange, className = "" }: Props) {
  if (totalPages <= 1) return null;

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 0}
        className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-30 transition-all"
      >
        이전
      </button>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onPageChange(i)}
          className={`w-9 h-9 rounded-xl text-sm font-bold transition-all ${
            i === currentPage
              ? "bg-primary text-white shadow-sm"
              : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
          }`}
        >
          {i + 1}
        </button>
      ))}
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages - 1}
        className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-30 transition-all"
      >
        다음
      </button>
    </div>
  );
}

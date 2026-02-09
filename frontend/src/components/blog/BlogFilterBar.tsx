import type { BlogCategory } from "../../types/blog";

type Props = {
  categories: { label: string; value: BlogCategory }[];
  activeCategory: BlogCategory;
  onChangeCategory: (cat: BlogCategory) => void;
  searchQuery: string;
  onChangeSearchQuery: (q: string) => void;
};

export default function BlogFilterBar({
  categories,
  activeCategory,
  onChangeCategory,
  searchQuery,
  onChangeSearchQuery,
}: Props) {
  return (
    <section className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3 overflow-x-auto pb-2 w-full md:w-auto custom-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => onChangeCategory(cat.value)}
            className={[
              "px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap",
              activeCategory === cat.value
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "glass-card hover:bg-white/60",
            ].join(" ")}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="relative w-full md:w-80">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          search
        </span>
        <input
          className="w-full pl-12 pr-4 py-3 rounded-2xl glass-card focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm font-medium"
          placeholder="기록 검색하기..."
          type="text"
          value={searchQuery}
          onChange={(e) => onChangeSearchQuery(e.target.value)}
        />
      </div>
    </section>
  );
}

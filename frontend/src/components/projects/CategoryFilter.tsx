import { Category } from "../../types/project";

type Props = {
  categories: Category[];
  selected: Category;
  onSelect: (cat: Category) => void;
};

export default function CategoryFilter({ categories, selected, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-3 mb-12">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={[
            "px-6 py-2 rounded-full transition-all font-bold text-sm",
            selected === cat
              ? "bg-primary text-white shadow-lg shadow-primary/20"
              : "glass-card hover:bg-white/60",
          ].join(" ")}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

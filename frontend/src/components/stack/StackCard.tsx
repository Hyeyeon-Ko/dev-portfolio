import type { SkillCategory } from "../../types/stack";

export default function StackCard({ category }: { category: SkillCategory }) {
  const iconBg = category.colorClass.replace("text-", "bg-").replace("500", "100");

  return (
    <div className="glass-card rounded-[2.5rem] p-8 hover:shadow-2xl transition-all duration-500">
      <div className="flex items-center gap-4 mb-8">
        <div className={`size-12 rounded-2xl ${iconBg} flex items-center justify-center`}>
          <span className={`material-symbols-outlined ${category.colorClass} text-2xl`}>
            {category.icon}
          </span>
        </div>
        <h3 className="text-2xl font-bold font-serif">{category.title}</h3>
      </div>

      <div className="space-y-6">
        {category.items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 p-4 rounded-2xl bg-white/30 border border-white/50 hover:bg-white/50 transition-colors"
          >
            <div className={`size-10 shrink-0 bg-white rounded-xl shadow-sm flex items-center justify-center font-bold ${item.color} text-[10px] uppercase text-center leading-tight`}>
              {item.name}
            </div>
            <div>
              <p className="font-bold text-sm mb-1">{item.fullName}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

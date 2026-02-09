import { INFRA_TOOLS } from "../../constants/stack/mockStack";

export default function InfrastructureGrid() {
  return (
    <section className="mb-32">
      <div className="flex items-center gap-3 mb-8 px-2">
        <div className="size-2.5 bg-slate-800 rounded-full" />
        <h2 className="text-2xl font-bold tracking-tight font-serif uppercase">
          Infrastructure & Tools
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {INFRA_TOOLS.map((tool, idx) => (
          <div
            key={idx}
            className="glass-card p-6 rounded-3xl group hover:border-primary/50 transition-all cursor-default"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`size-10 rounded-xl ${tool.bgColor} flex items-center justify-center`}>
                <span className={`material-symbols-outlined ${tool.iconColor}`}>{tool.icon}</span>
              </div>
              <span className="font-bold">{tool.name}</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">{tool.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

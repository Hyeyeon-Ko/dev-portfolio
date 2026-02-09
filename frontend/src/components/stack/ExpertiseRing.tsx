import { EXPERTISE } from "../../constants/stack/mockStack";

function SkillBar({
  label,
  percentage,
  colorClass,
  textClass,
}: {
  label: string;
  percentage: number;
  colorClass: string;
  textClass: string;
}) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-sm mb-1">
        <span className="font-bold text-slate-600">{label}</span>
        <span className={`font-bold ${textClass}`}>{percentage}%</span>
      </div>
      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
        <div className={`h-full ${colorClass} rounded-full`} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}

export default function ExpertiseRing() {
  return (
    <div className="lg:col-span-1 glass-card rounded-[2.5rem] p-10 flex flex-col items-center justify-center relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <h3 className="text-xl font-bold mb-8 relative z-10 font-serif">
        Level of Expertise
      </h3>

      <div className="relative size-64 flex items-center justify-center mb-8">
        <svg className="size-full" viewBox="0 0 100 100">
          <circle
            className="text-slate-200 stroke-current"
            cx="50"
            cy="50"
            fill="transparent"
            r="40"
            strokeWidth="8"
          />
          {/* Frontend Ring */}
          <circle
            className="text-primary stroke-current"
            cx="50"
            cy="50"
            fill="transparent"
            r="40"
            strokeLinecap="round"
            strokeWidth="8"
            style={{
              strokeDasharray: "251.2",
              strokeDashoffset: "60",
              transform: "rotate(-90deg)",
              transformOrigin: "50% 50%",
            }}
          />
          {/* Backend Ring */}
          <circle
            className="text-accent stroke-current"
            cx="50"
            cy="50"
            fill="transparent"
            r="32"
            strokeLinecap="round"
            strokeWidth="4"
            style={{
              strokeDasharray: "201",
              strokeDashoffset: "100",
              transform: "rotate(-90deg)",
              transformOrigin: "50% 50%",
            }}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-4xl font-black text-slate-800">{EXPERTISE.levelLabel}</span>
          <span className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">
            Total Skillset
          </span>
        </div>
      </div>

      <div className="w-full space-y-4 relative z-10">
        <SkillBar label="Frontend" percentage={EXPERTISE.frontend} colorClass="bg-primary" textClass="text-primary" />
        <SkillBar label="Backend" percentage={EXPERTISE.backend} colorClass="bg-accent" textClass="text-accent" />
        <SkillBar label="DevOps & Tools" percentage={EXPERTISE.devops} colorClass="bg-slate-800" textClass="text-slate-800" />
      </div>
    </div>
  );
}

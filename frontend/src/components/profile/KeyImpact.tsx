import React from "react";
import { KEY_IMPACTS } from "../../constants/mockProfile";

const toneClass = (tone?: "primary" | "accent" | "dark") => {
  switch (tone) {
    case "accent":
      return { text: "text-accent", border: "border-l-accent" };
    case "dark":
      return { text: "text-dark", border: "border-l-dark" };
    default:
      return { text: "text-primary", border: "border-l-primary" };
  }
};

const KeyImpact: React.FC = () => {
  return (
    <section className="mb-20">
      <h3 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-8">
        Key Impact
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {KEY_IMPACTS.map((item, idx) => {
          const cls = toneClass(item.tone);
          return (
            <div
              key={idx}
              className={`glass-card p-8 rounded-3xl border-l-4 ${cls.border} hover:shadow-lg transition-shadow`}
            >
              <p className={`text-4xl font-black font-serif mb-2 ${cls.text}`}>
                {item.value}
              </p>
              {item.subtitle && (
                <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-2">
                  {item.subtitle}
                </p>
              )}
              <p className="text-sm font-bold text-slate-800 mb-2">
                {item.title}
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default KeyImpact;

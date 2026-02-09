import React from "react";
import { EXPERIENCES } from "../../constants/profile/mockProfile";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="mb-20">
      <h3 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-12">
        Experience
      </h3>

      <div className="space-y-16">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-16">
            <div className="md:w-56 shrink-0">
              <p className="text-xl font-black font-serif">{exp.company}</p>
              <p className="text-xs font-bold text-slate-400 mt-2">{exp.period}</p>

              {exp.techStack && exp.techStack.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.techStack.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded-lg bg-slate-50 text-slate-500 text-[10px] font-bold tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <h4 className="text-2xl font-bold">{exp.role}</h4>
                {exp.type && (
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                    {exp.type}
                  </span>
                )}
              </div>
              <ul className="space-y-4 text-slate-600 font-medium list-disc list-outside ml-4">
                {exp.descriptions.map((desc, dIdx) => (
                  <li key={dIdx} className="leading-relaxed">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

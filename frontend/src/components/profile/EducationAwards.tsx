import React from "react";
import { EDUCATION, AWARDS_CERTS } from "../../constants/mockProfile";

const EducationAwards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
      <section>
        <h3 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-8">
          Education
        </h3>
        <div className="space-y-6">
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl border-b-2 border-b-transparent hover:border-b-primary transition-all"
            >
              <p className="text-sm font-bold text-slate-400 mb-1">{edu.period}</p>
              <p className="text-lg font-bold">{edu.school}</p>
              <p className="text-slate-600 font-medium">{edu.major}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-8">
          Awards & Certs
        </h3>
        <div className="space-y-8">
          {AWARDS_CERTS.map((award, idx) => (
            <div key={idx} className="flex items-start gap-4 group">
              <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">
                  {award.icon}
                </span>
              </div>
              <div>
                <p className="font-bold text-lg">{award.title}</p>
                <p className="text-sm text-slate-500 font-medium">
                  {award.issuer} <span className="mx-2 text-slate-300">|</span>{" "}
                  {award.year}
                </p>
                {award.description && (
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                    {award.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EducationAwards;

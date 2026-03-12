import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  PROFILE,
  KEY_IMPACTS,
  EXPERIENCES,
  SPECIALTY,
  EDUCATION,
  ACTIVITIES,
  AWARDS,
  CERTS,
} from "../constants/profile/mockProfile";

const NAV_ITEMS = [
  { id: "key-impact", label: "핵심 성과" },
  { id: "experience", label: "업무 경험" },
  { id: "projects", label: "프로젝트" },
  { id: "specialty", label: "전문 분야" },
  { id: "education", label: "학력" },
  { id: "awards", label: "수상 및 활동" },
  { id: "certs", label: "수료 및 자격증" },
];

const TONE = {
  primary: { value: "text-primary", border: "border-l-primary", bg: "bg-primary/5" },
  accent: { value: "text-accent", border: "border-l-accent", bg: "bg-accent/5" },
  dark: { value: "text-slate-800", border: "border-l-slate-300", bg: "bg-slate-50" },
} as const;

function SectionBlock({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="pt-10">
      <hr className="border-slate-100 mb-10" />
      <div className="flex gap-10 lg:gap-14">
        <div className="hidden sm:block w-28 lg:w-32 shrink-0 pt-0.5">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
            {label}
          </span>
        </div>
        <div className="flex-1 min-w-0 pb-2">{children}</div>
      </div>
    </section>
  );
}

export default function Profile() {
  const [activeId, setActiveId] = useState("key-impact");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* ── Hero ── */}
      <div className="flex flex-col md:flex-row gap-12 items-start mb-4">
        <div className="relative shrink-0">
          <div className="size-40 rounded-[2rem] overflow-hidden shadow-xl relative z-10 bg-white">
            <img
              alt={PROFILE.profileImage.alt}
              className="w-full h-full object-cover"
              src={PROFILE.profileImage.src}
            />
          </div>
          <div className="absolute -bottom-3 -right-3 size-14 glass-card rounded-xl flex items-center justify-center shadow-lg rotate-6">
            <span className="material-symbols-outlined text-primary text-2xl">terminal</span>
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-5xl font-black mb-2 tracking-tight font-brand">{PROFILE.name}</h1>
          <p className="text-lg text-slate-500 font-semibold mb-3">{PROFILE.roleTitle}</p>
          <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-lg">{PROFILE.tagline}</p>
          <div className="flex flex-wrap gap-3">
            {PROFILE.links.map((link) =>
              link.enabled === false ? (
                <div
                  key={link.label}
                  className="flex items-center gap-2 px-3 py-1.5 glass-card rounded-xl text-xs font-bold text-slate-400 cursor-not-allowed"
                >
                  <span className="material-symbols-outlined text-base">
                    {link.label === "GitHub" ? "hub" : link.label === "Blog" ? "history_edu" : "work"}
                  </span>
                  {link.label}
                  <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-slate-100">준비중</span>
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 glass-card rounded-xl text-xs font-bold hover:text-primary transition-all hover:-translate-y-0.5"
                >
                  <span className="material-symbols-outlined text-base">
                    {link.label === "GitHub"
                      ? "hub"
                      : link.label === "Blog"
                      ? "history_edu"
                      : "alternate_email"}
                  </span>
                  {link.label}
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* ── Main + Sidebar ── */}
      <div className="flex gap-6 lg:gap-12 items-start">
        <div className="flex-1 min-w-0">

          {/* 핵심 성과 */}
          <SectionBlock id="key-impact" label="핵심 성과">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {KEY_IMPACTS.map((item, idx) => {
                const cls = TONE[item.tone ?? "primary"];
                return (
                  <div key={idx} className={`p-6 rounded-2xl border-l-4 ${cls.border} ${cls.bg}`}>
                    <p className={`text-3xl font-black mb-1 ${cls.value}`}>{item.value}</p>
                    {item.subtitle && (
                      <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-1">
                        {item.subtitle}
                      </p>
                    )}
                    <p className="text-sm font-bold text-slate-800 mb-1.5">{item.title}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </SectionBlock>

          {/* 업무 경험 */}
          <SectionBlock id="experience" label="업무 경험">
            <div className="space-y-10">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx}>
                  <div className="flex items-baseline justify-between gap-4 mb-1">
                    <h4 className="text-base font-black text-slate-900">{exp.company}</h4>
                    <span className="text-xs text-slate-400 font-medium shrink-0">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <p className="text-sm font-bold text-primary">{exp.role}</p>
                    {exp.type && (
                      <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                        {exp.type}
                      </span>
                    )}
                  </div>
                  <ul className="space-y-2 mb-3">
                    {exp.descriptions.map((desc, dIdx) => (
                      <li key={dIdx} className="flex gap-2 text-sm text-slate-600 leading-relaxed">
                        <span className="text-primary font-bold shrink-0 mt-0.5">—</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.techStack && exp.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {exp.techStack.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-bold px-2 py-1 bg-slate-50 text-slate-500 rounded-lg tracking-wider border border-slate-100"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </SectionBlock>

          {/* 프로젝트 */}
          <SectionBlock id="projects" label="프로젝트">
            <div className="flex items-center justify-between p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div>
                <p className="font-bold text-slate-900 mb-1">개발 프로젝트 전체 보기</p>
                <p className="text-sm text-slate-500">사이드 프로젝트 및 팀 프로젝트를 확인할 수 있어요.</p>
              </div>
              <Link
                to="/projects"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 transition-colors shrink-0"
              >
                보러가기
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </SectionBlock>

          {/* 전문 분야 */}
          <SectionBlock id="specialty" label="전문 분야">
            <div className="space-y-6">
              <div className="p-6 rounded-2xl border-l-4 border-l-primary bg-primary/5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-primary text-lg">dns</span>
                  <p className="font-bold text-slate-900">{SPECIALTY.main}</p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">{SPECIALTY.mainDesc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {SPECIALTY.mainSkills.map((s) => (
                    <span key={s} className="text-[10px] font-bold px-2 py-1 bg-white text-primary rounded-lg tracking-wider border border-primary/20">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 rounded-2xl border-l-4 border-l-slate-300 bg-slate-50">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-slate-500 text-lg">web</span>
                  <p className="font-bold text-slate-700">{SPECIALTY.sub}</p>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-3">{SPECIALTY.subDesc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {SPECIALTY.subSkills.map((s) => (
                    <span key={s} className="text-[10px] font-bold px-2 py-1 bg-white text-slate-500 rounded-lg tracking-wider border border-slate-200">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SectionBlock>

          {/* 학력 */}
          <SectionBlock id="education" label="학력">
            <div className="space-y-6">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-black text-slate-900">
                      {edu.schoolKo ?? edu.school}
                      {edu.schoolKo && (
                        <span className="ml-2 text-xs font-medium text-slate-400">{edu.school}</span>
                      )}
                    </p>
                    <p className="text-sm text-slate-600 font-medium mt-0.5">
                      {edu.majorKo ?? edu.major}
                      {edu.majorKo && (
                        <span className="ml-2 text-xs font-normal text-slate-400">{edu.major}</span>
                      )}
                    </p>
                    {edu.gpa && (
                      <p className="text-xs text-slate-400 font-medium mt-1">GPA {edu.gpa}</p>
                    )}
                  </div>
                  <span className="text-xs text-slate-400 font-medium shrink-0">{edu.period}</span>
                </div>
              ))}
            </div>
          </SectionBlock>

          {/* 수상 및 활동 */}
          <SectionBlock id="awards" label="수상 및 활동">
            <div className="space-y-10">
              {/* Awards */}
              <div className="space-y-6">
                {AWARDS.map((award, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-primary text-lg">{award.icon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-4">
                        <p className="font-bold text-slate-900">{award.title}</p>
                        <span className="text-xs text-slate-400 font-medium shrink-0">{award.year}</span>
                      </div>
                      <p className="text-sm text-slate-500 mt-0.5">{award.issuer}</p>
                      {award.description && (
                        <p className="text-xs text-slate-500 mt-2 leading-relaxed">{award.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Activities */}
              <div className="space-y-8">
                {ACTIVITIES.map((act, idx) => (
                  <div key={idx}>
                    <div className="flex items-baseline justify-between gap-4 mb-1">
                      <h4 className="font-bold text-slate-900">{act.name}</h4>
                      <span className="text-xs text-slate-400 font-medium shrink-0">{act.period}</span>
                    </div>
                    <p className="text-sm font-semibold text-primary mb-2">{act.role}</p>
                    <ul className="space-y-1.5">
                      {act.descriptions.map((desc, dIdx) => (
                        <li key={dIdx} className="flex gap-2 text-sm text-slate-600 leading-relaxed">
                          <span className="text-primary font-bold shrink-0 mt-0.5">—</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </SectionBlock>

          {/* 수료 및 자격증 */}
          <SectionBlock id="certs" label="수료 및 자격증">
            <div className="space-y-6">
              {CERTS.map((cert, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-primary text-lg">{cert.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="font-bold text-slate-900">{cert.title}</p>
                      <span className="text-xs text-slate-400 font-medium shrink-0">{cert.year}</span>
                    </div>
                    <p className="text-sm text-slate-500 mt-0.5">{cert.issuer}</p>
                    {cert.description && (
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">{cert.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </SectionBlock>


        </div>

        {/* Sticky Sidebar */}
        <aside className="hidden lg:block w-40 shrink-0">
          <nav className="sticky top-24">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 px-3">
              On this page
            </p>
            <ul className="space-y-0.5">
              {NAV_ITEMS.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`block text-sm py-1.5 px-3 rounded-lg font-medium transition-all ${
                      activeId === id
                        ? "text-primary bg-primary/10 font-bold"
                        : "text-slate-400 hover:text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  );
}

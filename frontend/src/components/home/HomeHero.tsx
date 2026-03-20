import React from 'react';
import { Link } from "react-router-dom";

const CODE_LINES = [
  { tokens: [{ text: "// portfolio.ts", color: "text-slate-500" }] },
  { tokens: [] },
  { tokens: [
    { text: "const", color: "text-purple-400" },
    { text: " developer", color: "text-sky-300" },
    { text: " = {", color: "text-slate-300" },
  ]},
  { tokens: [
    { text: "  name", color: "text-sky-200" },
    { text: ": ", color: "text-slate-300" },
    { text: '"Ko Hyeyeon"', color: "text-amber-300" },
    { text: ",", color: "text-slate-300" },
  ]},
  { tokens: [
    { text: "  role", color: "text-sky-200" },
    { text: ": ", color: "text-slate-300" },
    { text: '"Backend Developer"', color: "text-amber-300" },
    { text: ",", color: "text-slate-300" },
  ]},
  { tokens: [
    { text: "  loves", color: "text-sky-200" },
    { text: ": [", color: "text-slate-300" },
    { text: '"Java"', color: "text-amber-300" },
    { text: ", ", color: "text-slate-300" },
    { text: '"Spring"', color: "text-amber-300" },
    { text: "],", color: "text-slate-300" },
  ]},
  { tokens: [
    { text: "  building", color: "text-sky-200" },
    { text: ": ", color: "text-slate-300" },
    { text: '"dev-portfolio"', color: "text-emerald-400" },
    { text: ",", color: "text-slate-300" },
  ]},
  { tokens: [
    { text: "  motto", color: "text-sky-200" },
    { text: ": ", color: "text-slate-300" },
    { text: '"코드로 가치를 만드는 개발자"', color: "text-amber-300" },
  ]},
  { tokens: [{ text: "}", color: "text-slate-300" }] },
];

const HomeHero: React.FC = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-primary text-xs font-bold uppercase tracking-widest w-fit">
          <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
          <span>현재 새로운 도전을 준비 중입니다</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100">
          <span className="block leading-[1.10]">
            안녕하세요,
          </span>
          <span className="block mt-3 leading-[1.10]">
            개발자 <span className="gradient-text">고혜연</span>입니다.
          </span>
        </h1>

        <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
          복잡한 문제를 코드로 풀어내는 것을 즐깁니다.
          <br />단순한 구현을 넘어, 사용자의 일상에 녹아드는 견고한 서비스를 만듭니다.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/profile"
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-2xl font-bold shadow-lg shadow-indigo-200 hover:-translate-y-1 transition-all"
          >
            개발자 소개 보기 →
          </Link>
          <Link
            to="/projects"
            className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 hover:-translate-y-1 transition-all"
          >
            Projects 보기
          </Link>
        </div>
      </div>

      {/* Code snippet panel */}
      <div className="relative overflow-hidden">
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-50 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-50" />
        <div className="rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-300/40 transform rotate-1 hover:rotate-0 transition-transform duration-700">
          {/* Title bar */}
          <div className="bg-[#1e1e2e] px-5 py-3.5 flex items-center gap-2 border-b border-white/5">
            <span className="w-3 h-3 rounded-full bg-red-400/80" />
            <span className="w-3 h-3 rounded-full bg-amber-400/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
            <span className="ml-3 text-xs text-slate-500 font-mono">portfolio.ts</span>
          </div>
          {/* Code body */}
          <div className="bg-[#1e1e2e] px-6 py-6 font-mono text-sm leading-7">
            {CODE_LINES.map((line, i) => (
              <div key={i} className="flex items-baseline gap-0">
                <span className="w-6 text-slate-600 text-xs select-none mr-4 text-right shrink-0">
                  {i + 1}
                </span>
                <span className="whitespace-pre">
                  {line.tokens.length === 0 ? (
                    " "
                  ) : (
                    line.tokens.map((token, j) => (
                      <span key={j} className={token.color}>{token.text}</span>
                    ))
                  )}
                </span>
              </div>
            ))}
            {/* cursor blink */}
            <div className="flex items-baseline gap-0 mt-1">
              <span className="w-6 mr-4" />
              <span className="inline-block w-2 h-4 bg-indigo-400 animate-pulse rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;

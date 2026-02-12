import { useMemo, useState } from "react";
import { CONTACT_HERO } from "../../constants/contact/contact";

const FALLBACK_TIPS = [
  "짧게라도 상대의 관심사(프로젝트/글)를 먼저 읽고 질문하면 대화가 훨씬 자연스러워요.",
  "내가 원하는 것보다 '상대에게 어떤 도움이 될 수 있는지'를 먼저 한 문장으로 준비해보세요.",
  "첫 메시지는 길게 쓰기보다, 목적/맥락/요청을 3줄로 정리하면 답장률이 올라가요.",
];

export default function ContactHero() {
  const [tip, setTip] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const randomTip = useMemo(() => {
    const idx = Math.floor(Math.random() * FALLBACK_TIPS.length);
    return FALLBACK_TIPS[idx];
  }, []);

  const onGenerateTip = async () => {
    // 지금은 API 없이도 동작하게
    setLoading(true);
    try {
      setTip(randomTip);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mb-16 lg:mb-24">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-primary text-xs font-bold uppercase tracking-widest mb-6">
        {CONTACT_HERO.badge}
      </div>

      <h1 className="text-5xl lg:text-7xl font-serif font-black leading-[1.1] text-slate-900 mb-8">
        {CONTACT_HERO.titleLine1} <br />
        <span className="text-gradient">{CONTACT_HERO.titleLine2}</span>
      </h1>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <p className="text-lg lg:text-xl text-slate-500 max-w-2xl leading-relaxed">
          {CONTACT_HERO.description.split("\n").map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </p>

        {/* AI Tip */}
        <button
          type="button"
          onClick={onGenerateTip}
          className="flex-shrink-0 group relative text-left"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-700" />
          <div className="relative px-6 py-4 bg-white ring-1 ring-slate-900/5 rounded-2xl flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-primary uppercase tracking-tighter">
                AI Networking Tip
              </span>
              <p className="text-sm font-medium text-slate-700 min-h-[1.5rem] w-[220px]">
                {loading ? "생성 중..." : tip ?? "팁을 보려면 클릭하세요"}
              </p>
            </div>
            <span
              className={`material-symbols-outlined text-accent ${
                loading ? "animate-pulse" : ""
              }`}
            >
              auto_awesome
            </span>
          </div>
        </button>
      </div>
    </section>
  );
}

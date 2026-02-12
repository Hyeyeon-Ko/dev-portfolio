export default function BlogHero() {
    return (
      <section className="mb-16">
        <div className="flex flex-col gap-4 mb-10">
          <h1 className="text-5xl lg:text-6xl font-serif font-black text-[#0f172a]">
            Dev-Log <span className="text-gradient">Archive</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-[720px] font-medium leading-relaxed">
            매일의 삽질과 깨달음, 기술적 고민들을 기록하는 개인적인 공간입니다.
          </p>
        </div>
      </section>
    );
  }
  
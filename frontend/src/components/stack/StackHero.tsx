import { STACK_HERO } from "../../constants/stack/mockStack";

export default function StackHero() {
  return (
    <section className="mb-20">
      <div className="flex flex-col gap-6 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-primary text-xs font-bold uppercase tracking-widest w-fit">
          {STACK_HERO.badge}
        </div>

        <h1 className="text-5xl lg:text-7xl font-serif font-black leading-[1.15] text-slate-900">
          <span className="text-gradient">{STACK_HERO.titleLine1}</span>
          <br />
          {STACK_HERO.titleLine2}
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed font-medium">
          {STACK_HERO.description}
        </p>
      </div>
    </section>
  );
}

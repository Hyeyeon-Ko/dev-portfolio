import { STACK_HERO } from "../../constants/stack/mockStack";

export default function StackHero() {
  return (
    <section className="mb-20">
      <div className="flex flex-col gap-6 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-primary text-xs font-bold uppercase tracking-widest w-fit">
          {STACK_HERO.badge}
        </div>

        <h1 className="text-5xl lg:text-6xl font-black leading-[1.1] text-slate-900 dark:text-slate-100 font-brand">
          Tech <span className="text-gradient">Stack</span>
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed font-medium">
          {STACK_HERO.description}
        </p>
      </div>
    </section>
  );
}

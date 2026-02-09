import { STACK_CTA } from "../../constants/stack/mockStack";

export default function StackCTA() {
  return (
    <section className="mb-32">
      <div className="rounded-[3rem] bg-slate-900 p-16 lg:p-24 text-center relative overflow-hidden group shadow-2xl">
        <div className="absolute -top-24 -right-24 size-80 bg-primary/20 rounded-full blur-3xl transition-transform group-hover:scale-125 duration-1000" />
        <div className="absolute -bottom-24 -left-24 size-80 bg-accent/20 rounded-full blur-3xl transition-transform group-hover:scale-125 duration-1000" />

        <h2 className="text-4xl lg:text-6xl font-serif font-black text-white mb-8 relative z-10 leading-tight">
          {STACK_CTA.title}
        </h2>

        <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed font-medium">
          {STACK_CTA.description}
        </p>

        <div className="flex flex-wrap justify-center gap-6 relative z-10">
          <button className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-black hover:scale-105 transition-all flex items-center gap-3 shadow-xl">
            {STACK_CTA.primaryLabel}
            <span className="material-symbols-outlined">download</span>
          </button>

          <button className="bg-white/10 text-white backdrop-blur-md border border-white/20 px-12 py-5 rounded-2xl font-black hover:bg-white/20 transition-all">
            {STACK_CTA.secondaryLabel}
          </button>
        </div>
      </div>
    </section>
  );
}

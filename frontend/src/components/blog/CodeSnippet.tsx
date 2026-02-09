export default function CodeSnippet() {
    return (
      <section>
        <div className="flex items-center gap-2 mb-4 px-2">
          <span className="material-symbols-outlined text-primary">terminal</span>
          <span className="text-sm font-bold uppercase tracking-widest text-slate-500">
            Today&apos;s Code Snippet
          </span>
        </div>
  
        <div className="code-window rounded-2xl overflow-hidden border border-white/10">
          <div className="bg-[#2d2d2d] px-6 py-3 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="size-3 rounded-full bg-[#ff5f56]" />
              <div className="size-3 rounded-full bg-[#ffbd2e]" />
              <div className="size-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="text-[10px] font-mono text-slate-400 tracking-wider uppercase">
              useIntersectionObserver.ts
            </div>
            <div className="w-12" />
          </div>
  
          <div className="p-8 font-mono text-sm leading-relaxed overflow-x-auto custom-scrollbar">
            <pre className="text-slate-300">
              <code>{`export const useIntersectionObserver = (
    ref: RefObject<HTMLElement>,
    options: IntersectionObserverInit
  ) => {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting);
      }, options);
  
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [ref, options]);
  
    return isIntersecting;
  };`}</code>
            </pre>
          </div>
        </div>
      </section>
    );
  }
  
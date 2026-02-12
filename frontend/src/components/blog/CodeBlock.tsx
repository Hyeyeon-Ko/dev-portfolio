import type { FC } from "react";

const CodeBlock: FC = () => {
  return (
    <div className="my-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-800/20">
      <div className="bg-[#1e1e1e] px-4 py-3 flex items-center justify-between border-b border-gray-700/50">
        <div className="flex gap-2">
          <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
        </div>
        <span className="text-[11px] text-gray-500 font-medium">UpdateAction.tsx</span>
        <div className="w-10" />
      </div>

      <div className="bg-[#0d1117] p-8 font-mono text-sm leading-relaxed overflow-x-auto">
        <pre className="text-gray-300">
          <code>
            <span className="text-[#ff7b72]">const</span> [state, formAction] ={" "}
            <span className="text-[#d2a8ff]">useActionState</span>(
            <br />
            &nbsp;&nbsp;<span className="text-[#ff7b72]">async</span> (prevState, formData) =&gt; &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ff7b72]">const</span> result ={" "}
            <span className="text-[#ff7b72]">await</span>{" "}
            <span className="text-[#d2a8ff]">updateUsername</span>(formData.
            <span className="text-[#d2a8ff]">get</span>(<span className="text-[#a5d6ff]">&quot;name&quot;</span>));
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ff7b72]">if</span> (result.error){" "}
            <span className="text-[#ff7b72]">return</span> result.error;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ff7b72]">return</span>{" "}
            <span className="text-[#a5d6ff]">&quot;Success!&quot;</span>;
            <br />
            &nbsp;&nbsp;&#125;,
            <br />
            &nbsp;&nbsp;<span className="text-[#ff7b72]">null</span>
            <br />
            );
          </code>
        </pre>
      </div>

      <div className="h-1 bg-gradient-to-r from-primary via-accent to-transparent w-full" />
    </div>
  );
};

export default CodeBlock;

import { useState } from "react";
import type { SocialItem } from "../../types/contact";

export default function SocialLink({ item }: { item: SocialItem }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async (e: React.MouseEvent) => {
    if (!item.copyText) return;
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(item.copyText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  };

  return (
    <a
      href={item.href}
      target={item.href.startsWith("mailto:") ? undefined : "_blank"}
      rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      className="flex items-center justify-between p-6 glass-card rounded-3xl group hover:border-primary/50 hover:shadow-xl transition-all"
    >
      <div className="flex items-center gap-5">
        <div
          className={`size-12 rounded-2xl ${item.colorClass} text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110`}
        >
          <span className="material-symbols-outlined">{item.icon}</span>
        </div>
        <div>
          <p className="font-black text-slate-900 group-hover:text-primary transition-colors">
            {item.label}
          </p>
          <p className="text-xs font-medium text-slate-400 mt-0.5">
            {item.subLabel}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={item.copyText ? onCopy : undefined}
        className="text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all"
        aria-label="action"
      >
        <span className="material-symbols-outlined text-[20px]">
          {item.copyText ? (copied ? "check" : "content_copy") : "chevron_right"}
        </span>
      </button>
    </a>
  );
}

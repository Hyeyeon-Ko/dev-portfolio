import SocialLink from "./SocialLink";
import { SOCIALS } from "../../constants/contact/contact";

export default function ContactSidebar() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-2">
          Connect with me
        </h4>

        {SOCIALS.map((item) => (
          <SocialLink key={item.label} item={item} />
        ))}
      </div>

      {/* Status */}
      <div className="p-10 border border-slate-200/60 rounded-[2.5rem] bg-white/40 backdrop-blur shadow-sm flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-slate-500">Current Status</span>
          <div className="flex items-center gap-2.5 px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100">
            <div className="size-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest">
              Open to opportunities
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-slate-600">
          <div className="size-10 rounded-xl bg-slate-100 flex items-center justify-center">
            <span className="material-symbols-outlined text-slate-400">
              schedule
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-800">
              Seoul, Korea (GMT+9)
            </span>
            <span className="text-xs font-medium text-slate-400">
              08:00 AM ~ 05:00 PM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

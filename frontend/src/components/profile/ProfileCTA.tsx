import React from "react";
import { PROFILE_CTA } from "../../constants/mockProfile";

const ProfileCTA: React.FC = () => {
  return (
    <section className="mb-20">
      <div className="glass-card rounded-[3rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-150"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-2xl -ml-24 -mb-24"></div>

        <div className="relative z-10 text-center md:text-left">
          <h2 className="text-4xl font-serif font-black mb-4 leading-tight">
            함께 새로운 가치를 만들<br />준비가 되셨나요?
          </h2>
          <p className="text-slate-500 font-medium text-lg">
            언제든 편안하게 커피챗 혹은 협업 제안을 보내주세요.
          </p>
        </div>

        <div className="flex shrink-0 relative z-10">
          <button
            onClick={() => (window.location.href = `mailto:${PROFILE_CTA.email}`)}
            className="bg-primary text-white px-10 py-5 rounded-2xl font-bold shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            메일 보내기
            <span className="material-symbols-outlined text-lg">send</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileCTA;

import React from "react";
import { PROFILE } from "../../constants/profile/mockProfile";

const ProfileHero: React.FC = () => {
  return (
    <section id="profile" className="mb-20">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="relative shrink-0">
          <div className="size-48 rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 bg-white">
            <img
              alt={PROFILE.profileImage.alt}
              className="w-full h-full object-cover"
              src={PROFILE.profileImage.src}
            />
          </div>
          <div className="absolute -bottom-4 -right-4 size-20 glass-card rounded-2xl flex items-center justify-center shadow-xl rotate-6">
            <span className="material-symbols-outlined text-primary text-4xl">
              terminal
            </span>
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-5xl font-serif font-black mb-4 tracking-tight leading-tight">
            {PROFILE.name}
          </h1>
          <p className="text-xl text-slate-500 font-medium mb-8">
            {PROFILE.roleTitle}
          </p>

          <div className="flex flex-wrap gap-4">
            {PROFILE.links.map((link) => (
              <SocialLink
                key={link.label}
                icon={
                  link.label === "GitHub"
                    ? "hub"
                    : link.label === "Blog"
                    ? "history_edu"
                    : link.label === "Email"
                    ? "alternate_email"
                    : "work"
                }
                label={link.label}
                href={link.href}
                enabled={link.enabled !== false}
              />
            ))}
          </div>

          <p className="mt-8 text-slate-600 leading-relaxed font-medium max-w-2xl text-lg">
            {PROFILE.tagline}
          </p>
        </div>
      </div>
    </section>
  );
};

const SocialLink: React.FC<{
  icon: string;
  label: string;
  href: string;
  enabled: boolean;
}> = ({ icon, label, href, enabled }) => {
  if (!enabled) {
    return (
      <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-xl text-sm font-bold text-slate-400 cursor-not-allowed">
        <span className="material-symbols-outlined text-lg">{icon}</span>
        {label}
        <span className="text-[10px] font-black ml-1 px-2 py-0.5 rounded bg-slate-100">
          준비중
        </span>
      </div>
    );
  }

  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      className="flex items-center gap-2 px-4 py-2 glass-card rounded-xl text-sm font-bold hover:text-primary transition-all hover:-translate-y-1"
    >
      <span className="material-symbols-outlined text-lg">{icon}</span>
      {label}
    </a>
  );
};

export default ProfileHero;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PROJECT_DETAIL_SIDEBAR_LINKS } from "../../constants/projects/projectDetailSections";
import type { Project } from "../../types/project";

type Props = {
  project: Project;
};

export default function ProjectDetailSidebar({ project }: Props) {
  const [activeId, setActiveId] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "0px 0px -20% 0px" }
    );

    PROJECT_DETAIL_SIDEBAR_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [project.id]);

  const primaryIsExternal =
    project.primaryLink.url.startsWith("http") ||
    project.primaryLink.url.startsWith("//");
  const primaryIsPlaceholder = project.primaryLink.url === "#" || project.primaryLink.url === "";
  const secondaryIsExternal =
    project.secondaryLink?.url?.startsWith("http") ||
    project.secondaryLink?.url?.startsWith("//");
  const secondaryIsPlaceholder =
    project.secondaryLink?.url === "#" || project.secondaryLink?.url === "";

  return (
    <aside className="hidden lg:block w-64 flex-shrink-0">
      <div className="sticky top-32 space-y-10">
        <nav className="flex flex-col gap-4 border-l-2 border-slate-200">
          {PROJECT_DETAIL_SIDEBAR_LINKS.map((link) => {
            const active = activeId === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`pl-6 py-1 font-bold border-l-2 -ml-[2px] transition-all ${
                  active
                    ? "text-primary border-primary"
                    : "text-slate-400 border-transparent hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex flex-col gap-3">
          {primaryIsExternal ? (
            <a
              href={project.primaryLink.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
            >
              <span className="material-symbols-outlined text-xl">
                {project.primaryLink.icon}
              </span>
              {project.primaryLink.label}
            </a>
          ) : primaryIsPlaceholder ? (
            <div className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-primary/20 text-primary font-bold shadow-lg shadow-primary/10 opacity-60 cursor-not-allowed">
              <span className="material-symbols-outlined text-xl">
                {project.primaryLink.icon}
              </span>
              {project.primaryLink.label}
            </div>
          ) : (
            <Link
              to={project.primaryLink.url}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
            >
              <span className="material-symbols-outlined text-xl">
                {project.primaryLink.icon}
              </span>
              {project.primaryLink.label}
            </Link>
          )}

          {project.secondaryLink ? (
            secondaryIsExternal ? (
              <a
                href={project.secondaryLink.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/40 shadow-xl text-slate-700 font-bold hover:bg-white/60 transition-all"
              >
                <span className="material-symbols-outlined text-xl">
                  {project.secondaryLink.icon}
                </span>
                {project.secondaryLink.label}
              </a>
            ) : secondaryIsPlaceholder ? (
              <div className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-white/30 backdrop-blur-xl border border-white/40 shadow-xl text-slate-500 font-bold opacity-60 cursor-not-allowed">
                <span className="material-symbols-outlined text-xl">
                  {project.secondaryLink.icon}
                </span>
                {project.secondaryLink.label}
              </div>
            ) : (
              <Link
                to={project.secondaryLink.url}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/40 shadow-xl text-slate-700 font-bold hover:bg-white/60 transition-all"
              >
                <span className="material-symbols-outlined text-xl">
                  {project.secondaryLink.icon}
                </span>
                {project.secondaryLink.label}
              </Link>
            )
          ) : null}
        </div>
      </div>
    </aside>
  );
}

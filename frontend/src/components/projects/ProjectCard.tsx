import type { Project } from "../../types/project";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const accentTextClass =
    project.accentColor === "primary"
      ? "group-hover:text-primary"
      : "group-hover:text-accent";

  const linkTextClass =
    project.accentColor === "primary" ? "text-primary" : "text-accent";

  return (
    <div className="group flex flex-col glass-card rounded-[2.5rem] overflow-hidden hover:-translate-y-3 transition-all duration-700">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          src={project.imageUrl}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-[#0f172a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
          <p className="text-white text-sm font-medium">{project.hoverText}</p>
        </div>
      </div>

      <div className="p-10 lg:p-12 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, idx) => (
            <span
              key={tag + idx}
              className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                idx % 3 === 0
                  ? "bg-blue-500/10 text-blue-600"
                  : idx % 3 === 1
                  ? "bg-indigo-500/10 text-indigo-600"
                  : "bg-slate-500/10 text-slate-600"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className={`text-3xl font-bold mb-2 transition-colors ${accentTextClass}`}>
          {project.title}
        </h3>

        <p className="text-slate-500 font-medium mb-6">{project.oneLine}</p>

        <p className="text-slate-500 leading-relaxed mb-10 flex-1 text-lg">
          {project.description}
        </p>

        <div className="flex items-center gap-8">
          <a
            className={`flex items-center gap-2 text-base font-bold group/link ${linkTextClass}`}
            href={project.primaryLink.url}
            target="_blank"
            rel="noreferrer"
          >
            {project.primaryLink.label}
            <span className="material-symbols-outlined text-xl group-hover/link:translate-x-1 transition-transform">
              {project.primaryLink.icon}
            </span>
          </a>

          {project.secondaryLink && (
            <a
              className="flex items-center gap-2 text-base font-bold text-slate-400 hover:text-slate-600"
              href={project.secondaryLink.url}
              target="_blank"
              rel="noreferrer"
            >
              {project.secondaryLink.label}
              <span className="material-symbols-outlined text-xl">
                {project.secondaryLink.icon}
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

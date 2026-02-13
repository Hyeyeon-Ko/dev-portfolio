import { useParams, Navigate } from "react-router-dom";
import { PROJECTS } from "../constants/projects/mockProjects";
import ProjectDetailSidebar from "../components/projects/ProjectDetailSidebar";
import { PROJECT_CASE_STUDIES } from "../constants/projects/projectCaseStudy";

function getTechBadgeClass(tag: string) {
  const t = tag.toLowerCase();

  if (t.includes("next")) return "bg-indigo-500/12 text-indigo-700";
  if (t.includes("react native")) return "bg-sky-500/12 text-sky-700";
  if (t.includes("react")) return "bg-sky-500/12 text-sky-700";
  if (t.includes("typescript")) return "bg-indigo-500/12 text-indigo-700";
  if (t.includes("tailwind")) return "bg-cyan-500/12 text-cyan-700";
  if (t.includes("vite")) return "bg-amber-500/14 text-amber-800";
  if (t.includes("spring")) return "bg-emerald-500/12 text-emerald-700";
  if (t.includes("java")) return "bg-amber-500/14 text-amber-800";
  if (t.includes("django")) return "bg-emerald-500/12 text-emerald-700";
  if (t.includes("python")) return "bg-emerald-500/12 text-emerald-700";
  if (t.includes("mysql")) return "bg-amber-500/14 text-amber-800";
  if (t.includes("mariadb")) return "bg-amber-500/14 text-amber-800";
  if (t.includes("oracle")) return "bg-rose-500/12 text-rose-700";
  if (t.includes("redis")) return "bg-rose-500/12 text-rose-700";

  return "bg-slate-500/10 text-slate-700";
}

function formatIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
      <span className="size-2 rounded-full bg-primary" />
      {title}
    </h2>
  );
}

function splitTitleForGradient(title: string) {
  const tokens = title.trim().split(/\s+/).filter(Boolean);
  if (tokens.length <= 1) return { head: title, tail: "" };
  return {
    head: tokens.slice(0, -1).join(" "),
    tail: tokens[tokens.length - 1],
  };
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => String(p.id) === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const stats = [
    ...(project.team ? [{ value: project.team, label: "팀 구성", colorClass: "text-primary" }] : []),
    ...(project.period ? [{ value: project.period, label: "기간", colorClass: "text-accent" }] : []),
    ...(project.highlights?.length
      ? [{ value: `${project.highlights.length}개`, label: "핵심 성과", colorClass: "text-slate-700" }]
      : []),
    ...(project.award ? [{ value: project.award, label: "수상", colorClass: "text-amber-600" }] : []),
  ];

  const caseStudy = PROJECT_CASE_STUDIES[project.id];
  const problemItems = caseStudy?.problem ?? [];
  const processItems = caseStudy?.process ?? [];
  const impactItems = caseStudy?.impact ?? [];

  const titleParts = splitTitleForGradient(project.title);
  const heroTitle = titleParts.tail ? (
    <>
      {titleParts.head} <span className="text-gradient">{titleParts.tail}</span>
    </>
  ) : (
    <span className="text-gradient">{project.title}</span>
  );

  const primaryTags = project.tags.slice(0, 2);
  const secondaryTags = project.tags.slice(2, 4);

  return (
    <div className="min-h-screen">
      <main className="max-w-[1200px] mx-auto px-6 pt-10 pb-24">
        <section className="mb-16">
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-bold tracking-widest text-sm uppercase">
                <span className="w-8 h-[1px] bg-primary" /> Case Study
              </div>
              <h1 className="text-5xl lg:text-7xl font-serif font-black leading-tight">
                {heroTitle}
              </h1>
              <p className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
                {project.oneLine}
              </p>
            </div>
            <div className="relative w-full aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                alt={project.title}
                className="w-full h-full object-cover"
                src={project.imageUrl}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-10">
          <ProjectDetailSidebar project={project} />

          <div className="flex-1 space-y-20">
            <section className="scroll-mt-32" id="overview">
              <SectionTitle title="개요" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="glass-card p-8 rounded-[2rem]">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
                    사용 기술
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-4 py-2 rounded-xl text-xs font-bold uppercase ${getTechBadgeClass(
                          tag
                        )}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="glass-card p-8 rounded-[2rem]">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
                    주요 성과
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {stats.slice(0, 4).map((stat) => (
                      <div key={stat.label}>
                        <p className={`text-3xl font-black ${stat.colorClass}`}>{stat.value}</p>
                        <p className="text-xs font-bold text-slate-500 mt-1 uppercase">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                {caseStudy?.overview ?? project.description}
              </p>
            </section>

            <section className="scroll-mt-32" id="problem">
              <SectionTitle title="문제 정의" />
              <div className="glass-card p-10 rounded-[2.5rem] bg-gradient-to-br from-white/60 to-white/20">
                <ul className="space-y-8">
                  {(problemItems.length > 0
                    ? problemItems
                    : [
                        {
                          title: "도구의 파편화로 인한 집중력 분산",
                          description: project.description,
                        },
                      ]
                  ).map((item, idx) => (
                    <li key={`${item.title}-${idx}`} className="flex gap-6">
                      <span className="flex-shrink-0 size-10 rounded-full bg-red-100 text-red-500 flex items-center justify-center font-bold">
                        {formatIndex(idx)}
                      </span>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                        <p className="text-slate-500 leading-relaxed">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="scroll-mt-32" id="process">
              <SectionTitle title="해결 과정" />
              <div className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <h4 className="text-2xl font-bold mb-4">
                      {(processItems[0] && processItems[0].title) || "통합 대시보드 설계"}
                    </h4>
                    <p className="text-slate-500 leading-relaxed mb-6">
                      {(processItems[0] && processItems[0].description) ||
                        "가장 빈번하게 사용하는 기능을 중심으로 레이아웃을 구성했습니다. 탐색/메인 작업/서브 위젯의 시선 흐름을 최적화하는 데 집중했습니다."}
                    </p>
                    <div className="flex gap-4">
                      <div className="bg-white/60 px-5 py-3 rounded-2xl border border-white/40 shadow-sm">
                        <p className="text-sm font-bold text-primary">
                          {primaryTags.join(" & ") || "Contextual UI"}
                        </p>
                      </div>
                      <div className="bg-white/60 px-5 py-3 rounded-2xl border border-white/40 shadow-sm">
                        <p className="text-sm font-bold text-accent">
                          {secondaryTags.join(" & ") || "Zero Latency"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 rounded-3xl overflow-hidden glass-card shadow-inner">
                    <img
                      alt="Solution UI Preview"
                      className="w-full h-auto"
                      src={project.imageUrl}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="scroll-mt-32" id="impact">
              <SectionTitle title="기술적 도전 및 성과" />
              <div className="grid grid-cols-1 gap-8">
                {(impactItems.length > 0
                  ? impactItems.slice(0, 2)
                  : [
                      {
                        title: "Optimistic UI 업데이트 구현",
                        description:
                          "서버 응답을 기다리지 않고 UI를 즉시 업데이트하는 Optimistic UI 패턴을 도입해, 네트워크 지연 환경에서도 즉각적인 반응성을 확보했습니다.",
                      },
                      {
                        title: "복잡한 인터랙션 성능 최적화",
                        description:
                          "리스트/드래그 등 빈번한 상호작용에서 불필요한 렌더링을 줄이고, 체감 성능을 개선하는 데 집중했습니다.",
                      },
                    ]
                ).map((item, idx) => (
                  <div
                    key={`${item.title}-${idx}`}
                    className="glass-card p-10 rounded-[2.5rem] transition-transform hover:translate-y-[-4px]"
                  >
                    <h4
                      className={`text-xl font-bold mb-4 ${
                        idx === 0 ? "text-primary" : "text-accent"
                      }`}
                    >
                      {item.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-400">
                      <span className="material-symbols-outlined text-base">check_circle</span>
                      {project.tags.slice(0, 2).join(" & ") || project.category.join(" · ")} 활용
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

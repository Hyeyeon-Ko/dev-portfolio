import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/projects/ProjectCard";
import CategoryFilter from "../components/projects/CategoryFilter";
import Pagination from "../components/ui/Pagination";
import { Category } from "../types/project";
import type { Project } from "../types/project";
import { fetchProjects } from "../api/projectApi";
import { isAdmin } from "../utils/auth";

const PROJECTS_PER_PAGE = 4;

export default function Projects() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<Category>(Category.ALL);
  const [page, setPage] = useState(0);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const categories: Category[] = [
    Category.ALL,
    Category.WEB,
    Category.MOBILE,
    Category.BACKEND,
    Category.FULLSTACK,
  ];

  // Category value -> API string mapping
  // Category values are display strings ("All Works", "Web", etc.)
  // The API accepts the key portion: WEB, MOBILE, BACKEND, FULLSTACK
  const categoryToApiParam: Record<Category, string> = {
    [Category.ALL]: "",
    [Category.WEB]: "WEB",
    [Category.MOBILE]: "MOBILE",
    [Category.BACKEND]: "BACKEND",
    [Category.FULLSTACK]: "FULLSTACK",
    [Category.HYBRID]: "HYBRID",
  };

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(false);

    const param = categoryToApiParam[selectedCategory];
    fetchProjects(param || undefined)
      .then((data) => {
        if (!cancelled) {
          setProjects(data);
          setPage(0);
        }
      })
      .catch(() => {
        if (!cancelled) setError(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  // Client-side pagination over the fetched list
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const pagedProjects = useMemo(
    () => projects.slice(page * PROJECTS_PER_PAGE, (page + 1) * PROJECTS_PER_PAGE),
    [projects, page],
  );

  const handlePageChange = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <section className="mb-20 text-center lg:text-left">
        <h1 className="text-5xl lg:text-6xl font-black mb-4 font-brand">
          <span className="text-gradient">Projects</span>
        </h1>
        <p className="text-lg text-slate-500 font-medium leading-relaxed">
          단순한 코드의 나열을 넘어, 문제를 해결하고 가치를 창출한 기록들입니다.
        </p>
      </section>

      <div className="flex items-center justify-between mb-6">
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
        {isAdmin() && (
          <button
            type="button"
            onClick={() => navigate("/projects/write")}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-primary hover:bg-primary/90 transition-all shrink-0"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            새 프로젝트
          </button>
        )}
      </div>

      {loading && (
        <div className="flex justify-center py-16">
          <span className="material-symbols-outlined text-4xl text-slate-300 animate-pulse">hourglass_empty</span>
        </div>
      )}

      {error && !loading && (
        <p className="text-center text-slate-400 py-16">프로젝트를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.</p>
      )}

      {!loading && !error && projects.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-slate-400 text-lg">
            해당 카테고리의 프로젝트가 아직 없습니다.
          </p>
        </div>
      )}

      {!loading && !error && projects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {pagedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      {!loading && !error && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="mt-16"
        />
      )}
    </div>
  );
}

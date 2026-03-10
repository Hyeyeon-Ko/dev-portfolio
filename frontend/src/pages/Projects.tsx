import { useEffect, useMemo, useState } from "react";
import ProjectCard from "../components/projects/ProjectCard";
import CategoryFilter from "../components/projects/CategoryFilter";
import { PROJECTS } from "../constants/projects/mockProjects";
import { Category } from "../types/project";

const PROJECTS_PER_PAGE = 4;

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(Category.ALL);
  const [page, setPage] = useState(0);

  const categories: Category[] = [
    Category.ALL,
    Category.WEB,
    Category.MOBILE,
    Category.BACKEND,
    Category.FULLSTACK,
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === Category.ALL) return PROJECTS;
    return PROJECTS.filter((p) => p.category.includes(selectedCategory));
  }, [selectedCategory]);

  // 카테고리 변경 시 첫 페이지로
  useEffect(() => {
    setPage(0);
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const pagedProjects = filteredProjects.slice(
    page * PROJECTS_PER_PAGE,
    (page + 1) * PROJECTS_PER_PAGE,
  );

  const handlePageChange = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <section className="mb-20 text-center lg:text-left">
        <h1 className="text-5xl lg:text-6xl font-serif font-black mb-4">
          <span className="text-gradient">Projects</span>
        </h1>
        <p className="text-xl text-slate-500 font-medium">
          단순한 코드의 나열을 넘어, 문제를 해결하고 가치를 창출한 기록들입니다.
        </p>
      </section>

      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {pagedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-slate-400 text-lg">
            해당 카테고리의 프로젝트가 아직 없습니다.
          </p>
        </div>
      )}

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-16">
          <button
            type="button"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 0}
            className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-500 hover:bg-slate-100 disabled:opacity-30 transition-all"
          >
            이전
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handlePageChange(i)}
              className={`w-9 h-9 rounded-xl text-sm font-bold transition-all ${
                i === page
                  ? "bg-primary text-white shadow-sm"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handlePageChange(page + 1)}
            disabled={page >= totalPages - 1}
            className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-500 hover:bg-slate-100 disabled:opacity-30 transition-all"
          >
            다음
          </button>
        </div>
      )}
    </div>
  );
}

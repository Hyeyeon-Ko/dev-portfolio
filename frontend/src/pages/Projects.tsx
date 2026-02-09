import { useMemo, useState } from "react";
import ProjectCard from "../components/projects/ProjectCard";
import CategoryFilter from "../components/projects/CategoryFilter";
import { PROJECTS } from "../constants/projects";
import { Category } from "../types/project";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(Category.ALL);

  const categories: Category[] = [
    Category.ALL,
    Category.WEB,
    Category.MOBILE,
    Category.HYBRID,
    Category.FULLSTACK,
    Category.BACKEND,
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === Category.ALL) return PROJECTS;
    return PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <section className="mb-20 text-center lg:text-left">
        <h1 className="text-6xl lg:text-8xl font-serif font-black mb-4">
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
        {filteredProjects.map((project) => (
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
    </div>
  );
}

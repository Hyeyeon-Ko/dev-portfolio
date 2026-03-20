import { describe, it, expect } from "vitest";
import type { Project } from "../types/project";
import { Category } from "../types/project";

function searchProjects(projects: Project[], query: string): Project[] {
  if (!query.trim()) return projects;
  const q = query.toLowerCase();
  return projects.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.oneLine.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
  );
}

const mockProjects: Project[] = [
  {
    id: 1,
    title: "포트폴리오 사이트",
    oneLine: "Spring Boot와 React로 만든 개인 포트폴리오",
    description: "",
    category: [Category.FULLSTACK],
    tags: ["Spring Boot", "React", "PostgreSQL"],
    imageUrl: "",
    primaryLink: { label: "GitHub", icon: "code", url: "#" },
    hoverText: "",
    accentColor: "primary",
  },
  {
    id: 2,
    title: "커머스 백엔드",
    oneLine: "대용량 트래픽을 처리하는 이커머스 API",
    description: "",
    category: [Category.BACKEND],
    tags: ["Java", "Redis", "MySQL"],
    imageUrl: "",
    primaryLink: { label: "GitHub", icon: "code", url: "#" },
    hoverText: "",
    accentColor: "accent",
  },
];

describe("searchProjects", () => {
  it("returns all projects when query is empty", () => {
    expect(searchProjects(mockProjects, "")).toHaveLength(2);
  });

  it("returns all projects when query is only whitespace", () => {
    expect(searchProjects(mockProjects, "   ")).toHaveLength(2);
  });

  it("filters by title (case-insensitive)", () => {
    const result = searchProjects(mockProjects, "포트폴리오");
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(1);
  });

  it("filters by oneLine description", () => {
    const result = searchProjects(mockProjects, "대용량");
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(2);
  });

  it("filters by tag (case-insensitive)", () => {
    const result = searchProjects(mockProjects, "redis");
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(2);
  });

  it("returns empty array when no match", () => {
    expect(searchProjects(mockProjects, "존재하지않는검색어")).toHaveLength(0);
  });

  it("returns multiple matches when query fits several projects", () => {
    const result = searchProjects(mockProjects, "java");
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(2);
  });
});

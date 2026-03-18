import type { BlogCategory, Author } from "../../types/blog";

export const BLOG_CATEGORIES: { label: string; value: BlogCategory }[] = [
  { label: "All", value: "All" },
  { label: "TIL", value: "TIL" },
  { label: "Retrospective", value: "Retrospective" },
  { label: "Thinking", value: "Thinking" },
];

export const BLOG_AUTHOR: Author = {
  name: "Hyeyeon Ko",
  title: "Backend Engineer (Spring / JPA)",
  bio: "기능을 만드는 것보다, 오래 가는 구조를 만드는 데 더 관심이 있습니다. 기록은 습관이고, 품질은 시스템이라고 믿습니다.",
  avatar: "/images/projects/profile.jpg",
};

import type { Post, BlogCategory, PostDetail, Author, RelatedPost } from "../../types/blog";

export const BLOG_CATEGORIES: { label: string; value: BlogCategory }[] = [
  { label: "All", value: "All" },
  { label: "TIL", value: "TIL" },
  { label: "Retrospective", value: "Retrospective" },
  { label: "Thinking", value: "Thinking" },
];

export const BLOG_POSTS: Post[] = [
  {
    id: 1,
    category: "TIL",
    date: "2024.05.24",
    title: "로그: 이번 주에 배운 것 (React 19 스닉픽)",
    excerpt:
      "React 19에서 도입되는 컴파일러와 액션 API가 가져올 개발자 경험의 변화에 대해 정리했습니다.",
    readTime: "5 min read",
    color: "primary",
  },
  {
    id: 2,
    category: "Retrospective",
    date: "2024.05.18",
    title: "회고: 첫 오픈소스 기여와 그 과정에서의 교훈",
    excerpt:
      "작은 PR을 던지고 메인테이너와 소통하며 느낀 오픈소스 생태계와 코드 리뷰의 가치.",
    readTime: "12 min read",
    color: "accent",
  },
  {
    id: 3,
    category: "Thinking",
    date: "2024.05.10",
    title: "생각: 왜 '코드의 가독성'이 성능보다 중요한가",
    excerpt:
      "협업 관점에서 유지보수하기 좋은 코드가 비즈니스에 미치는 영향에 대한 개인적 고찰.",
    readTime: "8 min read",
    color: "primary",
  },
  {
    id: 4,
    category: "TIL",
    date: "2024.05.02",
    title: "TypeScript 5.4의 새로운 기능들 훑어보기",
    excerpt:
      "NoInfer 타입 헬퍼와 타입 좁히기 개선 등 실무에서 바로 써먹을 수 있는 변경점 정리.",
    readTime: "4 min read",
    color: "primary",
  },
  {
    id: 5,
    category: "Thinking",
    date: "2024.04.28",
    title: "좋은 UI는 설명이 필요 없다: 인터페이스 디자인 원칙",
    excerpt:
      "디자인 시스템을 구축하며 깨달은 사용자 중심 설계의 중요성과 직관적 UI를 만드는 방법.",
    readTime: "10 min read",
    color: "primary",
  },
];

export const BLOG_AUTHOR: Author = {
  name: "Alex Kim",
  title: "Frontend Architect & UI Designer",
  bio: "아름다운 코드가 세상을 바꾼다고 믿는 프론트엔드 엔지니어입니다.",
  avatar: "https://picsum.photos/id/64/200/200",
};

export const RELATED_POSTS: RelatedPost[] = [
  {
    category: "RETROSPECTIVE",
    title: "첫 오픈소스 기여와 그 과정에서의 교훈",
    date: "2024.05.18",
    type: "Retrospective",
  },
  {
    category: "THINKING",
    title: "왜 '코드의 가독성'이 성능보다 중요한가",
    date: "2024.05.10",
    type: "Thinking",
  },
  {
    category: "TIL",
    title: "TypeScript 5.4의 새로운 기능들",
    date: "2024.05.02",
    type: "TIL",
  },
];

/** 상세 페이지용 mock (id별로 나중에 API 연동 시 교체) */
export function getPostDetailById(id: number): PostDetail | undefined {
  const list = BLOG_POSTS.find((p) => p.id === id);
  if (!list) return undefined;
  return {
    id: list.id,
    category: list.category,
    date: list.date,
    readTime: list.readTime,
    title: list.title,
    subtitle: list.category === "TIL" ? "(React 19 스닉픽)" : undefined,
    content: "",
    author: BLOG_AUTHOR,
    tags: ["React19", "WebDev", "Frontend", "JavaScript"],
    likeCount: 124,
    commentCount: 12,
    relatedPosts: RELATED_POSTS,
  };
}

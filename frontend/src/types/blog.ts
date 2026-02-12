export type BlogCategory = "All" | "TIL" | "Retrospective" | "Thinking";

export interface Post {
  id: number;
  category: BlogCategory;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
  color?: "primary" | "accent";
}

/** 상세 조회용 포스트 */
export interface PostDetail {
  id: number;
  category: string;
  date: string;
  readTime: string;
  title: string;
  subtitle?: string;
  content: string;
  author: Author;
  tags: string[];
  likeCount: number;
  commentCount: number;
  relatedPosts?: RelatedPost[];
}

export interface PostMeta {
  category: string;
  date: string;
  readTime: string;
}

export interface RelatedPost {
  category: string;
  title: string;
  date: string;
  type: "Retrospective" | "Thinking" | "TIL";
}

export interface Author {
  name: string;
  title: string;
  bio: string;
  avatar: string;
}

/** 작성/수정용 드래프트 */
export type Category = "TIL" | "Retrospective" | "Thinking";

export interface BlogDraft {
  title: string;
  content: string;
  category: Category;
  tags: string[];
  coverImage: string | null;
  lastSaved: string;
}

export interface BlogWriteUser {
  name: string;
  role: string;
  avatar: string;
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

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

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

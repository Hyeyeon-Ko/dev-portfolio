export enum Category {
  ALL = "All Works",
  WEB = "Web",
  MOBILE = "Mobile",
  FULLSTACK = "Full-Stack",
  BACKEND = "Backend",
  HYBRID = "Hybrid",
}

export type ProjectLink = {
  label: string;
  icon: string;
  url: string;
};

export type Project = {
  id: number;
  title: string;
  oneLine: string;
  description: string;
  category: Exclude<Category, Category.ALL>;
  tags: string[];
  imageUrl: string;

  primaryLink: ProjectLink;
  secondaryLink?: ProjectLink;

  hoverText: string;
  accentColor: "primary" | "accent";

  period?: string;
  team?: string;
  role?: string;
  highlights?: string[];
  award?: string;
};

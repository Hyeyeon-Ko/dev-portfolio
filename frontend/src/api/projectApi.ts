import type { Project } from "../types/project";
import { getAdminKey } from "../utils/auth";

const BASE = "/api";

// ── helpers ───────────────────────────────────────────

function splitCsv(s: string | null | undefined): string[] {
  if (!s) return [];
  return s.split(",").map((t) => t.trim()).filter(Boolean);
}

// ── types ─────────────────────────────────────────────

/** Shape returned by the backend list/detail endpoints (raw, before mapping) */
interface RawProject {
  id: number;
  title: string;
  oneLine: string | null;
  category: string[] | null;
  tags: string[] | null;
  imageUrl: string | null;
  primaryLinkLabel: string | null;
  primaryLinkIcon: string | null;
  primaryLinkUrl: string | null;
  secondaryLinkLabel: string | null;
  secondaryLinkIcon: string | null;
  secondaryLinkUrl: string | null;
  hoverText: string | null;
  accentColor: string | null;
  team: string | null;
  period: string | null;
  role: string | null;
  award: string | null;
  highlights: string[] | null;
  sortOrder: number | null;
  // detail only
  overview?: string | null;
  problemJson?: string | null;
  processJson?: string | null;
  impactJson?: string | null;
}

export interface CaseStudyItem {
  title: string;
  description: string;
  tone?: string;
}

export interface ProjectDetail extends Project {
  overview: string;
  problem: CaseStudyItem[];
  process: CaseStudyItem[];
  impact: CaseStudyItem[];
}

// ── mappers ───────────────────────────────────────────

function parseJsonArray(raw: string | null | undefined): CaseStudyItem[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function mapToProject(d: RawProject): Project {
  const categories = Array.isArray(d.category) ? d.category : splitCsv(d.category as unknown as string);
  const tags = Array.isArray(d.tags) ? d.tags : splitCsv(d.tags as unknown as string);
  const highlights = Array.isArray(d.highlights) ? d.highlights : splitCsv(d.highlights as unknown as string);

  return {
    id: d.id,
    title: d.title,
    oneLine: d.oneLine ?? "",
    description: "",
    category: categories as Project["category"],
    tags,
    imageUrl: d.imageUrl ?? "",
    primaryLink: {
      label: d.primaryLinkLabel ?? "",
      icon: d.primaryLinkIcon ?? "link",
      url: d.primaryLinkUrl ?? "#",
    },
    ...(d.secondaryLinkLabel
      ? {
          secondaryLink: {
            label: d.secondaryLinkLabel,
            icon: d.secondaryLinkIcon ?? "link",
            url: d.secondaryLinkUrl ?? "#",
          },
        }
      : {}),
    hoverText: d.hoverText ?? "",
    accentColor: (d.accentColor as "primary" | "accent") ?? "primary",
    team: d.team ?? undefined,
    period: d.period ?? undefined,
    role: d.role ?? undefined,
    award: d.award ?? undefined,
    highlights: highlights.length > 0 ? highlights : undefined,
  };
}

function mapToProjectDetail(d: RawProject): ProjectDetail {
  return {
    ...mapToProject(d),
    overview: d.overview ?? "",
    problem: parseJsonArray(d.problemJson),
    process: parseJsonArray(d.processJson),
    impact: parseJsonArray(d.impactJson),
  };
}

// ── public API ────────────────────────────────────────

export async function fetchProjects(category?: string): Promise<Project[]> {
  const params = new URLSearchParams();
  if (category && category !== "All Works") params.set("category", category);
  const res = await fetch(`${BASE}/projects?${params}`);
  if (!res.ok) throw new Error(`fetchProjects failed: ${res.status}`);
  const json = await res.json();
  return (json.data ?? []).map(mapToProject);
}

export async function fetchProjectDetail(id: number): Promise<ProjectDetail> {
  const res = await fetch(`${BASE}/projects/${id}`);
  if (!res.ok) throw new Error(`fetchProjectDetail failed: ${res.status}`);
  const json = await res.json();
  return mapToProjectDetail(json.data);
}

// ── Admin API ─────────────────────────────────────────

export interface ProjectPayload {
  title: string;
  oneLine?: string;
  description?: string;
  category?: string;  // comma-separated
  tags?: string;      // comma-separated
  imageUrl?: string;
  primaryLinkLabel?: string;
  primaryLinkIcon?: string;
  primaryLinkUrl?: string;
  secondaryLinkLabel?: string;
  secondaryLinkIcon?: string;
  secondaryLinkUrl?: string;
  hoverText?: string;
  accentColor?: string;
  team?: string;
  period?: string;
  role?: string;
  award?: string;
  highlights?: string; // comma-separated
  sortOrder?: number;
  overview?: string;
  problemJson?: string;
  processJson?: string;
  impactJson?: string;
}

export async function createProject(payload: ProjectPayload): Promise<number> {
  const res = await fetch(`${BASE}/admin/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-ADMIN-KEY": getAdminKey() ?? "",
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const msg = await res.text();
    throw new Error(`createProject failed: ${res.status} ${msg}`);
  }
  const json = await res.json();
  return json.data?.id;
}

export async function updateProject(id: number, payload: Partial<ProjectPayload>): Promise<void> {
  const res = await fetch(`${BASE}/admin/projects/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-ADMIN-KEY": getAdminKey() ?? "",
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`updateProject failed: ${res.status}`);
}

export async function deleteProject(id: number): Promise<void> {
  const res = await fetch(`${BASE}/admin/projects/${id}`, {
    method: "DELETE",
    headers: { "X-ADMIN-KEY": getAdminKey() ?? "" },
  });
  if (!res.ok) throw new Error(`deleteProject failed: ${res.status}`);
}

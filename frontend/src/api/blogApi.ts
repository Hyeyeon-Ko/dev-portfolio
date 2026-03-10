import type { Post, PostDetail, BlogCategory } from "../types/blog";
import { BLOG_AUTHOR } from "../constants/blog/mockBlog";

import { getAdminKey } from "../utils/auth";

const BASE = "/api";

// ── 공통 ─────────────────────────────────────────────

function formatDate(iso: string | null | undefined): string {
  if (!iso) return "";
  const d = new Date(iso);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}.${m}.${day}`;
}

function formatReadTime(min: number | null | undefined): string {
  return min ? `${min} min read` : "5 min read";
}

// ── 목록 ─────────────────────────────────────────────

export interface FetchPostsOptions {
  category?: BlogCategory;
  q?: string;
  page?: number;
  size?: number;
}

export interface PostsPage {
  items: Post[];
  totalPages: number;
  hasNext: boolean;
  totalElements: number;
}

export async function fetchPosts(opts: FetchPostsOptions = {}): Promise<PostsPage> {
  const params = new URLSearchParams();
  if (opts.category && opts.category !== "All") params.set("category", opts.category);
  if (opts.q) params.set("q", opts.q);
  if (opts.page !== undefined) params.set("page", String(opts.page));
  if (opts.size !== undefined) params.set("size", String(opts.size));

  const res = await fetch(`${BASE}/posts?${params}`);
  if (!res.ok) throw new Error(`fetchPosts failed: ${res.status}`);

  const json = await res.json();
  const data = json.data;

  const items: Post[] = (data.items ?? []).map((item: Record<string, unknown>, idx: number) => ({
    id: item.id as number,
    category: item.category as BlogCategory,
    date: formatDate(item.publishedAt as string),
    title: item.title as string,
    excerpt: item.excerpt as string,
    readTime: formatReadTime(item.readTimeMin as number),
    color: idx % 2 === 0 ? "primary" : "accent",
  }));

  return {
    items,
    totalPages: data.totalPages ?? 1,
    hasNext: data.hasNext ?? false,
    totalElements: data.totalElements ?? items.length,
  };
}

// ── 상세 ─────────────────────────────────────────────

export async function fetchPostDetail(id: number): Promise<PostDetail> {
  const res = await fetch(`${BASE}/posts/${id}`);
  if (!res.ok) throw new Error(`fetchPostDetail failed: ${res.status}`);

  const json = await res.json();
  const d = json.data;

  return {
    id: d.id,
    category: d.category,
    date: formatDate(d.publishedAt),
    readTime: formatReadTime(d.readTimeMin),
    title: d.title,
    content: d.contentMd ?? "",
    author: BLOG_AUTHOR,
    tags: d.tags ? d.tags.split(",").map((t: string) => t.trim()).filter(Boolean) : [],
    likeCount: d.likeCount ?? 0,
    commentCount: d.commentCount ?? 0,
    relatedPosts: [],
  };
}

// ── 전체 목록 (이전/다음 글 탐색용) ───────────────────

export async function fetchAllPostIds(): Promise<number[]> {
  const res = await fetch(`${BASE}/posts?size=200`);
  if (!res.ok) return [];
  const json = await res.json();
  return (json.data?.items ?? []).map((p: { id: number }) => p.id);
}

// ── 글 작성 (Admin) ───────────────────────────────────

export interface CreatePostPayload {
  title: string;
  contentMd: string;
  excerpt: string;
  category: string;
  status: "DRAFT" | "PUBLISHED";
  readTimeMin?: number;
  coverImageUrl?: string;
  tags?: string; // comma-separated
}

export async function createPost(payload: CreatePostPayload): Promise<number> {
  const res = await fetch(`${BASE}/admin/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-ADMIN-KEY": getAdminKey() ?? "",
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const msg = await res.text();
    throw new Error(`createPost failed: ${res.status} ${msg}`);
  }
  const json = await res.json();
  return json.data?.id;
}

export async function updatePost(id: number, payload: Partial<CreatePostPayload>): Promise<void> {
  const res = await fetch(`${BASE}/admin/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-ADMIN-KEY": getAdminKey() ?? "",
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`updatePost failed: ${res.status}`);
}

// ── Admin 글 상세 조회 (수정용) ────────────────────────

export interface AdminPostDetail {
  id: number;
  title: string;
  contentMd: string;
  excerpt: string;
  category: string;
  status: string;
  readTimeMin: number | null;
  coverImageUrl: string | null;
  tags: string[]; // parsed from comma-separated
}

export async function fetchPostDetailAdmin(id: number): Promise<AdminPostDetail> {
  const res = await fetch(`${BASE}/admin/posts/${id}`, {
    headers: { "X-ADMIN-KEY": getAdminKey() ?? "" },
  });
  if (!res.ok) throw new Error(`fetchPostDetailAdmin failed: ${res.status}`);
  const json = await res.json();
  const d = json.data;
  return {
    id: d.id,
    title: d.title ?? "",
    contentMd: d.contentMd ?? "",
    excerpt: d.excerpt ?? "",
    category: d.category ?? "TIL",
    status: d.status ?? "DRAFT",
    readTimeMin: d.readTimeMin ?? null,
    coverImageUrl: d.coverImageUrl ?? null,
    tags: d.tags ? d.tags.split(",").map((t: string) => t.trim()).filter(Boolean) : [],
  };
}

export async function deletePost(id: number): Promise<void> {
  const res = await fetch(`${BASE}/admin/posts/${id}`, {
    method: "DELETE",
    headers: { "X-ADMIN-KEY": getAdminKey() ?? "" },
  });
  if (!res.ok) throw new Error(`deletePost failed: ${res.status}`);
}

// ── 좋아요 ────────────────────────────────────────────

function getOrCreateVisitorKey(): string {
  const KEY = "visitor_key";
  let key = localStorage.getItem(KEY);
  if (!key) {
    key = crypto.randomUUID();
    localStorage.setItem(KEY, key);
  }
  return key;
}

export async function likePost(id: number): Promise<void> {
  const res = await fetch(`${BASE}/posts/${id}/likes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ visitorKey: getOrCreateVisitorKey() }),
  });
  if (!res.ok) throw new Error(`likePost failed: ${res.status}`);
}

// ── 댓글 ──────────────────────────────────────────────

export interface Comment {
  id: number;
  authorName: string | null;
  content: string;
  createdAt: string;
  status?: string;
}

export async function fetchComments(postId: number): Promise<Comment[]> {
  const res = await fetch(`${BASE}/posts/${postId}/comments`);
  if (!res.ok) throw new Error(`fetchComments failed: ${res.status}`);
  const json = await res.json();
  return json.data ?? [];
}

export async function createComment(
  postId: number,
  payload: { authorName: string; content: string }
): Promise<void> {
  const res = await fetch(`${BASE}/posts/${postId}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`createComment failed: ${res.status}`);
}

export async function fetchPendingComments(postId: number): Promise<Comment[]> {
  const res = await fetch(`${BASE}/admin/posts/${postId}/comments/pending`, {
    headers: { "X-ADMIN-KEY": getAdminKey() ?? "" },
  });
  if (!res.ok) throw new Error(`fetchPendingComments failed: ${res.status}`);
  const json = await res.json();
  return json.data ?? [];
}

export async function approveComment(id: number): Promise<void> {
  const res = await fetch(`${BASE}/admin/comments/${id}/approve`, {
    method: "PUT",
    headers: { "X-ADMIN-KEY": getAdminKey() ?? "" },
  });
  if (!res.ok) throw new Error(`approveComment failed: ${res.status}`);
}

export async function deleteComment(id: number): Promise<void> {
  const res = await fetch(`${BASE}/admin/comments/${id}`, {
    method: "DELETE",
    headers: { "X-ADMIN-KEY": getAdminKey() ?? "" },
  });
  if (!res.ok) throw new Error(`deleteComment failed: ${res.status}`);
}

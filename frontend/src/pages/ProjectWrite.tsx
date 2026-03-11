import { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createProject,
  updateProject,
  deleteProject,
  fetchProjectDetailAdmin,
} from "../api/projectApi";
import Dialog from "../components/ui/Dialog";
import { useDialog } from "../hooks/useDialog";

interface CaseStudyItem {
  title: string;
  description: string;
  tone: string;
}

interface ProjectFormState {
  title: string;
  oneLine: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string;
  accentColor: string;
  primaryLinkLabel: string;
  primaryLinkIcon: string;
  primaryLinkUrl: string;
  secondaryLinkLabel: string;
  secondaryLinkIcon: string;
  secondaryLinkUrl: string;
  hoverText: string;
  team: string;
  period: string;
  role: string;
  award: string;
  highlights: string;
  sortOrder: number;
  overview: string;
  problem: CaseStudyItem[];
  process: CaseStudyItem[];
  impact: CaseStudyItem[];
}

function normalizeCaseStudyItems(
  items: { title: string; description: string; tone?: string }[]
): CaseStudyItem[] {
  return items.map((item) => ({
    title: item.title,
    description: item.description,
    tone: item.tone ?? "slate",
  }));
}

const INITIAL_FORM: ProjectFormState = {
  title: "",
  oneLine: "",
  description: "",
  imageUrl: "",
  category: "",
  tags: "",
  accentColor: "primary",
  primaryLinkLabel: "",
  primaryLinkIcon: "",
  primaryLinkUrl: "",
  secondaryLinkLabel: "",
  secondaryLinkIcon: "",
  secondaryLinkUrl: "",
  hoverText: "",
  team: "",
  period: "",
  role: "",
  award: "",
  highlights: "",
  sortOrder: 0,
  overview: "",
  problem: [],
  process: [],
  impact: [],
};

const EMPTY_ITEM: CaseStudyItem = { title: "", description: "", tone: "slate" };

const TONE_OPTIONS = ["rose", "amber", "indigo", "sky", "emerald", "slate", "cyan"] as const;

const INPUT_CLASS =
  "w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white";

const LABEL_CLASS = "block text-xs font-semibold text-slate-500 mb-1.5";

const SECTION_TITLE_CLASS = "text-sm font-black text-slate-400 uppercase tracking-widest mb-4";

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass-card p-8 rounded-[2rem] mb-6">
      <h2 className={SECTION_TITLE_CLASS}>{title}</h2>
      {children}
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className={LABEL_CLASS}>{label}</label>
      {children}
    </div>
  );
}

function CaseStudyList({
  label,
  items,
  onChange,
}: {
  label: string;
  items: CaseStudyItem[];
  onChange: (items: CaseStudyItem[]) => void;
}) {
  const addItem = () => onChange([...items, { ...EMPTY_ITEM }]);
  const removeItem = (idx: number) => onChange(items.filter((_, i) => i !== idx));
  const updateItem = (idx: number, field: keyof CaseStudyItem, value: string) => {
    const next = items.map((item, i) =>
      i === idx ? { ...item, [field]: value } : item
    );
    onChange(next);
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{label}</span>
        <button
          type="button"
          onClick={addItem}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-primary bg-primary/10 hover:bg-primary/20 transition-all"
        >
          <span className="material-symbols-outlined text-[14px]">add</span>
          항목 추가
        </button>
      </div>
      <div className="space-y-4">
        {items.map((item, idx) => (
          <div key={idx} className="border border-slate-200 rounded-2xl p-4 bg-white/60 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400">#{idx + 1}</span>
              <button
                type="button"
                onClick={() => removeItem(idx)}
                className="flex items-center gap-1 text-xs text-rose-400 hover:text-rose-600 transition-colors"
              >
                <span className="material-symbols-outlined text-[14px]">delete</span>
                삭제
              </button>
            </div>
            <div>
              <label className={LABEL_CLASS}>제목</label>
              <input
                type="text"
                className={INPUT_CLASS}
                value={item.title}
                onChange={(e) => updateItem(idx, "title", e.target.value)}
                placeholder="항목 제목"
              />
            </div>
            <div>
              <label className={LABEL_CLASS}>설명</label>
              <textarea
                className={INPUT_CLASS}
                rows={2}
                value={item.description}
                onChange={(e) => updateItem(idx, "description", e.target.value)}
                placeholder="항목 설명"
              />
            </div>
            <div>
              <label className={LABEL_CLASS}>톤 (tone)</label>
              <select
                className={INPUT_CLASS}
                value={item.tone}
                onChange={(e) => updateItem(idx, "tone", e.target.value)}
              >
                {TONE_OPTIONS.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>
        ))}
        {items.length === 0 && (
          <p className="text-xs text-slate-400 text-center py-4 border border-dashed border-slate-200 rounded-xl">
            항목이 없습니다. 추가 버튼을 눌러 시작하세요.
          </p>
        )}
      </div>
    </div>
  );
}

export default function ProjectWrite() {
  const { id } = useParams<{ id?: string }>();
  const editId = id ? parseInt(id, 10) : null;
  const isEditMode = editId !== null && !isNaN(editId);

  const navigate = useNavigate();
  const { dialogProps, confirm, alert } = useDialog();
  const [form, setForm] = useState<ProjectFormState>(INITIAL_FORM);
  const [loadingEdit, setLoadingEdit] = useState(isEditMode);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!isEditMode || !editId) return;
    fetchProjectDetailAdmin(editId)
      .then((data) => {
        setForm({
          ...data,
          problem: normalizeCaseStudyItems(data.problem),
          process: normalizeCaseStudyItems(data.process),
          impact: normalizeCaseStudyItems(data.impact),
        });
      })
      .catch(() => {
        alert("프로젝트를 불러오지 못했습니다.", { type: "error" });
        navigate("/projects");
      })
      .finally(() => setLoadingEdit(false));
  }, [editId, isEditMode, navigate]);

  const update = (field: keyof ProjectFormState, value: ProjectFormState[keyof ProjectFormState]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = useCallback(async () => {
    if (!form.title.trim()) {
      await alert("제목을 입력해주세요.", { type: "error" });
      return;
    }
    const ok = await confirm(
      isEditMode ? "변경사항을 저장할까요?" : "새 프로젝트를 생성할까요?",
      { type: "confirm", icon: "save", confirmLabel: "저장", cancelLabel: "취소" }
    );
    if (!ok) return;

    setIsSaving(true);
    const payload = {
      title: form.title,
      oneLine: form.oneLine || undefined,
      description: form.description || undefined,
      imageUrl: form.imageUrl || undefined,
      category: form.category || undefined,
      tags: form.tags || undefined,
      accentColor: form.accentColor || undefined,
      primaryLinkLabel: form.primaryLinkLabel || undefined,
      primaryLinkIcon: form.primaryLinkIcon || undefined,
      primaryLinkUrl: form.primaryLinkUrl || undefined,
      secondaryLinkLabel: form.secondaryLinkLabel || undefined,
      secondaryLinkIcon: form.secondaryLinkIcon || undefined,
      secondaryLinkUrl: form.secondaryLinkUrl || undefined,
      hoverText: form.hoverText || undefined,
      team: form.team || undefined,
      period: form.period || undefined,
      role: form.role || undefined,
      award: form.award || undefined,
      highlights: form.highlights || undefined,
      sortOrder: form.sortOrder,
      overview: form.overview || undefined,
      problemJson: JSON.stringify(form.problem),
      processJson: JSON.stringify(form.process),
      impactJson: JSON.stringify(form.impact),
    };

    try {
      if (isEditMode && editId) {
        await updateProject(editId, payload);
        navigate(`/projects/${editId}`);
      } else {
        const newId = await createProject(payload);
        navigate(`/projects/${newId}`);
      }
    } catch {
      await alert("저장에 실패했습니다. 다시 시도해주세요.", { type: "error" });
    } finally {
      setIsSaving(false);
    }
  }, [form, isEditMode, editId, navigate, alert, confirm]);

  const handleDelete = async () => {
    const ok = await confirm("이 프로젝트를 영구 삭제할까요?", {
      type: "danger",
      message: "삭제 후 복구할 수 없습니다.",
      confirmLabel: "삭제",
      cancelLabel: "취소",
    });
    if (!ok || !editId) return;
    deleteProject(editId)
      .then(() => navigate("/projects"))
      .catch(() => alert("삭제에 실패했습니다.", { type: "error" }));
  };

  if (loadingEdit) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <span className="material-symbols-outlined text-4xl text-slate-300 animate-pulse">hourglass_empty</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Dialog {...dialogProps} />
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-slate-100 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate(isEditMode && editId ? `/projects/${editId}` : "/projects")}
              className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              뒤로
            </button>
            <span className="text-slate-300">|</span>
            <h1 className="text-sm font-bold text-slate-700">
              {isEditMode ? "프로젝트 수정" : "새 프로젝트"}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            {isEditMode && (
              <button
                type="button"
                onClick={handleDelete}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-rose-500 bg-rose-50 hover:bg-rose-100 transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">delete</span>
                삭제
              </button>
            )}
            <button
              type="button"
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-sm font-semibold text-white bg-primary hover:bg-primary/90 transition-all disabled:opacity-60"
            >
              <span className="material-symbols-outlined text-[18px]">save</span>
              {isSaving ? "저장 중..." : "저장"}
            </button>
          </div>
        </div>
      </div>

      {/* Form body */}
      <div className="max-w-3xl mx-auto px-6 py-10">
        {/* Section 1: 기본 정보 */}
        <SectionCard title="기본 정보">
          <div className="space-y-4">
            <Field label="제목 *">
              <input
                type="text"
                className={INPUT_CLASS}
                value={form.title}
                onChange={(e) => update("title", e.target.value)}
                placeholder="프로젝트 제목"
              />
            </Field>
            <Field label="한 줄 소개">
              <input
                type="text"
                className={INPUT_CLASS}
                value={form.oneLine}
                onChange={(e) => update("oneLine", e.target.value)}
                placeholder="프로젝트를 한 줄로 설명해주세요"
              />
            </Field>
            <Field label="설명">
              <textarea
                className={INPUT_CLASS}
                rows={3}
                value={form.description}
                onChange={(e) => update("description", e.target.value)}
                placeholder="프로젝트 설명"
              />
            </Field>
            <Field label="이미지 URL">
              <input
                type="text"
                className={INPUT_CLASS}
                value={form.imageUrl}
                onChange={(e) => update("imageUrl", e.target.value)}
                placeholder="https://..."
              />
            </Field>
          </div>
        </SectionCard>

        {/* Section 2: 분류 */}
        <SectionCard title="분류">
          <div className="space-y-4">
            <Field label="카테고리 (쉼표 구분, 예: FULLSTACK,WEB)">
              <input
                type="text"
                className={INPUT_CLASS}
                value={form.category}
                onChange={(e) => update("category", e.target.value)}
                placeholder="FULLSTACK,WEB"
              />
            </Field>
            <Field label="태그 (쉼표 구분, 예: React,TypeScript)">
              <input
                type="text"
                className={INPUT_CLASS}
                value={form.tags}
                onChange={(e) => update("tags", e.target.value)}
                placeholder="React,TypeScript,Spring"
              />
            </Field>
            <Field label="강조 색상">
              <select
                className={INPUT_CLASS}
                value={form.accentColor}
                onChange={(e) => update("accentColor", e.target.value)}
              >
                <option value="primary">primary</option>
                <option value="accent">accent</option>
              </select>
            </Field>
          </div>
        </SectionCard>

        {/* Section 3: 링크 */}
        <SectionCard title="링크">
          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">주요 링크</p>
              <div className="grid grid-cols-3 gap-3">
                <Field label="라벨">
                  <input
                    type="text"
                    className={INPUT_CLASS}
                    value={form.primaryLinkLabel}
                    onChange={(e) => update("primaryLinkLabel", e.target.value)}
                    placeholder="GitHub"
                  />
                </Field>
                <Field label="아이콘">
                  <input
                    type="text"
                    className={INPUT_CLASS}
                    value={form.primaryLinkIcon}
                    onChange={(e) => update("primaryLinkIcon", e.target.value)}
                    placeholder="code"
                  />
                </Field>
                <Field label="URL">
                  <input
                    type="text"
                    className={INPUT_CLASS}
                    value={form.primaryLinkUrl}
                    onChange={(e) => update("primaryLinkUrl", e.target.value)}
                    placeholder="https://..."
                  />
                </Field>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">보조 링크</p>
              <div className="grid grid-cols-3 gap-3">
                <Field label="라벨">
                  <input
                    type="text"
                    className={INPUT_CLASS}
                    value={form.secondaryLinkLabel}
                    onChange={(e) => update("secondaryLinkLabel", e.target.value)}
                    placeholder="Live Demo"
                  />
                </Field>
                <Field label="아이콘">
                  <input
                    type="text"
                    className={INPUT_CLASS}
                    value={form.secondaryLinkIcon}
                    onChange={(e) => update("secondaryLinkIcon", e.target.value)}
                    placeholder="open_in_new"
                  />
                </Field>
                <Field label="URL">
                  <input
                    type="text"
                    className={INPUT_CLASS}
                    value={form.secondaryLinkUrl}
                    onChange={(e) => update("secondaryLinkUrl", e.target.value)}
                    placeholder="https://..."
                  />
                </Field>
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Section 4: 메타정보 */}
        <SectionCard title="메타정보">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Field label="팀 구성">
                <input
                  type="text"
                  className={INPUT_CLASS}
                  value={form.team}
                  onChange={(e) => update("team", e.target.value)}
                  placeholder="5인 팀"
                />
              </Field>
              <Field label="기간">
                <input
                  type="text"
                  className={INPUT_CLASS}
                  value={form.period}
                  onChange={(e) => update("period", e.target.value)}
                  placeholder="2024.01 ~ 2024.06"
                />
              </Field>
              <Field label="역할">
                <input
                  type="text"
                  className={INPUT_CLASS}
                  value={form.role}
                  onChange={(e) => update("role", e.target.value)}
                  placeholder="Frontend Developer"
                />
              </Field>
              <Field label="수상">
                <input
                  type="text"
                  className={INPUT_CLASS}
                  value={form.award}
                  onChange={(e) => update("award", e.target.value)}
                  placeholder="최우수상"
                />
              </Field>
            </div>
            <Field label="호버 텍스트">
              <input
                type="text"
                className={INPUT_CLASS}
                value={form.hoverText}
                onChange={(e) => update("hoverText", e.target.value)}
                placeholder="카드 호버 시 표시될 텍스트"
              />
            </Field>
            <Field label="핵심 성과 (쉼표 구분)">
              <textarea
                className={INPUT_CLASS}
                rows={2}
                value={form.highlights}
                onChange={(e) => update("highlights", e.target.value)}
                placeholder="성능 30% 향상,사용자 만족도 95%"
              />
            </Field>
            <Field label="정렬 순서">
              <input
                type="number"
                className={INPUT_CLASS}
                value={form.sortOrder}
                onChange={(e) => update("sortOrder", parseInt(e.target.value, 10) || 0)}
                placeholder="0"
              />
            </Field>
          </div>
        </SectionCard>

        {/* Section 5: 케이스 스터디 */}
        <SectionCard title="케이스 스터디">
          <Field label="개요">
            <textarea
              className={`${INPUT_CLASS} mb-6`}
              rows={4}
              value={form.overview}
              onChange={(e) => update("overview", e.target.value)}
              placeholder="프로젝트 개요를 작성해주세요"
            />
          </Field>
          <CaseStudyList
            label="문제 정의 (Problem)"
            items={form.problem}
            onChange={(items) => update("problem", items)}
          />
          <CaseStudyList
            label="해결 과정 (Process)"
            items={form.process}
            onChange={(items) => update("process", items)}
          />
          <CaseStudyList
            label="성과 (Impact)"
            items={form.impact}
            onChange={(items) => update("impact", items)}
          />
        </SectionCard>
      </div>
    </div>
  );
}

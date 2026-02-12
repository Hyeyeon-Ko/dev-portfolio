import type { FC } from "react";

type Props = {
  lastSaved: string;
  isSaving: boolean;
  onSave: () => void;
  onDelete: () => void;
};

const WriteHeader: FC<Props> = ({ lastSaved, isSaving, onSave, onDelete }) => {
  return (
    <header className="h-14 flex items-center justify-between px-6 border-b border-slate-200 bg-white shrink-0">
      <div className="flex items-center gap-4">
        <span className="text-xs font-medium text-slate-400">
          {isSaving ? "저장 중..." : `마지막 저장 ${lastSaved}`}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onSave}
          disabled={isSaving}
          className="px-4 py-2 rounded-xl text-sm font-bold bg-primary text-white hover:bg-primary/90 disabled:opacity-60 transition-all"
        >
          {isSaving ? "저장 중..." : "초안 저장"}
        </button>
        <button
          type="button"
          onClick={onDelete}
          className="px-4 py-2 rounded-xl text-sm font-bold text-slate-500 hover:text-rose-500 hover:bg-rose-50 transition-all"
        >
          삭제
        </button>
      </div>
    </header>
  );
};

export default WriteHeader;

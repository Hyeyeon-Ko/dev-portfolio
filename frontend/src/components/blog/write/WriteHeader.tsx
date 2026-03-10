import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { clearAdminKey } from "../../../utils/auth";

type Props = {
  lastSaved: string;
  isSaving: boolean;
  isPublishing?: boolean;
  onSave: () => void;
  onDelete: () => void;
  onPublish?: () => void;
};

const WriteHeader: FC<Props> = ({ lastSaved, isSaving, isPublishing, onSave, onDelete, onPublish }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearAdminKey();
    navigate("/blog");
  };

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
          disabled={isSaving || isPublishing}
          className="px-4 py-2 rounded-xl text-sm font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 disabled:opacity-60 transition-all"
        >
          {isSaving ? "저장 중..." : "임시저장"}
        </button>
        {onPublish && (
          <button
            type="button"
            onClick={onPublish}
            disabled={isSaving || isPublishing}
            className="px-4 py-2 rounded-xl text-sm font-bold bg-primary text-white hover:bg-primary/90 disabled:opacity-60 transition-all"
          >
            {isPublishing ? "발행 중..." : "발행"}
          </button>
        )}
        <button
          type="button"
          onClick={onDelete}
          className="px-4 py-2 rounded-xl text-sm font-bold text-slate-500 hover:text-rose-500 hover:bg-rose-50 transition-all"
        >
          삭제
        </button>
        <button
          type="button"
          onClick={handleLogout}
          className="px-4 py-2 rounded-xl text-sm font-bold text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all"
        >
          로그아웃
        </button>
      </div>
    </header>
  );
};

export default WriteHeader;

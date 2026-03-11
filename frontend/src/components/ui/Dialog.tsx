import { useEffect } from "react";

export type DialogType = "info" | "success" | "error" | "confirm" | "danger";

export interface DialogProps {
  open: boolean;
  type?: DialogType;
  icon?: string;
  title: string;
  message?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onClose: () => void;
}

const CONFIG: Record<
  DialogType,
  { icon: string; iconBg: string; iconColor: string; confirmBg: string }
> = {
  info: {
    icon: "info",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    confirmBg: "bg-primary hover:bg-primary/90 text-white",
  },
  success: {
    icon: "check_circle",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-500",
    confirmBg: "bg-emerald-500 hover:bg-emerald-600 text-white",
  },
  error: {
    icon: "error",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
    confirmBg: "bg-rose-500 hover:bg-rose-600 text-white",
  },
  confirm: {
    icon: "check",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    confirmBg: "bg-primary hover:bg-primary/90 text-white",
  },
  danger: {
    icon: "delete",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
    confirmBg: "bg-rose-500 hover:bg-rose-600 text-white",
  },
};

export default function Dialog({
  open,
  type = "info",
  icon: iconOverride,
  title,
  message,
  confirmLabel = "확인",
  cancelLabel,
  onConfirm,
  onClose,
}: DialogProps) {
  const cfg = CONFIG[type];
  const icon = iconOverride ?? cfg.icon;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (e.key === "Enter") onConfirm();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onConfirm, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      onClick={onClose}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      {/* modal */}
      <div
        className="relative glass-card rounded-[2rem] p-8 w-full max-w-sm shadow-2xl animate-[fadeInUp_0.18s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* icon */}
        <div className={`w-14 h-14 rounded-2xl ${cfg.iconBg} flex items-center justify-center mb-5`}>
          <span className={`material-symbols-outlined text-3xl ${cfg.iconColor}`}>
            {icon}
          </span>
        </div>

        {/* text */}
        <h3 className="text-lg font-bold text-slate-800 mb-2 leading-snug">{title}</h3>
        {message && (
          <p className="text-sm text-slate-500 leading-relaxed mb-6">{message}</p>
        )}
        {!message && <div className="mb-6" />}

        {/* buttons */}
        <div className="flex gap-2 justify-end">
          {cancelLabel && (
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-all"
            >
              {cancelLabel}
            </button>
          )}
          <button
            type="button"
            onClick={onConfirm}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${cfg.confirmBg}`}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

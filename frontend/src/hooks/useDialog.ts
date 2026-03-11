import { useCallback, useRef, useState } from "react";
import type { DialogProps, DialogType } from "../components/ui/Dialog";

interface DialogState {
  open: boolean;
  type: DialogType;
  icon?: string;
  title: string;
  message?: string;
  confirmLabel?: string;
  cancelLabel?: string;
}

const CLOSED: DialogState = {
  open: false,
  type: "info",
  title: "",
};

export function useDialog() {
  const [state, setState] = useState<DialogState>(CLOSED);
  const resolveRef = useRef<((value: boolean) => void) | null>(null);

  const close = useCallback(() => {
    setState(CLOSED);
    resolveRef.current?.(false);
    resolveRef.current = null;
  }, []);

  const confirm = useCallback((
    title: string,
    options?: {
      message?: string;
      type?: DialogType;
      icon?: string;
      confirmLabel?: string;
      cancelLabel?: string;
    }
  ): Promise<boolean> => {
    return new Promise((resolve) => {
      resolveRef.current = resolve;
      setState({
        open: true,
        type: options?.type ?? "confirm",
        icon: options?.icon,
        title,
        message: options?.message,
        confirmLabel: options?.confirmLabel ?? "확인",
        cancelLabel: options?.cancelLabel ?? "취소",
      });
    });
  }, []);

  const alert = useCallback((
    title: string,
    options?: {
      message?: string;
      type?: DialogType;
      icon?: string;
    }
  ): Promise<void> => {
    return new Promise((resolve) => {
      resolveRef.current = () => resolve();
      setState({
        open: true,
        type: options?.type ?? "info",
        icon: options?.icon,
        title,
        message: options?.message,
        confirmLabel: "확인",
      });
    });
  }, []);

  const handleConfirm = useCallback(() => {
    setState(CLOSED);
    resolveRef.current?.(true);
    resolveRef.current = null;
  }, []);

  const dialogProps: DialogProps = {
    open: state.open,
    type: state.type,
    icon: state.icon,
    title: state.title,
    message: state.message,
    confirmLabel: state.confirmLabel,
    cancelLabel: state.cancelLabel,
    onConfirm: handleConfirm,
    onClose: close,
  };

  return { dialogProps, confirm, alert };
}

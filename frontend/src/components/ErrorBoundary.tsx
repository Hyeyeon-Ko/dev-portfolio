import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean };

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[ErrorBoundary]", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-6 px-6 text-center">
          <span className="material-symbols-outlined text-6xl text-slate-300">
            error
          </span>
          <div>
            <h1 className="text-2xl font-bold text-slate-700 mb-2">
              문제가 발생했습니다
            </h1>
            <p className="text-slate-400 text-sm">
              예기치 않은 오류가 발생했습니다. 홈으로 돌아가거나 새로고침해
              주세요.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all"
            >
              새로고침
            </button>
            <a
              href="/"
              className="px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-all"
            >
              홈으로
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

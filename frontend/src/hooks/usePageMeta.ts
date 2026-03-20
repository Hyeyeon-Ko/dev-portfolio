import { useEffect } from "react";

const DEFAULT_TITLE = "Hyeyeon Studio | 백엔드 개발자 고혜연";
const DEFAULT_DESC =
  "백엔드 개발자 고혜연의 포트폴리오입니다. Spring Boot, Java, PostgreSQL 기반의 프로젝트와 기술 스택을 소개합니다.";

function setMeta(selector: string, value: string) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute("content", value);
}

export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    const fullTitle = `${title} | Hyeyeon Studio`;
    const desc = description ?? DEFAULT_DESC;

    document.title = fullTitle;
    setMeta('meta[name="description"]', desc);
    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', desc);
    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', desc);

    return () => {
      document.title = DEFAULT_TITLE;
      setMeta('meta[name="description"]', DEFAULT_DESC);
      setMeta('meta[property="og:title"]', DEFAULT_TITLE);
      setMeta('meta[property="og:description"]', DEFAULT_DESC);
      setMeta('meta[name="twitter:title"]', DEFAULT_TITLE);
      setMeta('meta[name="twitter:description"]', DEFAULT_DESC);
    };
  }, [title, description]);
}

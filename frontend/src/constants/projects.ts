import type { Project } from "../types/project";
import { Category } from "../types/project";

const PLACEHOLDER =
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1400&auto=format&fit=crop";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "짝khu웅",
    oneLine: "코로나로 인해 질문할 곳이 없는 신입생들을 위한 멘토-멘티 서비스",
    description:
      "멘토와 멘티가 실시간 채팅으로 소통할 수 있는 매칭 서비스. Spring 기반 백엔드와 React Native 모바일 앱으로 구성된 하이브리드 프로젝트.",
    category: Category.HYBRID,
    tags: ["Spring Boot", "React Native", "MySQL"],
    imageUrl: PLACEHOLDER,
    primaryLink: {
      label: "GitHub",
      icon: "code",
      url: "https://github.com/SuminSSon/hacker_project",
    },
    secondaryLink: { label: "Details", icon: "info", url: "#" },
    hoverText:
      "실시간 채팅 + 멘토-멘티 매칭 + iOS/Android 동시 지원. 협업 기반 팀 프로젝트.",
    accentColor: "primary",
    team: "Backend 3, Frontend 2",
    award: "장려상 (2021 교내 동아리 대항전)",
    highlights: ["실시간 채팅", "멘토-멘티 매칭", "크로스 플랫폼(React Native)"],
  },

  {
    id: 2,
    title: "Devbox",
    oneLine: "클라우드 기반 파일 업로드/다운로드 서비스",
    description:
      "클라우드 기반 파일 관리 시스템. 팀 협업을 위한 파일 업로드/다운로드 기능 구현. Frontend 전체 UI/UX와 Backend 파일/폴더 시스템 로직을 담당.",
    category: Category.WEB,
    tags: ["Python", "Django", "HTML", "CSS", "MySQL", "AWS"],
    imageUrl: PLACEHOLDER, // 실제 스크린샷 4개 있으면 나중에 교체
    primaryLink: {
      label: "GitHub",
      icon: "code",
      url: "https://github.com/Cloud-Computing-F/devbox",
    },
    secondaryLink: { label: "Report", icon: "description", url: "#" },
    hoverText:
      "클라우드 파일 관리(업/다운로드) + 파일/폴더 구조 설계. UI 전 페이지 구현 경험.",
    accentColor: "accent",
    period: "2022.05.12 ~ 2022.06.10",
    team: "Backend 4, Frontend 1",
    role: "Frontend 전담 + Backend 파일/폴더 시스템",
  },

  {
    id: 3,
    title: "BBangting",
    oneLine: "유명 빵을 타임딜로 예약하는 웹 플랫폼",
    description:
      "유명한 빵집 빵을 타임딜로 예약하고, 리뷰 작성 및 알림을 받을 수 있는 플랫폼. 팀 프로젝트로 웹 기능을 구현.",
    category: Category.WEB,
    tags: ["Spring Boot", "React", "MySQL"],
    imageUrl: PLACEHOLDER,
    primaryLink: {
      label: "Docs",
      icon: "description",
      url: "https://www.notion.so/BBangting-2f60686cea8a81049657eefede69d82f?pvs=21",
    },
    secondaryLink: {
      label: "Repo",
      icon: "code",
      url: "https://www.notion.so/2f60686cea8a81a1b8bbeaa6f3ad472f?pvs=21",
    },
    hoverText:
      "타임딜 예약 + 리뷰 + 알림. Backend 2 / Frontend 1 팀 프로젝트.",
    accentColor: "primary",
    team: "Backend 2, Frontend 1",
  },

  {
    id: 4,
    title: "Post-post",
    oneLine: "일기 기록 및 공유 모바일 앱",
    description:
      "소셜 로그인 기반 일기 작성 및 편지 공유 기능을 제공하는 모바일 앱. 개인화 알림, 월별 감정 분석, 댓글 등 기능을 구현.",
    category: Category.MOBILE,
    tags: ["Spring Boot", "React Native", "MySQL", "OAuth", "Spring Security", "JPA"],
    imageUrl: PLACEHOLDER,
    primaryLink: {
      label: "GitHub",
      icon: "code",
      url: "https://www.notion.so/24PostPost-2f60686cea8a817c888bded02becc0e3?pvs=21",
    },
    secondaryLink: { label: "Details", icon: "info", url: "#" },
    hoverText:
      "OAuth 소셜 로그인 + 일기/공유 + 개인화 알림 + 감정 분석 + 댓글 기능.",
    accentColor: "accent",
    period: "2024.01.14 ~ 2024.02.28",
    team: "Backend 1, Frontend 1, Design 1, 기획 2",
  },

  {
    id: 5,
    title: "KMI-MIS",
    oneLine: "총무/구매 업무를 디지털화한 내부 관리 시스템",
    description:
      "총무팀과 구매팀의 업무 프로세스를 디지털화/자동화하여 효율을 개선한 내부 관리 시스템. 2인 팀으로 기획~배포까지 풀스택으로 진행.",
    category: Category.FULLSTACK,
    tags: ["Spring Boot", "React", "MariaDB", "REST API", "업무 자동화"],
    imageUrl: PLACEHOLDER,
    primaryLink: {
      label: "Notion",
      icon: "description",
      url: "https://www.notion.so/KMI-MIS-2f60686cea8a8137904cdc43b5082e92?pvs=21",
    },
    secondaryLink: { label: "Case Study", icon: "open_in_new", url: "#" },
    hoverText:
      "업무 프로세스를 웹에서 전부 처리 가능하게 개선. 2인 팀으로 전 과정을 담당.",
    accentColor: "primary",
    period: "2024.06.24 ~ 2024.11.29",
    team: "2명",
  },

  {
    id: 6,
    title: "KMI-KICS 재해발생 보고서 시스템",
    oneLine: "재해발생 보고서 조회/작성 및 감염검사항목 관리 시스템",
    description:
      "재해발생 보고서 조회/작성, 감염검사항목(HBV/HCV/HIV/매독) 관리, 로그인 사용자 정보 조회, 재해자 검사결과 관리 기능을 포함한 시스템.",
    category: Category.BACKEND,
    tags: ["SVN", "Java", "XPlatform", "Oracle"],
    imageUrl: PLACEHOLDER,
    primaryLink: { label: "Case Study", icon: "description", url: "#" },
    secondaryLink: { label: "Details", icon: "info", url: "#" },
    hoverText:
      "업무 시스템 기능 개발(조회/작성/관리) + Oracle 기반 데이터 조인 및 처리 경험.",
    accentColor: "accent",
    period: "2024.12.03 ~ 2024.12.21",
    team: "2명 (plan/design/frontend/backend)",
  },
];

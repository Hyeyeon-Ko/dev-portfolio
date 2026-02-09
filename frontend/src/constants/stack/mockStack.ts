import type { ExpertiseStats, InfrastructureItem, SkillCategory } from "../../types/stack";

/**
 * Stack Page Hero
 */
export const STACK_HERO = {
  badge: "TECHNICAL CAPABILITIES",
  titleLine1: "기술적 도구들을 통해",
  titleLine2: "가치를 증명합니다.",
  description:
    "프로젝트에서 실제로 써본 기술들을 중심으로, 왜 이 기술이 필요한지/어떻게 문제를 해결했는지에 초점을 맞춥니다.",
};

/**
 * 전체 역량(임의 수치)
 */
export const EXPERTISE: ExpertiseStats = {
  frontend: 20, // React/TS/Tailwind/React Native 경험 반영
  backend: 85, // Spring Boot 중심 경험 반영
  devops: 65, // AWS/Docker/Git 기반
  levelLabel: "Practical",
};

/**
 * 주요 기술 카테고리
 */
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "web",
    colorClass: "text-indigo-500",
    items: [
      {
        name: "React",
        fullName: "React",
        description: "웹 UI를 컴포넌트 단위로 설계하고, 페이지 단위 구조를 잡아 구현합니다.",
        color: "text-indigo-500",
      },
      {
        name: "TS",
        fullName: "TypeScript",
        description: "타입 기반으로 데이터/컴포넌트 계약을 명확히 하여 유지보수성을 높입니다.",
        color: "text-sky-500",
      },
      {
        name: "TW",
        fullName: "Tailwind CSS",
        description: "디자인을 빠르게 구현하고, 공통 스타일(유틸/컴포넌트)을 재사용합니다.",
        color: "text-teal-500",
      },
      {
        name: "HTML/CSS",
        fullName: "HTML / CSS",
        description: "기본 마크업 구조와 레이아웃을 이해하고 반응형 UI 구현에 활용합니다.",
        color: "text-slate-600",
      },
    ],
  },

  {
    title: "Backend",
    icon: "dns",
    colorClass: "text-purple-500",
    items: [
      {
        name: "Spring",
        fullName: "Spring Boot",
        description: "REST API를 설계/구현하고, 서비스 로직을 안정적으로 구성합니다.",
        color: "text-green-600",
      },
      {
        name: "Security",
        fullName: "Spring Security (OAuth 포함)",
        description:
          "소셜 로그인/인증 흐름을 적용하고, 사용자 접근 제어 기반 기능을 구현합니다.",
        color: "text-emerald-600",
      },
      {
        name: "JPA",
        fullName: "JPA",
        description:
          "엔티티 기반 데이터 처리와 도메인 설계를 통해 유지보수 가능한 구조를 지향합니다.",
        color: "text-orange-600",
      },
      {
        name: "Django",
        fullName: "Python / Django",
        description: "클라우드 파일 관리(업/다운로드) 서비스 개발 경험이 있습니다.",
        color: "text-yellow-600",
      },
      {
        name: "Java",
        fullName: "Java",
        description: "업무 시스템 개발에서 기본 언어로 활용하며, 안정적인 로직 구현에 집중합니다.",
        color: "text-red-600",
      },
    ],
  },

  {
    title: "Database",
    icon: "database",
    colorClass: "text-slate-700",
    items: [
      {
        name: "Oracle",
        fullName: "Oracle",
        description: "업무 시스템에서 조인/조회 중심 쿼리 처리 및 데이터 연동 경험이 있습니다.",
        color: "text-amber-700",
      },
      {
        name: "MariaDB",
        fullName: "MariaDB",
        description: "업무 자동화/내부 시스템 프로젝트에서 데이터 저장/조회에 활용했습니다.",
        color: "text-blue-700",
      },
      {
        name: "MySQL",
        fullName: "MySQL",
        description: "웹/모바일 프로젝트에서 기본 DB로 사용하며 스키마 기반 기능 구현을 했습니다.",
        color: "text-sky-700",
      },
    ],
  },

  {
    title: "Collaboration",
    icon: "group",
    colorClass: "text-pink-600",
    items: [
      {
        name: "Git",
        fullName: "Git / GitHub",
        description:
          "팀 프로젝트에서 형상관리/협업을 수행하며, 기능 단위로 작업을 분리해 진행합니다.",
        color: "text-pink-600",
      },
      {
        name: "GitLab",
        fullName: "GitLab",
        description:
          "Merge Request 기반으로 변경사항을 리뷰/공유하고, 파이프라인 로그를 확인하며 빌드 흐름을 점검했습니다.",
        color: "text-orange-600",
      },
      {
        name: "SVN",
        fullName: "SVN",
        description: "업무 시스템 개발 환경에서 SVN 기반 형상관리를 경험했습니다.",
        color: "text-slate-700",
      },
      {
        name: "Docs",
        fullName: "Notion / 문서화",
        description:
          "프로젝트 내용을 정리하고 공유 가능한 형태로 문서화하는 흐름을 선호합니다.",
        color: "text-violet-600",
      },
      {
        name: "Jira",
        fullName: "Jira",
        description:
          "이슈/스프린트 단위로 작업을 쪼개고 진행 상황을 공유하며, 우선순위 기반으로 업무를 관리했습니다.",
        color: "text-blue-600",
      },
      {
        name: "Confluence",
        fullName: "Confluence",
        description:
          "기능 정의, 정책/가이드, 개발 히스토리를 문서화해 팀 내 공유와 인수인계를 쉽게 만들었습니다.",
        color: "text-sky-700",
      },
      {
        name: "Slack",
        fullName: "Slack",
        description:
          "팀 커뮤니케이션과 빠른 피드백 루프를 위해 사용했으며, 공지/업무 공유 채널을 중심으로 협업했습니다.",
        color: "text-violet-600",
      },
    ],
  },
];

/**
 * Infrastructure & Tools
 */
export const INFRA_TOOLS: InfrastructureItem[] = [
  {
    name: "AWS",
    description: "클라우드 기반 서비스 구성 경험(파일 관리/배포 등)에서 AWS를 활용했습니다.",
    icon: "cloud",
    iconColor: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    name: "Docker",
    description:
      "환경 차이를 줄이기 위해 컨테이너 기반 실행 환경을 구성하는 흐름을 이해하고 있습니다.",
    icon: "terminal",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    name: "GitHub",
    description: "프로젝트 협업 및 리포지토리 운영 경험이 있으며, 링크 공유/정리 형태를 선호합니다.",
    icon: "code",
    iconColor: "text-slate-800",
    bgColor: "bg-slate-100",
  },
  {
    name: "GitLab",
    description:
      "MR 기반 협업과 CI 파이프라인 확인(빌드/테스트/배포 흐름 점검)을 경험했습니다.",
    icon: "schema",
    iconColor: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    name: "Grafana",
    description:
      "대시보드로 지표를 확인하며 서비스/배치 상태를 모니터링하고, 이상 징후를 빠르게 파악하는 데 활용했습니다.",
    icon: "query_stats",
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-100",
  },
  {
    name: "XPlatform",
    description: "업무 시스템 개발에서 XPlatform 기반 화면/연동 환경을 경험했습니다.",
    icon: "extension",
    iconColor: "text-purple-700",
    bgColor: "bg-purple-100",
  },
];

/**
 * CTA
 */
export const STACK_CTA = {
  title: "기술적 도전을 즐길 준비가 되었습니다.",
  description:
    "Spring 기반 백엔드와 웹/모바일 UI 구현 경험을 바탕으로, 문제를 빠르게 구조화하고 끝까지 구현합니다.",
  primaryLabel: "포트폴리오 PDF 다운로드",
  secondaryLabel: "진행 중인 사이드 프로젝트",
};

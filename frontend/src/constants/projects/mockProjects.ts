import type { Project } from "../../types/project";
import { Category } from "../../types/project";

export const PROJECTS: Project[] = [
  {
    id: 8,
    title: "Dev Portfolio",
    oneLine: "개인 포트폴리오 웹사이트",
    description:
      "프로필·프로젝트·스택·블로그·연락처로 구성된 개인 포트폴리오 서비스입니다. 프론트엔드 페이지 구성과 함께, 백엔드는 게시글/댓글/좋아요 중심의 REST API를 직접 설계해 기능을 구현했습니다.",
    category: [Category.FULLSTACK, Category.WEB],
    tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Spring Boot", "Java"],
    imageUrl: "/images/projects/portfolio.png",
    primaryLink: {
      label: "GitHub",
      icon: "code",
      url: "https://github.com/Hyeyeon-Ko/dev-portfolio",
    },
    secondaryLink: { label: "Details", icon: "info", url: "#" },
    hoverText: "개인 포트폴리오 서비스",
    accentColor: "accent",
    team: "1명",
    highlights: ["React 19 · Vite", "Spring Boot REST API", "블로그 CRUD·댓글·좋아요", "반응형 UI"],
  },

  {
    id: 7,
    title: "Saluscare-vitaportVIEW",
    oneLine: "KMI 수검자용 스마트 검진 레포트(결과지 조회/다운로드) 웹 서비스",
    description:
      "KMI SSO 기반 통합 로그인으로 검진 결과를 PC/모바일에서 조회하고, 법정 양식(PDF) 다운로드까지 제공하는 단독형 결과지 뷰(View) 서비스입니다. 종합/국가/특수 검진 흐름을 화면 구조와 UI 컴포넌트(판정, 참고치 툴팁, 탭/카드 내비게이션)로 일관되게 구성했으며, Oracle 연동(MyBatis)과 세션/인증(Spring Security, OAuth2, JWT)을 포함한 운영형 웹 서비스를 유지보수/개선했습니다.",
    category: [Category.FULLSTACK, Category.WEB, Category.MOBILE],
    tags: [
      "Java",
      "Spring Boot",
      "MyBatis",
      "Oracle",
      "Spring Security(OAuth2/JWT)",
      "Redis Session",
      "JSP/JSTL",
      "jQuery",
      "Chart.js",
      "Swiper",
    ],
    imageUrl: "/images/projects/vitaport-view.png",
    primaryLink: { label: "Case Study", icon: "description", url: "#" },
    secondaryLink: { label: "Details", icon: "info", url: "#" },
    hoverText:
      "검진 유형(종합/국가/특수)별 결과지 뷰 + PDF(법정 양식) 다운로드를 제공하는 스마트 검진 레포트 서비스",
    accentColor: "primary",
    team: "사내 운영 프로젝트 (유관부서 협업)",
    role: "결과지 화면/조회 흐름 개선 + Oracle 연동/권한·인증 흐름 유지보수",
    highlights: [
      "KMI SSO 기반 통합 로그인 + 외부 조회 URL 제공",
      "PC(prlt)·Mobile(mrlt) 결과지 뷰 및 특수건강진단 화면(specialCheckup) 운영",
      "판정/상세결과/참고치(툴팁)/PDF 다운로드로 사용자 여정 구성",
      "다국어 i18n(ko/en/ja/zh) 메시지 관리"
    ]
  },

  {
    id: 6,
    title: "SHIFT",
    oneLine: "스마트카트 기반 무인결제 앱",
    description:
      "매장 내 스마트카트를 활용해 무인결제 경험을 제공하는 모바일 앱 프로젝트입니다. 앱은 결제 흐름(상품 인식·장바구니·결제)을 중심으로 구성했고, 백엔드는 도메인 기준으로 REST API를 분리해 기능을 설계했습니다.",
    category: [Category.BACKEND, Category.MOBILE],
    tags: ["React Native", "TypeScript", "Spring Boot", "Java", "REST API"],
    imageUrl: "/images/projects/shift.png",
    primaryLink: {
      label: "GitHub-Frontend",
      icon: "code",
      url: "https://github.com/khu-martCart/frontend",
    },
    secondaryLink: {
      label: "GitHub-Backend",
      icon: "code",
      url: "https://github.com/khu-martCart/backend",
    },
    hoverText: "매장 내 스마트카트를 활용한 무인결제 앱 서비스",
    accentColor: "accent",
    team: "4명",
    highlights: [
      "무인결제 사용자 플로우 설계",
      "React Native 기반 모바일 앱 UI",
      "Spring Boot REST API 설계/구현",
      "도메인 기준 기능 분리",
    ],
  },

  {
    id: 5,
    title: "Post-post",
    oneLine: "일기 기록 및 공유 모바일 앱",
    description:
      "소셜 로그인 기반으로 일기 작성과 편지 공유 기능을 제공하는 모바일 앱입니다. OAuth 인증 흐름과 핵심 도메인(일기·댓글·알림·감정 분석) 기능을 중심으로 구현했습니다.",
    category: [Category.BACKEND, Category.MOBILE],
    tags: ["Spring Boot", "React Native", "MySQL", "OAuth", "Spring Security", "JPA"],
    imageUrl: "/images/projects/postpost.jpg",
    primaryLink: {
      label: "GitHub-Frontend",
      icon: "code",
      url: "https://github.com/24PostPost/FE-PostPost",
    },
    secondaryLink: {
      label: "GitHub-Backend",
      icon: "code",
      url: "https://github.com/24PostPost/BE-PostPost",
    },
    hoverText:
      "OAuth 소셜 로그인과 일기/공유 기능을 기반으로 한 소셜 미디어 서비스 + 댓글·알림·감정 분석",
    accentColor: "accent",
    period: "2024.01.14 ~ 2024.02.28",
    team: "Backend 1, Frontend 1, Design 1, 기획 2",
  },

  {
    id: 4,
    title: "KMI-MIS",
    oneLine: "총무 업무를 디지털화한 내부 관리 시스템",
    description:
      "총무 업무를 기안 기반으로 처리하고 진행 내역을 추적할 수 있도록 만든 내부 시스템입니다. 명함 신청, 법인서류, 인장 신청/등록, 문서 수발신, 토너 신청 등 업무별 화면을 구성했으며, 기본 사용자 화면과 관리자 화면을 분리해 권한별 기능을 제공했습니다.",
    category: [Category.FULLSTACK, Category.WEB],
    tags: ["Spring Boot", "React", "MariaDB", "REST API", "업무 자동화"],
    imageUrl: "/images/projects/kmi-mis.jpg",
    primaryLink: {
      label: "Github-Frontend",
      icon: "code",
      url: "https://github.com/Hyeyeon-Ko/mis-ui2",
    },
    secondaryLink: {
      label: "Github-Backend",
      icon: "code",
      url: "https://github.com/Hyeyeon-Ko/mis-api2",
    },
    hoverText: "기안/내역 조회 중심의 총무 업무 관리 시스템 + 업무 자동화",
    accentColor: "primary",
    period: "2024.06.24 ~ 2024.11.29",
    team: "2명",
  },

  {
    id: 3,
    title: "BBangting",
    oneLine: "유명 빵 타임딜 예약 웹 플랫폼",
    description:
      "타임딜 예약과 리뷰/알림 기능을 제공하는 웹 서비스입니다. 팀 프로젝트로 진행하며 백엔드 기능을 중심으로 API와 데이터 흐름을 구현했습니다.",
    category: [Category.BACKEND, Category.WEB],
    tags: ["Spring Boot", "React", "MySQL"],
    imageUrl: "/images/projects/bbangting.jpg",
    primaryLink: {
      label: "Github",
      icon: "code",
      url: "https://github.com/BBANGting/bbangting",
    },
    secondaryLink: { label: "Report", icon: "description", url: "#" },
    hoverText: "타임딜 예약·리뷰·알림 기능의 인기 빵 예약 웹 서비스",
    accentColor: "primary",
    team: "Backend 2, Frontend 1",
  },

  {
    id: 2,
    title: "Devbox",
    oneLine: "클라우드 기반 파일 업로드/다운로드 서비스",
    description:
      "팀 협업을 위한 파일 업로드/다운로드 및 폴더 구조 관리 기능을 제공하는 서비스입니다. UI 전 페이지와 파일/폴더 로직 일부를 맡아 사용자 흐름과 데이터 구조를 함께 정리했습니다.",
    category: [Category.FULLSTACK, Category.WEB],
    tags: ["Python", "Django", "HTML", "CSS", "MySQL", "AWS"],
    imageUrl: "/images/projects/devbox.jpg",
    primaryLink: {
      label: "GitHub",
      icon: "code",
      url: "https://github.com/Cloud-Computing-F/devbox",
    },
    secondaryLink: { label: "Report", icon: "description", url: "#" },
    hoverText: "팀 협업을 위한 클라우드 기반 파일 업로드/다운로드 서비스",
    accentColor: "accent",
    period: "2022.05.12 ~ 2022.06.10",
    team: "Backend 4, Frontend 1",
    role: "Frontend 전담 + Backend 파일/폴더 시스템",
  },

  {
    id: 1,
    title: "짝khu웅",
    oneLine: "코로나 시기 신입생을 위한 멘토-멘티 매칭 서비스",
    description:
      "멘토와 멘티가 매칭된 뒤 실시간 채팅으로 소통할 수 있도록 구성한 서비스입니다. Spring 기반 백엔드와 React Native 앱으로 핵심 기능(매칭·채팅·알림 흐름)을 구현했습니다.",
    category: [Category.BACKEND, Category.MOBILE],
    tags: ["Spring Boot", "React Native", "MySQL"],
    imageUrl: "/images/projects/jjakhung.png",
    primaryLink: {
      label: "GitHub",
      icon: "code",
      url: "https://github.com/SuminSSon/hacker_project",
    },
    secondaryLink: { label: "Details", icon: "info", url: "#" },
    hoverText:
      "멘토-멘티 매칭과 실시간 채팅을 중심으로 한 iOS/Android 동시 지원 앱 서비스",
    accentColor: "primary",
    team: "Backend 3, Frontend 2",
    award: "장려상 (2021 교내 동아리 대항전)",
    highlights: ["실시간 채팅", "멘토-멘티 매칭", "크로스 플랫폼(React Native)"],
  },
];

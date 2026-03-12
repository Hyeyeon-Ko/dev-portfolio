export type SocialLinkItem = {
    label: "GitHub" | "Blog" | "LinkedIn" | "Email";
    href: string;
    enabled?: boolean;
  };
  
  export type ImpactItem = {
    value: string;
    subtitle?: string;
    title: string;
    description: string;
    tone?: "primary" | "accent" | "dark";
  };
  
  export type ExperienceItem = {
    company: string;
    period: string;
    role: string;
    type?: string;
    techStack?: string[];
    descriptions: string[];
  };
  
  export type EducationItem = {
    period: string;
    school: string;
    major: string;
  };
  
  export type AwardItem = {
    title: string;
    issuer: string;
    year: string;
    icon: string; // material-symbols-outlined name
    description?: string;
  };
  
  export const PROFILE = {
    name: "Ko Hyeyeon",
    roleTitle: "Full-stack Engineer",
    tagline:
      "업무를 더 빠르고 정확하게 만드는 구조를 고민하고, 꾸준히 개선하며 성장하는 개발자입니다.",
    profileImage: {
      src: "https://picsum.photos/seed/hyeyeon/600/600",
      alt: "KO HYEYEON Profile",
    },
    links: [
      { label: "GitHub", href: "https://github.com/Hyeyeon-Ko", enabled: true },
      { label: "Blog", href: "https://hyeyeon-ii.tistory.com/", enabled: true },
      { label: "LinkedIn", href: "#", enabled: false },
    ] as SocialLinkItem[],
  };
  
  export const KEY_IMPACTS: ImpactItem[] = [
    {
      value: "1mo → 1wk",
      subtitle: "리드타임 단축",
      title: "발주 프로세스 완전 자동화",
      description:
        "총무팀 명함·문서·자산 신청부터 발주 완료까지 웹 일원화. 자동 엑셀 생성 및 발주사 이메일 자동 발송으로 처리 기간 약 1개월 → 1주일 이내로 단축.",
      tone: "primary",
    },
    {
      value: "5건",
      subtitle: "고도화 완료",
      title: "검진 결과지 서비스 기능 확장",
      description:
        "단일·특수검진 추가, 이미지·다국어 결과지 제공, 마이페이지 신규 구축 등 6개월간 vitaportVIEW 핵심 기능 5건 메인 개발.",
      tone: "accent",
    },
    {
      value: "E2E",
      subtitle: "Full-stack",
      title: "기획부터 배포까지 전담",
      description:
        "이 포트폴리오 사이트를 React + Spring Boot + PostgreSQL로 직접 설계·개발·배포. 화면·API·DB·인프라(Vercel + Railway)까지 혼자 담당.",
      tone: "dark",
    },
  ];
  
  export const EXPERIENCES: ExperienceItem[] = [
    {
      company: "SALUSCARE",
      period: "2025.02.03 — Present",
      role: "Full-stack Engineer",
      type: "Full-time",
      techStack: ["Java", "Spring", "React", "Oracle"],
      descriptions: [
        "KMI 수검자 PC·모바일 검진 결과지 서비스(vitaportVIEW) 개발 및 운영 고도화 담당",
        "단일검진·특수검진 추가, 이미지 결과지, 다국어 결과지, 마이페이지 신규 구축 등 5건 고도화 메인 개발",
        "현재 건강성적표 외부결과지 신규 개발 진행 중 — 통계지수 기반 상세 결과지 제공",
      ],
    },
    {
      company: "KOREA MEDICAL INSTITUTE (KMI)",
      period: "2024.06.25 — 2024.12.31",
      role: "Full-stack Engineer",
      type: "Contract",
      techStack: ["Java", "Spring", "React", "Oracle", "MariaDB", "SVN", "XPlatform"],
      descriptions: [
        "총무팀 명함·문서수발신·자산관리 신청·승인·발주·공지 전 과정 웹 전환 — 수기 기안 프로세스 완전 디지털화",
        "발주 자동화: 승인 완료 내역 자동 엑셀 생성 및 발주사 이메일 자동 발송 구현",
        "업무 처리 리드타임 약 1개월 → 1주일 이내로 단축",
      ],
    },
  ];
  
  export const EDUCATION: EducationItem[] = [
    {
      period: "2020.03.02 — 2025.02.18",
      school: "KYUNG HEE UNIVERSITY",
      major: "B.S. in Computer Engineering",
    },
  ];
  
  export const AWARDS_CERTS: AwardItem[] = [
    {
      title: "SQLD",
      issuer: "KOREA DATA AGENCY",
      year: "2024.12.13",
      icon: "verified",
      description:
        "실무에서 DB 구조·쿼리 이해의 한계를 느껴 이론을 보강했고, SQLD 취득으로 기반을 탄탄히 다졌습니다.",
    },
    // {
    //   title: "OPIC IM1",
    //   issuer: "ACTFL",
    //   year: "2026.02.25",
    //   icon: "translate",
    //   description: "IM1 등급 취득.",
    // },
  ];
  
  export const PROFILE_CTA = {
    title: "함께 새로운 가치를 만들 준비가 되셨나요?",
    description: "언제든 편하게 연락주세요.",
    email: "khy33355@gmail.com",
  };
  
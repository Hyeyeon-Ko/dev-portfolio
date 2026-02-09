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
    name: "KO HYEYEON",
    roleTitle: "Full-stack Engineer",
    tagline:
      "업무를 더 빠르고 정확하게 만드는 구조를 고민하고, 꾸준히 개선하며 성장하는 개발자입니다.",
    profileImage: {
      // 나중에 네 사진 넣을 거니까 일단 placeholder
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
      value: "2w → 3d",
      subtitle: "리드타임 단축",
      title: "수기 기안 프로세스 웹 전환",
      description:
        "총무팀 수기 작성·기안·보관 흐름을 웹에서 일원화하고 내역 조회 및 엑셀 다운로드까지 제공했습니다.",
      tone: "primary",
    },
    {
      value: "5h/w",
      subtitle: "주간 절감",
      title: "업무 자동화로 운영 효율 개선",
      description:
        "반복 업무를 기능화해 수기 작성 부담과 파일 보관 부담을 줄이고, 운영 처리 시간을 안정화했습니다.",
      tone: "accent",
    },
    {
      value: "E2E",
      subtitle: "Full-stack",
      title: "신규 서비스 개발 및 고도화",
      description:
        "Spring + React 기반으로 화면/API/DB 흐름을 설계하고, 운영 고도화 및 성능 개선까지 이어갈 수 있습니다.",
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
        "헬스케어 도메인 서비스 개발 및 운영 고도화",
        "업무 프로세스 개선을 위한 기능 설계/개발(화면·API·DB)",
        "운영 안정화 및 성능 개선(지표는 추후 업데이트 예정)",
      ],
    },
    {
      company: "KOREA MEDICAL INSTITUTE (KMI)",
      period: "2024.06.25 — 2024.12.31",
      role: "Full-stack Engineer",
      type: "Contract",
      techStack: ["Java", "Spring", "React", "Oracle", "MariaDB", "SVN", "XPlatform"],
      descriptions: [
        "총무팀 수기 기안 프로세스 웹 전환(내역 정리/엑셀 다운로드 포함)",
        "업무 처리 리드타임 단축 및 운영 효율 개선",
        "기능 상세/성과 지표는 추후 업데이트 예정",
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
    {
      title: "OPIC IH",
      issuer: "ACTFL",
      year: "2025.01.01",
      icon: "translate",
      description: "IH 등급 취득(LinkedIn/이력서 업데이트 예정).",
    },
  ];
  
  export const PROFILE_CTA = {
    title: "함께 새로운 가치를 만들 준비가 되셨나요?",
    description: "언제든 편하게 커피챗 혹은 협업 제안을 보내주세요.",
    email: "khy33355@gmail.com",
  };
  
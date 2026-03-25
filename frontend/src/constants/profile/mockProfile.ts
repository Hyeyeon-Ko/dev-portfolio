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
  schoolKo?: string;
  major: string;
  majorKo?: string;
};

export type ActivityItem = {
  name: string;
  period: string;
  role: string;
  descriptions: string[];
};

export type AwardItem = {
  title: string;
  issuer: string;
  year: string;
  icon: string;
  description?: string;
};

export const PROFILE = {
  name: "Ko Hyeyeon",
  roleTitle: "Backend Engineer",
  tagline:
    "업무를 더 빠르고 정확하게 만드는 구조를 고민하고, 꾸준히 개선하며 성장하는 개발자입니다.",
  profileImage: {
    src: "/images/projects/profile.jpg",
    alt: "KO HYEYEON Profile",
  },
  links: [
    { label: "GitHub", href: "https://github.com/Hyeyeon-Ko", enabled: true },
    { label: "Blog", href: "https://hyeyeon-ii.tistory.com/", enabled: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/hyeyeon-ko/", enabled: true },
  ] as SocialLinkItem[],
};

export const KEY_IMPACTS: ImpactItem[] = [
  {
    value: "1mo → 1wk",
    subtitle: "리드타임 단축",
    title: "총무팀 프로세스 완전 자동화",
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
      "이 포트폴리오 사이트를 React + Spring Boot + PostgreSQL로 직접 설계·개발. 화면·API·DB를 혼자 담당하고, 배포 환경(Vercel + Railway)은 AI 도구와 협업하여 구성.",
    tone: "dark",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "SALUSCARE",
    period: "2025.02 — 재직 중",
    role: "Fullstack Engineer",
    type: "정규직",
    techStack: ["Java", "Spring Boot", "React", "Oracle", "MyBatis"],
    descriptions: [
      "단일검진·특수검진·이미지 결과지·다국어 결과지·마이페이지 등 5건 고도화 메인 개발",
      "JSP·MyBatis 기반 레거시 서비스를 React·JPA 기반으로 점진적 전환하며 변경 영향 범위 축소",
      "배포 직후 발생한 결과지 조회 장애를 로그와 사용자 시점 재현 테스트로 원인 특정 및 수정 배포",
      "권한 유형별 체크리스트를 배포 전 검증 기준으로 도입해 동일 유형 오류 재발 방지",
    ],
  },
  {
    company: "KOREA MEDICAL INSTITUTE (KMI)",
    period: "2024.06 — 2024.12",
    role: "Fullstack Engineer",
    type: "현장실습 → 계약직",
    techStack: ["Java", "Spring", "Oracle", "MariaDB", "MyBatis", "SVN", "XPlatform"],
    descriptions: [
      "총무 업무의 명함 신청·문서수발신 프로세스를 웹 시스템으로 일원화하여 수기·분산 처리 업무를 디지털화",
      "기안·승인 단계를 상태값 기반으로 세분화하고, 외부 API 연동으로 결재선을 동적 구성·정규화",
      "SMTP 기반 이메일 발송까지 신청→승인→발주 흐름을 하나의 일관된 흐름으로 연결",
      "업무 처리 리드타임 한 달 → 1주일 이내로 단축에 기여",
    ],
  },
];

export const SPECIALTY = {
  main: "Backend Development",
  mainDesc:
    "Spring Boot 기반 REST API 설계·구현이 주 전공입니다. JPA/MyBatis로 데이터 처리를 안정적으로 다루고, 실무에서 업무 자동화·검진 결과지 서비스 등 복잡한 비즈니스 로직을 담당해왔습니다.",
  mainSkills: ["Spring Boot", "Java", "JPA", "MyBatis", "Oracle", "PostgreSQL", "REST API"],
  sub: "Frontend & Deployment 경험 보유",
  subDesc:
    "React/TypeScript 기반 프론트엔드를 직접 구현하고, Vercel + Railway로 배포까지 담당한 경험이 있습니다. 화면부터 API·DB·인프라까지 혼자 처리할 수 있는 실행력을 갖추고 있습니다.",
  subSkills: ["React", "TypeScript", "Tailwind CSS", "Vercel", "Railway"],
};

export const EDUCATION: EducationItem[] = [
  {
    period: "2020.03 — 2025.02",
    school: "KYUNG HEE UNIVERSITY",
    schoolKo: "경희대학교",
    major: "B.S. in Computer Engineering",
    majorKo: "컴퓨터공학과",
  },
];

export const ACTIVITIES: ActivityItem[] = [
  {
    name: "해커 과동아리",
    period: "2020.03 — 2025.02",
    role: "멤버 → 멘토",
    descriptions: [
      "과동아리 대항전 참가 — Spring 기반 멘토-멘티 앱 개발 및 실시간 채팅 API 구현",
      "스터디 참여 후 후배 대상 학습 피드백 및 멘토링 제공",
    ],
  },
  {
    name: "컴퓨터공학부 학생회",
    period: "2021.03 — 2022.12",
    role: "팀원 → 총무부 팀장",
    descriptions: [
      "OT/MT 기획 및 운영, 졸업자 초청 강의 등 학부 행사 진행",
      "총무부 팀장으로 연간 예산 수립·집행·정산 담당",
    ],
  },
];

export const AWARDS: AwardItem[] = [
  {
    title: "교내 동아리 대항전 장려상",
    issuer: "KYUNG HEE UNIVERSITY",
    year: "2021.08",
    icon: "military_tech",
    description:
      "신입생 대상 멘토-멘티 앱 개발. Spring 기반 실시간 채팅 API를 구현해 장려상 수상.",
  },
  {
    title: "KHreative StartUP 창업아이디어 공모전 최우수상",
    issuer: "KYUNG HEE UNIVERSITY",
    year: "2024.08",
    icon: "emoji_events",
    description:
      "SHIFT 무인결제 아이디어를 공동 기획하고 백엔드를 담당. 기술·보안·비용 측면 해결안으로 최우수상 수상.",
  },
];

export const CERTS: AwardItem[] = [
  {
    title: "SQLD",
    issuer: "KOREA DATA AGENCY",
    year: "2024.12",
    icon: "verified",
    description:
      "실무에서 DB 구조·쿼리 이해의 한계를 느껴 이론을 보강했고, SQLD 취득으로 기반을 탄탄히 다졌습니다.",
  },
  {
    title: "Toeic Speaking AL",
    issuer: "ETS",
    year: "2026.03",
    icon: "translate",
    description: "Toeic Speaking AL등급을 취득했습니다.",
  },
];

export const PROFILE_CTA = {
  title: "함께 새로운 가치를 만들 준비가 되셨나요?",
  description: "언제든 편하게 연락주세요.",
  email: "khy33355@gmail.com",
};

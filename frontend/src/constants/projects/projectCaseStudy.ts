export type CaseStudyItemTone =
  | "indigo"
  | "sky"
  | "cyan"
  | "emerald"
  | "amber"
  | "rose"
  | "slate";

export type CaseStudyItem = {
  title: string;
  description: string;
  tone?: CaseStudyItemTone;
};

export type ProjectCaseStudy = {
  overview?: string;
  problem?: CaseStudyItem[];
  process?: CaseStudyItem[];
  impact?: CaseStudyItem[];
};

export const PROJECT_CASE_STUDIES: Record<number, ProjectCaseStudy> = {
  8: {
    overview:
      "프로필·프로젝트·스택·블로그·연락처를 한 곳에서 관리하고 보여주기 위해 만든 개인 포트폴리오입니다. 프론트엔드 화면 구성뿐 아니라 블로그 기능을 위한 REST API를 직접 설계/구현했습니다.",
    problem: [
      {
        title: "정보가 흩어진 포트폴리오",
        description:
          "프로젝트/경험/스택/글이 서로 다른 채널에 흩어져 있어, 한 번에 나를 설명하기 어려웠습니다.",
        tone: "rose",
      },
      {
        title: "콘텐츠(글) 운영의 어려움",
        description:
          "단순 소개 페이지를 넘어, 글을 지속적으로 발행하고 반응(댓글/좋아요)을 확인할 수 있는 구조가 필요했습니다.",
        tone: "amber",
      },
    ],
    process: [
      {
        title: "페이지 IA + 컴포넌트화",
        description:
          "Home/Projects/Stack/Blog/Contact로 흐름을 잡고, 재사용 가능한 카드/섹션 단위 컴포넌트로 분리했습니다.",
        tone: "indigo",
      },
      {
        title: "블로그 REST API 설계",
        description:
          "게시글/댓글/좋아요를 중심으로 리소스를 나누고, 목록/상세/작성/수정/삭제 흐름을 일관된 규칙으로 설계했습니다.",
        tone: "sky",
      },
    ],
    impact: [
      {
        title: "프론트·백엔드 책임 분리",
        description:
          "UI는 화면 경험에 집중하고, 데이터/권한/검증은 API에서 책임지도록 경계를 정리해 유지보수성을 높였습니다.",
        tone: "emerald",
      },
      {
        title: "확장 가능한 콘텐츠 구조",
        description:
          "프로젝트 상세/블로그 글이 계속 늘어나도 섹션 단위로 확장할 수 있도록 상세 페이지 구조를 케이스 스터디 형태로 정리했습니다.",
        tone: "slate",
      },
    ],
  },

  7: {
    problem: [
      {
        title: "PC/모바일 결과지 경험의 일관성",
        description:
          "검진 결과는 다양한 기기에서 확인되는데, 화면 구조/탭/카드 내비게이션이 일관되지 않으면 사용자가 원하는 정보에 빨리 도달하기 어렵습니다.",
        tone: "rose",
      },
      {
        title: "인증/세션/외부 조회 흐름 복잡도",
        description:
          "SSO 기반 로그인과 외부 조회 URL, 세션 관리가 얽혀 있어 장애/이슈 대응과 유지보수가 어려웠습니다.",
        tone: "amber",
      },
    ],
    process: [
      {
        title: "결과지 정보 구조 재정의",
        description:
          "종합/국가/특수 검진의 공통 요소를 묶고, 판정/상세결과/참고치/다운로드로 사용자 여정을 정리했습니다.",
        tone: "indigo",
      },
      {
        title: "탭/카드 내비게이션 컴포넌트화",
        description:
          "결과지 유형별 화면에서도 동일한 UI 패턴으로 탐색할 수 있도록 컴포넌트로 표준화했습니다.",
        tone: "sky",
      },
    ],
    impact: [
      {
        title: "운영 환경 유지보수",
        description:
          "Oracle(MyBatis) 연동, 권한/인증(Spring Security, OAuth2/JWT), Redis Session을 포함한 운영형 서비스 개선을 수행했습니다.",
        tone: "emerald",
      },
      {
        title: "다국어 메시지 관리",
        description:
          "ko/en/ja/zh 메시지를 체계적으로 관리해 화면 품질과 운영 효율을 개선했습니다.",
        tone: "slate",
      },
    ],
  },

  6: {
    problem: [
      {
        title: "무인결제 사용자 플로우 설계",
        description:
          "상품 인식 → 장바구니 → 결제 흐름이 끊기면 바로 이탈로 이어져, 사용자 여정 설계가 핵심이었습니다.",
        tone: "rose",
      },
      {
        title: "도메인 단위 API 정리 필요",
        description:
          "기능이 늘어날수록 API 경계가 흐려지기 때문에, 도메인 기준으로 책임을 분리해야 했습니다.",
        tone: "amber",
      },
    ],
    process: [
      {
        title: "모바일 UI 중심 설계",
        description:
          "결제 흐름을 중심으로 핵심 화면을 구성하고, 상태 변화에 따른 인터랙션을 정리했습니다.",
        tone: "indigo",
      },
      {
        title: "REST API 도메인 분리",
        description:
          "상품/카트/결제 도메인 기준으로 API를 구분해 확장/테스트를 용이하게 만들었습니다.",
        tone: "sky",
      },
    ],
    impact: [
      {
        title: "일관된 결제 경험",
        description:
          "핵심 사용자 플로우를 기준으로 UI와 API 구조를 정리해, 기능 추가 시에도 흐름이 무너지지 않도록 했습니다.",
        tone: "emerald",
      },
    ],
  },

  5: {
    problem: [
      {
        title: "소셜 로그인 기반 사용자 온보딩",
        description:
          "가입/로그인 장벽을 낮추면서도, 서비스 권한과 사용자 식별을 안전하게 유지해야 했습니다.",
        tone: "rose",
      },
      {
        title: "도메인(일기/댓글/알림) 확장",
        description:
          "핵심 기능이 늘어날수록 도메인 경계를 명확히 하지 않으면 유지보수가 어려워집니다.",
        tone: "amber",
      },
    ],
    process: [
      {
        title: "OAuth 인증 흐름 정리",
        description:
          "인가 코드 교환부터 토큰/세션 처리까지 흐름을 정리해 안정적으로 로그인되도록 구현했습니다.",
        tone: "indigo",
      },
    ],
    impact: [
      {
        title: "핵심 도메인 기능 구현",
        description:
          "일기·댓글·알림·감정 분석 기능을 중심으로 운영 가능한 백엔드 구조를 구현했습니다.",
        tone: "emerald",
      },
    ],
  },

  4: {
    problem: [
      {
        title: "총무 업무의 수기/분산 처리",
        description:
          "업무가 이메일/메신저/엑셀로 흩어져 진행 내역 추적이 어렵고, 누락이 발생하기 쉬웠습니다.",
        tone: "rose",
      },
      {
        title: "권한에 따른 화면/기능 분리",
        description:
          "일반 사용자와 관리자가 동일 화면을 쓰면 권한/기능 통제가 복잡해집니다.",
        tone: "amber",
      },
    ],
    process: [
      {
        title: "업무별 화면 구조화",
        description:
          "명함/서류/인장/문서/토너 등 업무를 화면 단위로 분리하고, 기안 기반 흐름을 표준화했습니다.",
        tone: "indigo",
      },
    ],
    impact: [
      {
        title: "추적 가능한 진행 내역",
        description:
          "신청 → 처리 → 완료까지 상태를 관리해 업무가 눈에 보이도록 만들었습니다.",
        tone: "emerald",
      },
    ],
  },

  3: {
    problem: [
      {
        title: "타임딜 예약 경쟁",
        description:
          "짧은 시간 내 예약/결제 흐름이 몰리므로, 안정적인 예약 처리와 사용자 경험 설계가 중요했습니다.",
        tone: "rose",
      },
      {
        title: "리뷰/알림 확장",
        description:
          "예약 이후의 후속 경험(리뷰/알림)을 잘 설계해야 서비스 사용성이 올라갑니다.",
        tone: "amber",
      },
    ],
    process: [
      {
        title: "핵심 도메인 중심 구현",
        description:
          "예약/리뷰/알림의 데이터 흐름을 중심으로 API를 설계하고 백엔드 기능을 구현했습니다.",
        tone: "indigo",
      },
    ],
    impact: [
      {
        title: "백엔드 기능 구현",
        description:
          "팀 프로젝트에서 백엔드를 중심으로 API와 데이터 흐름을 구현했습니다.",
        tone: "emerald",
      },
    ],
  },

  2: {
    problem: [
      {
        title: "파일/폴더 협업 구조",
        description:
          "업로드/다운로드뿐 아니라 폴더 구조 관리가 있어야 협업이 가능합니다.",
        tone: "rose",
      },
      {
        title: "UI 전 페이지의 일관성",
        description:
          "화면이 많아질수록 컴포넌트 규칙이 없으면 사용자 경험이 들쭉날쭉해집니다.",
        tone: "amber",
      },
    ],
    process: [
      {
        title: "프론트 전담 구현",
        description:
          "전 페이지 UI를 구현하고 사용자 흐름과 데이터 구조를 함께 정리했습니다.",
        tone: "indigo",
      },
    ],
    impact: [
      {
        title: "사용자 흐름 개선",
        description:
          "파일/폴더 로직 일부를 맡아 UX 관점에서 동작을 정리해 사용자 경험을 개선했습니다.",
        tone: "emerald",
      },
    ],
  },

  1: {
    problem: [
      {
        title: "매칭 이후 실시간 소통",
        description:
          "멘토-멘티 매칭이 되더라도 실시간 채팅 경험이 없으면 서비스 가치가 떨어집니다.",
        tone: "rose",
      },
      {
        title: "크로스 플랫폼 지원",
        description:
          "iOS/Android 동시 지원을 위해 기술 선택과 공통 기능 구현이 필요했습니다.",
        tone: "amber",
      },
    ],
    process: [
      {
        title: "핵심 기능 구현",
        description:
          "매칭·채팅·알림 흐름을 중심으로 Spring 기반 백엔드와 React Native 앱 기능을 구현했습니다.",
        tone: "indigo",
      },
    ],
    impact: [
      {
        title: "실사용 시나리오 중심 완성",
        description:
          "실시간 채팅을 포함한 사용자 플로우가 동작하도록 기능을 연결해 완성도를 높였습니다.",
        tone: "emerald",
      },
    ],
  },
};

import type { Post, BlogCategory, PostDetail, Author, RelatedPost } from "../../types/blog";

export const BLOG_CATEGORIES: { label: string; value: BlogCategory }[] = [
  { label: "All", value: "All" },
  { label: "TIL", value: "TIL" },
  { label: "Retrospective", value: "Retrospective" },
  { label: "Thinking", value: "Thinking" },
];

export const BLOG_POSTS: Post[] = [
  {
    id: 101,
    category: "TIL",
    date: "2026.01.21",
    title: "Spring 예외 처리 전략: ControllerAdvice로 '일관된 에러 응답' 만들기",
    excerpt:
      "에러 응답 형태를 통일하면서도, 검증/비즈니스/시스템 예외를 구분해 프론트와 운영 모두에서 디버깅이 쉬워지도록 정리했습니다.",
    readTime: "7 min read",
    color: "primary",
  },
  {
    id: 102,
    category: "TIL",
    date: "2026.01.07",
    title: "JPA 성능 튜닝 1: N+1 문제를 눈으로 확인하고 해결한 과정",
    excerpt:
      "N+1이 발생하는 지점을 로그/쿼리로 확인한 뒤 Fetch Join, EntityGraph, Batch Size로 해결하는 기준을 정리했습니다.",
    readTime: "10 min read",
    color: "accent",
  },
  {
    id: 103,
    category: "TIL",
    date: "2025.12.18",
    title: "Pagination 설계: offset 방식의 한계와 cursor 기반 전환 기준",
    excerpt:
      "페이지네이션을 '그냥 붙이는 기능'이 아니라 트래픽/정렬/삭제/중복 문제까지 고려해서 설계하는 방법을 기록했습니다.",
    readTime: "9 min read",
    color: "primary",
  },
  {
    id: 104,
    category: "TIL",
    date: "2025.11.28",
    title: "Spring Security로 Admin API 분리하기: 키 기반 필터부터 권한 모델까지",
    excerpt:
      "공개 API와 관리자 API를 분리하고, 인증/인가 경계를 명확히 만들어 운영 리스크를 줄인 구조를 정리했습니다.",
    readTime: "11 min read",
    color: "accent",
  },
  {
    id: 105,
    category: "TIL",
    date: "2025.10.30",
    title: "Oracle TIMESTAMP 검색/인덱스: 날짜 조건이 느려지는 이유와 개선",
    excerpt:
      "TIMESTAMP 컬럼 조건에서 함수 사용이 인덱스를 망가뜨리는 케이스를 정리하고, 안전한 조건 작성 패턴을 기록했습니다.",
    readTime: "8 min read",
    color: "primary",
  },
  {
    id: 106,
    category: "TIL",
    date: "2025.10.02",
    title: "트랜잭션 경계 잡기: @Transactional을 '습관'이 아니라 '설계'로 쓰는 법",
    excerpt:
      "읽기 전용/쓰기 트랜잭션 분리, 전파 옵션, 서비스 계층 책임을 기준으로 트랜잭션 경계를 정리했습니다.",
    readTime: "12 min read",
    color: "primary",
  },
  {
    id: 107,
    category: "Retrospective",
    date: "2025.09.12",
    title: "회고: '작게 배포하고 빨리 학습하기'를 팀에서 통하게 만든 방법",
    excerpt:
      "큰 기능을 한 번에 올리다가 실패했던 경험을 바탕으로, 기능 플래그/점진적 배포/롤백 기준을 정리했습니다.",
    readTime: "13 min read",
    color: "accent",
  },
  {
    id: 108,
    category: "TIL",
    date: "2025.08.20",
    title: "로그 설계: '기록'이 아니라 '진단'이 되게 만드는 구조",
    excerpt:
      "요청 추적(TraceId), 에러 원인 식별, 민감정보 마스킹을 포함해 운영에서 의미 있는 로그를 남기는 기준을 정리했습니다.",
    readTime: "9 min read",
    color: "primary",
  },
  {
    id: 109,
    category: "TIL",
    date: "2025.07.31",
    title: "API 응답 DTO 설계: 한 개 DTO에 list를 넣는 구조가 유리했던 이유",
    excerpt:
      "요청 구조가 커질 때 '리스트 파라미터를 어떻게 확장 가능하게 만들지' 고민한 결과를 정리했습니다.",
    readTime: "6 min read",
    color: "primary",
  },
  {
    id: 110,
    category: "TIL",
    date: "2025.06.18",
    title: "테스트 전략: 단위/통합 테스트를 '어디까지' 가져갈지 기준 세우기",
    excerpt:
      "Mocking 남발 vs 통합테스트 비용 사이에서, 서비스 단위 테스트와 Repository 통합 테스트의 역할을 분리했습니다.",
    readTime: "10 min read",
    color: "accent",
  },
  {
    id: 111,
    category: "Thinking",
    date: "2025.05.09",
    title: "좋은 백엔드 개발자의 기준은 '기능 구현 속도'만이 아니다",
    excerpt:
      "장애 대응, 확장성, 협업 비용을 줄이는 설계 능력이 결국 개발 속도를 올린다는 관점을 정리했습니다.",
    readTime: "7 min read",
    color: "primary",
  },
  {
    id: 112,
    category: "Retrospective",
    date: "2025.04.03",
    title: "회고: 코드 리뷰에서 '맞다/틀리다'보다 중요한 것",
    excerpt:
      "리뷰를 방어전이 아니라 품질 시스템으로 만들기 위해, 코멘트 템플릿과 합의 규칙을 도입한 경험을 기록했습니다.",
    readTime: "9 min read",
    color: "accent",
  },
  {
    id: 113,
    category: "TIL",
    date: "2025.03.14",
    title: "DB 스키마 변경: 무중단을 목표로 한 컬럼 추가/마이그레이션 패턴",
    excerpt:
      "스키마 변경을 배포와 분리하고, '호환 가능한 단계'로 나눠 안전하게 마이그레이션하는 방법을 정리했습니다.",
    readTime: "11 min read",
    color: "primary",
  },
];

export const BLOG_AUTHOR: Author = {
  name: "Hyeyeon Ko",
  title: "Backend Engineer (Spring / JPA)",
  bio: "기능을 만드는 것보다, 오래 가는 구조를 만드는 데 더 관심이 있습니다. 기록은 습관이고, 품질은 시스템이라고 믿습니다.",
  avatar: "https://picsum.photos/id/1005/200/200",
};

export const RELATED_POSTS: RelatedPost[] = [
  {
    category: "TIL",
    title: "JPA 성능 튜닝 1: N+1 문제를 눈으로 확인하고 해결한 과정",
    date: "2026.01.07",
    type: "TIL",
  },
  {
    category: "TIL",
    title: "트랜잭션 경계 잡기: @Transactional을 '습관'이 아니라 '설계'로 쓰는 법",
    date: "2025.10.02",
    type: "TIL",
  },
  {
    category: "TIL",
    title: "로그 설계: '기록'이 아니라 '진단'이 되게 만드는 구조",
    date: "2025.08.20",
    type: "TIL",
  },
];

/** 상세 페이지용 mock (id별로 나중에 API 연동 시 교체) */
export function getPostDetailById(id: number): PostDetail | undefined {
  const post = BLOG_POSTS.find((p) => p.id === id);
  if (!post) return undefined;

  const baseTags = ["Spring", "JPA", "API Design", "Testing", "Performance", "Security", "DB", "Operations"];

  const contentTemplate = [
    "## 문제 상황",
    "- 무엇이 문제였는지, 증상은 무엇이었는지",
    "",
    "## 원인 분석",
    "- 로그/쿼리/설정/코드 흐름 기준으로 원인을 좁혀가는 과정",
    "",
    "## 해결 방법",
    "- 적용한 변경 사항과 이유",
    "",
    "## 배운 점",
    "- 다음엔 어떻게 더 빨리/안전하게 할지",
  ].join("\n");

  return {
    id: post.id,
    category: post.category,
    date: post.date,
    readTime: post.readTime,
    title: post.title,
    subtitle:
      post.category === "TIL"
        ? "실무에서 바로 재사용 가능한 기준과 체크리스트를 중심으로 정리했습니다."
        : post.category === "Retrospective"
          ? "실패/개선 포인트를 숨기지 않고, 다음 행동으로 연결하는 회고를 지향합니다."
          : "개발을 더 오래, 더 안정적으로 하기 위한 생각을 기록합니다.",
    content: contentTemplate,
    author: BLOG_AUTHOR,
    tags: baseTags,
    likeCount: 43,
    commentCount: 6,
    relatedPosts: RELATED_POSTS,
  };
}

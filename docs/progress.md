# Progress Log

## 2026-02-06

### Done
- Git 저장소 연결 및 초기 개발 흐름 확정(커밋 루틴 포함)
- Vite + React 프로젝트 로컬 구동 확인
- React Router 적용
  - BrowserRouter 설정
  - Routes/Route 구성
  - 없는 경로 접근 시 홈으로 리다이렉트 처리
- 공통 레이아웃 구성
  - MainLayout(Outlet 기반) 생성
  - Header / Footer 컴포넌트 생성 및 적용
  - Header 네비게이션을 NavLink로 변경(Active 스타일 적용)
- Tailwind CSS 적용
  - Tailwind/PostCSS 설정 완료(Windows 환경 이슈 해결 포함)
  - 공통 유틸 클래스(card-shadow, gradient-text 등) 추가
  - icons.ts JSX 오류 해결(icons.tsx로 변경)
- Home 메인 화면 섹션 구성(더미 데이터 기반)
  - Hero / LiveActivity / ProjectsSection / BlogSection / ContactCTA 컴포넌트 생성
  - constants(mockProjects/mockBlog/mockActivity/icons) 구성
- Backend 초기 세팅
  - Spring Boot 프로젝트 생성 및 로컬 실행 확인
  - health check 엔드포인트 기본 구성(예: `/api/health`)
  - CORS 기본 정책/로컬 개발 환경에서 FE 연동 준비(필요 시)

### Notes / Issues
- Tailwind v4 관련 설정 충돌로 init/postcss 오류가 있었고, v3 기반으로 안정화하여 해결함.
- 텍스트 줄바꿈이 “연결하/며”처럼 쪼개지는 현상이 있어 break-keep 및 줄 구성 방식으로 개선함.

---

## 2026-02-09

### Done (Frontend)
- **Profile 페이지** 섹션/컴포넌트 구조 초안 구성
- Profile 디자인 토큰/폰트 적용 + Glass UI 유틸리티 적용
- **Projects 페이지** 추가
  - 프로젝트 리스트/카드형 UI 구성
  - mock 데이터 구성 및 타입 기반 컴포넌트 정리
- **Stack 페이지** 추가
  - 카테고리 구성 + 폴더 구조 정리(home/layout/constants 등)
- **Blog 페이지** 추가
  - 목록 페이지 기본 UI 구성(더미 데이터 기반)
- **Contact 페이지** 추가
  - 연락/CTA 영역 구성

### Notes / Issues
- 페이지 수가 빠르게 늘어나는 구간이라, 폴더 구조와 constants 정리가 같이 필요했음(리팩터링 포함)

---

## 2026-02-11

### Done (Backend)
- API 공통 응답 포맷 도입
  - 공통 response 구조 + Blog 관련 DTO 추가
- Blog 도메인 구축
  - Entity / Repository 추가
  - Service 구현(posts/comments/likes)
  - Controller 연결 및 엔드포인트 wire-up

### Notes / Issues
- FE 연동 전에 “CRUD/도메인”을 먼저 안정적으로 완성하는 단계로 정리됨

---

## 2026-02-12

### Done (Backend)
- **Public/Admin 엔드포인트 분리 및 정책 확정**
  - Public: PUBLISHED만 read-only
  - Admin: 전체 status 조회/검색/CRUD + AdminKey 기반 보호
- **예외/검증 응답 포맷 일원화**
  - GlobalExceptionHandler 정리
  - validation 포함 ApiResponse 형태 통일
- **안정성 보강**
  - 중복 like 요청 처리(서버 에러 방지)
- **개발/빌드 설정 정리**
  - backend config 업데이트
  - dev proxy 정리
  - application yaml ignore 처리

### Done (Frontend)
- **Home 라우팅/네비게이션 UX 개선**
  - Hero/Projects/CTA 라우트 연결
  - smooth scroll reset, active footer state 등 UX 보강
- **Blog 상세 페이지 추가** + TS build 이슈 수정
- **데이터/콘텐츠 정리**
  - Blog mock 데이터 갱신 및 Blog 페이지 정리
  - CTA 문구 업데이트 + mock profile 데이터 갱신
  - 프로젝트 데이터 추가(SHIFT, vitaportView) + 로컬 이미지 적용
  - 프로젝트 카테고리 다중 지원 + Dev Portfolio 카테고리 추가
- **UI 정리/리팩터링**
  - 프로젝트 카드의 placeholder secondary link 숨김 처리
  - Collaboration 항목 축소
  - Contact 설명 줄바꿈 렌더링 수정 + reply message 업데이트
- **스타일 수정**
  - 타이포/마진/스페이싱 조정
- “백엔드 API 연동 확인”용 코드 제거(불필요 체크 제거)

### Notes / Issues
- 스타일 커밋이 연속으로 들어가서(Style 2개), 다음부터는 “한 번에 묶어서” 커밋하면 히스토리가 더 깔끔해질 것 같음

---

## 2026-02-13 (Today)

### TODO (Priority)
1. **Docs 정리 마무리**
   - Progress Log 문서에 02-06~02-12까지 반영(현재 내용 기준 완료)
   - README에 “프로젝트 목적 / 주요 기능 / 실행 방법 / 폴더 구조” 최소 문단 추가
2. **Frontend 품질 점검**
   - `npm run build` / `npm run lint` 기준으로 경고/에러 정리
   - 이미지 경로(프로젝트 카드) 깨짐 없는지 확인
3. **API 연동 준비(다음 단계)**
   - FE에서 mock 데이터 ↔ API 전환 포인트 정리(예: Blog list/detail)
   - 환경변수/프록시 정책을 “dev / prod”로 나눌 기준 작성
4. **작은 UX/디자인 마감**
   - 폰트 크기/마진 조정이 “전체 페이지 기준”으로 일관한지 점검
   - Home 섹션 간 간격, 카드 hover/active 등 마감 체크

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

## 2026-02-08

### Plan (Priority)
1. Home 버튼/링크 연결 정리
   - Hero: “Projects 보기” → /projects 라우트로 연결
   - Hero: “Dev-Log 읽기” → /blog 또는 /blog/slug 형태로 임시 연결
   - ProjectsSection: “전체 프로젝트”, “Case Study”, “View App” 링크 동작 설계(일단 라우트/외부링크 placeholder라도 연결)

2. Pages 기본 화면 뼈대 만들기(라우트별)
   - /projects: 리스트 페이지 레이아웃(카드형) + 더미 데이터 재사용
   - /stack: 기술 스택 카테고리(Frontend/Backend/DevOps/Tools) + 배지 UI
   - /blog: 글 목록 카드 + “기록 전체 보기” 버튼 연결
   - /contact: 이메일/링크드인/깃허브/폼 중 하나 선택해 CTA 구성
   - /profile: 한눈에 보는 프로필(학력/경력/수상/프로젝트 하이라이트) 레이아웃 초안

3. 스타일/구조 정리(유지보수)
   - components/section 단위 네이밍 통일(ProjectsSection/BlogSection 등)
   - constants 구조 정리(타입 정의 추가하면 더 좋음)
   - index.css에 공통 클래스 문서화(어떤 컴포넌트에서 쓰는지 주석)

### Optional
- 모바일 헤더 메뉴(햄버거) 초안만 잡기(시간 되면)
- README에 로컬 실행 방법/배포 계획 간단히 추가

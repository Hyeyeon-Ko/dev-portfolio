# Dev Portfolio

백엔드 개발자 고혜연의 포트폴리오 웹사이트입니다.

## 기술 스택

| 영역 | 기술 |
|------|------|
| Frontend | React 19, TypeScript, Vite, Tailwind CSS |
| Backend | Spring Boot 4, Java 17, Spring Data JPA |
| DB | PostgreSQL |
| 배포 | Vercel (Frontend) / Railway (Backend) |
| 이메일 | EmailJS |

## 페이지

- **Home** — 소개 및 주요 섹션
- **Projects** — 프로젝트 목록 및 케이스 스터디
- **Blog** — 기술 블로그 (작성/조회)
- **Stack** — 기술 스택 소개
- **Profile** — 경력 및 학력
- **Contact** — 연락처 및 문의 폼

## 로컬 실행

### 사전 요구사항
- Node.js 20+
- Java 17
- PostgreSQL

### Frontend

```bash
cd frontend
cp .env.example .env   # EmailJS 키 입력
npm install
npm run dev            # http://localhost:5173
```

### Backend

```bash
cd backend
cp .env.example .env   # DB 정보, ADMIN_KEY 입력
./gradlew bootRun      # http://localhost:8080
```

### 환경 변수

**frontend/.env**
```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
VITE_API_BASE_URL=        # 비워두면 Vite proxy 사용 (개발 환경)
```

**backend/.env**
```
DB_URL=jdbc:postgresql://localhost:5432/dev_portfolio
DB_USERNAME=postgres
DB_PASSWORD=
ADMIN_KEY=
CORS_ORIGINS=http://localhost:5173
```

## 테스트

```bash
# Frontend
cd frontend && npm test

# Backend
cd backend && ./gradlew test
```

## 배포

- Frontend: Vercel — `frontend/` 디렉토리 루트로 설정, 환경 변수 등록
- Backend: Railway — `backend/` 디렉토리, 환경 변수 등록

## 관리자 기능

`/admin/login` 페이지에서 `ADMIN_KEY` 입력 후 로그인하면 블로그/프로젝트 작성·수정·삭제 기능이 활성화됩니다.

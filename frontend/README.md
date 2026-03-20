# Dev Portfolio — Frontend

React + TypeScript + Vite 기반 포트폴리오 프론트엔드입니다.

루트 README에서 전체 프로젝트 설명, 실행 방법, 배포 가이드를 확인하세요: [../README.md](../README.md)

## 개발 서버

```bash
cp .env.example .env   # 환경 변수 설정
npm install
npm run dev            # http://localhost:5173
```

## 스크립트

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm run preview` | 빌드 결과 미리보기 |
| `npm run lint` | ESLint 검사 |
| `npm test` | 단위 테스트 실행 |

## 환경 변수

| 변수 | 설명 |
|------|------|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS 서비스 ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS 템플릿 ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS 공개 키 |
| `VITE_API_BASE_URL` | API 베이스 URL (개발 시 비워두면 Vite proxy 사용) |

## 구조

```
src/
├── api/          API 호출 함수
├── components/   재사용 컴포넌트 (도메인별 분류)
├── constants/    상수 및 목 데이터
├── hooks/        커스텀 훅
├── layouts/      페이지 레이아웃
├── pages/        라우트 페이지
├── types/        TypeScript 타입 정의
└── utils/        유틸리티 함수
```

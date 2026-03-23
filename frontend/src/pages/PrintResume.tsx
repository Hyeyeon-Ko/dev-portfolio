import { useEffect } from "react";
import {
  PROFILE,
  EXPERIENCES,
  EDUCATION,
  AWARDS,
  CERTS,
  KEY_IMPACTS,
} from "../constants/profile/mockProfile";

const PRINT_SKILLS = [
  { category: "Backend",  items: ["Spring Boot", "Java", "JPA", "MyBatis", "Spring Security"] },
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
  { category: "Database", items: ["Oracle", "PostgreSQL", "MySQL", "MariaDB"] },
  { category: "Tools",    items: ["Git / GitHub / GitLab", "Jira", "Notion", "Confluence", "Grafana", "Postman"] },
];

// ── 경력 프로젝트 (Page 2, 상세) — 최신순 ────────────────────────
const CAREER_PROJECTS = [
  {
    title: "vitaportVIEW — KMI 검진 결과지 서비스",
    company: "SALUSCARE · 정규직",
    period: "2025.02 — 현재",
    role: "풀스택 개발 메인 담당",
    mainImage: "/images/projects/vitaport-view.png",
    subImages: ["/images/projects/vitaport-mypage-mobile.png", "/images/projects/vitaport-special-mobile.png"],
    subImagesMobile: true,
    tags: ["Java", "Spring Boot", "React", "Oracle", "MyBatis", "JSP", "Confluence", "Grafana"],
    highlights: [
      "단일검진·특수검진 추가, 이미지 결과지, 다국어(한/영/중/일) 결과지, 마이페이지 신규 구축 — 5건 고도화 메인 개발",
      "KMI 수검자 PC·모바일 검진 결과지 서비스 운영 및 기능 확장 담당",
      "운영 배포 후 20분간 사용자 문의 집중 → 원인 파악 후 테스트 케이스 대폭 보완 (권한·사용자 조건 시나리오 추가)",
      "KMI와의 외부 API 연동 다수 — 결과 조회, 외부 지류 결과지, 기준자료 업데이트 적재",
      "신규 앱 HELLO 오픈 과정에서 백엔드 일부 및 관리자 포털 백엔드 담당",
    ],
    metric: "5건 고도화 · 4개 언어 지원",
  },
  {
    title: "KMI 사내 업무 자동화 시스템 (KMI-MIS)",
    company: "KMI 한국의학연구소 · 현장실습 → 계약직",
    period: "2024.06 — 2024.12",
    role: "기획·설계·개발 전담 (2인 팀)",
    mainImage: "/images/projects/kmi-mis.jpg",
    subImages: ["/images/projects/kmi-mis-1.png"],
    subImagesMobile: false,
    tags: ["Java", "Spring Boot", "JPA", "Oracle", "MariaDB", "MyBatis", "React", "XPlatform"],
    highlights: [
      "명함 신청 프로세스 전체 구현 — 사용자 신청, 조직도 기반 기안 라인 설정, 승인 흐름, 발주 대기 상태 전환까지",
      "발주용 엑셀 자동 생성 + SMTP 기반 발주사 이메일 자동 발송 구현",
      "이메일·엑셀·종이 문서로 흩어진 총무 업무 프로세스를 웹 기반으로 일원화",
      "업무 처리 리드타임 약 1개월 → 1주일 이내로 단축",
      "신청~승인~발주~알림 전 과정 디지털화 (승인 완료 / 발주 완료 / 수령 알림)",
    ],
    metric: "리드타임 1개월 → 1주일",
  },
];

// ── 사이드 / 학교 프로젝트 (Page 3, 컴팩트 그리드) — 최신순 ──────
const SIDE_PROJECTS = [
  {
    title: "Hyeyeon Studio — 개인 포트폴리오",
    period: "2026.02 — 현재",
    image: "/images/projects/portfolio.png",
    hasMobile: false,
    role: "1인 풀스택",
    tags: ["React 19", "TypeScript", "Tailwind CSS", "Spring Boot", "PostgreSQL"],
    award: null,
    highlights: [
      "게시글 CRUD·댓글·좋아요·어드민 기능 포함한 운영형 블로그 시스템 구축",
      "배포 트러블슈팅 5건 직접 해결 (빌더·Gradle·CORS·환경변수 등)",
      "Claude Code와 협업하여 Vercel(프론트)·Railway(백엔드·DB) 배포 구성",
    ],
  },
  {
    title: "SHIFT — 스마트카트 무인결제",
    period: "2024.08",
    image: "/images/projects/shift.png",
    mobileImages: ["/images/projects/shift-mobile-1.png", "/images/projects/shift-mobile-2.png"],
    hasMobile: true,
    role: "백엔드 전담 (4인 팀)",
    tags: ["Spring Boot", "Java", "MySQL", "React Native"],
    award: "KHreative StartUP 창업아이디어 공모전 최우수상",
    highlights: [
      "백엔드 전부 담당 — 로그인·카드정보·결제 흐름 API 구현",
      "QR 카트 연결 → RFID 상품 인식 → 등록 카드 결제 → 이용 종료 흐름 설계",
      "결제 누락 방지 구조: 인증-카트-장바구니-결제가 하나의 흐름으로 닫히도록 설계",
    ],
  },
  {
    title: "Post Post — 감정 기록 공유 앱",
    period: "2024.01 — 2024.02",
    image: "/images/projects/postpost.jpg",
    hasMobile: false,
    role: "백엔드 전담 (Backend 1, Frontend 1, Design 1, 기획 2)",
    tags: ["Spring Boot", "Java", "JPA", "MySQL", "OAuth2"],
    award: null,
    highlights: [
      "구글·네이버 OAuth 소셜 로그인 + 사용자 온보딩 흐름 설계 (약관→닉네임→알림 설정)",
      "일기 CRUD, 공유 일기, 댓글, 알림, 감정 통계 등 핵심 도메인 전반 구현",
      "Spring Security + JPA 기반 인증·접근 제어 설계",
    ],
  },
  {
    title: "빵팅 — 인기 빵집 선착순 예약",
    period: "2023",
    image: "/images/projects/bbangting.jpg",
    mobileImages: ["/images/projects/bbangting-1.png", "/images/projects/bbangting-2.png"],
    hasMobile: true,
    role: "백엔드 담당 (Backend 2, Frontend 1)",
    tags: ["Spring Boot", "Java", "MySQL", "React"],
    award: null,
    highlights: [
      "주문·주문취소 핵심 담당 — 시간 조건·재고 조건을 순차 검증 후 주문 생성",
      "타임딜 오픈 전 예약 차단, 재고 소진 시 즉시 결제 불가 + 버튼 상태 전환 연동",
      "알림 3종 구현 (새 빵집 등록·팔로우 매장 새 빵팅·당일 빵팅 오픈)",
    ],
  },
  {
    title: "DevBox — 개발자용 드롭박스",
    period: "2022.05 — 2022.06",
    image: "/images/projects/devbox.jpg",
    hasMobile: false,
    role: "프론트엔드 전담 (Backend 4, Frontend 1)",
    tags: ["Python", "Django", "AWS S3", "JavaScript"],
    award: null,
    highlights: [
      "프론트엔드 전 페이지 UI 혼자 담당 (첫 프론트 경험)",
      "파일 탐색·업로드/다운로드·폴더 관리·공유 기능 UI 구현",
      "Django + AWS 기반 저장소 연동 흐름 일부 관여",
    ],
  },
  {
    title: "짝khu웅 — 멘토-멘티 매칭 앱",
    period: "2021.08",
    image: "/images/projects/jjakhung.png",
    hasMobile: false,
    role: "백엔드 담당 (Backend 3, Frontend 2)",
    tags: ["Spring", "Java", "MySQL", "Flutter"],
    award: "교내 동아리 대항전 장려상",
    highlights: [
      "실시간 채팅 기능 백엔드 핵심 담당",
      "멘토-멘티 매칭 → 채팅 → 알림 흐름 연결",
      "iOS/Android 동시 지원 앱",
    ],
  },
];

// ── 컴포넌트 ──────────────────────────────────────────────────────
export default function PrintResume() {
  useEffect(() => {
    document.title = "Ko Hyeyeon — Portfolio";
  }, []);

  return (
    <>
      <style>{`
        @page { size: A4; margin: 13mm 14mm 13mm 14mm; }
        * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        body { margin: 0; background: white; }
        @media print { .no-print { display: none !important; } }
      `}</style>

      {/* Print Button */}
      <div className="no-print fixed top-4 right-4 z-50">
        <button
          onClick={() => window.print()}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg hover:bg-indigo-700 transition-colors"
        >
          PDF 저장
        </button>
      </div>

      <div className="max-w-[794px] mx-auto bg-white text-slate-900 font-sans print:max-w-none print:mx-0 px-2 py-6 print:p-0">

        {/* ═══════════════════════════════════════════════ */}
        {/* PAGE 1 — 이력서                                */}
        {/* ═══════════════════════════════════════════════ */}

        {/* Header */}
        <header className="border-b-[3px] border-indigo-600 pb-4 mb-5">
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1 min-w-0">
              <h1 className="text-[28px] font-black text-slate-900 tracking-tight leading-none">
                Ko Hyeyeon
                <span className="text-base font-medium text-slate-400 ml-2">고혜연</span>
              </h1>
              <p className="text-indigo-600 font-semibold text-sm mt-1">{PROFILE.roleTitle}</p>
              <p className="text-slate-500 text-[11px] mt-1.5 leading-relaxed break-keep">
                {PROFILE.tagline}
              </p>
            </div>
            <div className="text-right text-[11px] text-slate-500 space-y-0.5 shrink-0 mt-1">
              <div>khy33355@gmail.com</div>
              <div>github.com/Hyeyeon-Ko</div>
              <div>linkedin.com/in/hyeyeon-ko</div>
              <div>dev-portfolio-iota-dun.vercel.app</div>
            </div>
          </div>
        </header>

        {/* Key Achievements */}
        <section className="mb-5">
          <h2 className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-2">
            Key Achievements
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {KEY_IMPACTS.map((item) => (
              <div key={item.title} className="border border-slate-200 rounded-lg p-3">
                <div className="text-xl font-black text-indigo-600 leading-none">{item.value}</div>
                <div className="text-[9px] text-slate-400 font-medium mt-0.5">{item.subtitle}</div>
                <div className="text-[11px] font-bold text-slate-800 mt-1.5 break-keep">{item.title}</div>
                <p className="text-[10px] text-slate-500 mt-1 leading-relaxed break-keep">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-5">
          <h2 className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-2 border-b border-slate-100 pb-1">
            Experience
          </h2>
          <div className="space-y-3.5">
            {EXPERIENCES.map((exp) => (
              <div key={exp.company}>
                <div className="flex items-baseline justify-between gap-2">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-bold text-[13px] text-slate-900">{exp.company}</span>
                    <span className="text-[11px] text-indigo-600 font-semibold">{exp.role}</span>
                    {exp.type && <span className="text-[10px] text-slate-400">({exp.type})</span>}
                  </div>
                  <span className="text-[10px] text-slate-400 shrink-0">{exp.period}</span>
                </div>
                {exp.techStack && (
                  <div className="flex flex-wrap gap-1 mt-1">
                    {exp.techStack.map((t) => (
                      <span key={t} className="text-[9px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">{t}</span>
                    ))}
                  </div>
                )}
                <ul className="mt-1.5 space-y-0.5">
                  {exp.descriptions.map((d, i) => (
                    <li key={i} className="text-[11px] text-slate-600 flex gap-1.5">
                      <span className="text-indigo-400 shrink-0 mt-px">·</span>
                      <span className="break-keep">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills + Education + Awards */}
        <div className="grid grid-cols-5 gap-5">
          <div className="col-span-3">
            <h2 className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-2 border-b border-slate-100 pb-1">
              Skills
            </h2>
            <div className="space-y-2">
              {PRINT_SKILLS.map((s) => (
                <div key={s.category} className="flex gap-2 items-start">
                  <span className="text-[10px] font-semibold text-slate-400 w-16 shrink-0 mt-0.5">{s.category}</span>
                  <div className="flex flex-wrap gap-1">
                    {s.items.map((item) => (
                      <span key={item} className="text-[10px] bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-2">
            <h2 className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-2 border-b border-slate-100 pb-1">
              Education
            </h2>
            {EDUCATION.map((e) => (
              <div key={e.school} className="mb-2">
                <div className="text-[12px] font-bold text-slate-800">{e.schoolKo}</div>
                <div className="text-[10px] text-slate-500">{e.majorKo}</div>
                <div className="text-[10px] text-slate-400">{e.period}</div>
              </div>
            ))}
            <h2 className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-2 border-b border-slate-100 pb-1 mt-3">
              Certificates & Awards
            </h2>
            <div className="space-y-1.5">
              {[...CERTS, ...AWARDS].map((a) => (
                <div key={a.title}>
                  <div className="text-[11px] font-semibold text-slate-800 break-keep">{a.title}</div>
                  <div className="text-[10px] text-slate-400">{a.issuer} · {a.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════ */}
        {/* PAGE 2 — 경력 프로젝트 (상세)                  */}
        {/* ═══════════════════════════════════════════════ */}
        <div style={{ breakBefore: "page" }}>
          <header className="border-b-[3px] border-indigo-600 pb-3 mb-5">
            <h1 className="text-xl font-black text-slate-900">Career Projects</h1>
            <p className="text-[11px] text-slate-400 mt-0.5">Ko Hyeyeon · khy33355@gmail.com · github.com/Hyeyeon-Ko</p>
          </header>

          <div className="space-y-5">
            {CAREER_PROJECTS.map((proj) => (
              <div
                key={proj.title}
                className="border border-slate-200 rounded-xl overflow-hidden"
                style={{ breakInside: "avoid" }}
              >
                {/* 이미지 영역 — 모든 이미지 동일 높이 */}
                <div className="flex gap-2 bg-slate-50 p-3 h-44">
                  <img
                    src={proj.mainImage}
                    alt={proj.title}
                    className="flex-1 h-full object-cover rounded-lg"
                  />
                  {proj.subImages?.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt=""
                      className={`h-full object-cover object-top rounded-lg ${
                        proj.subImagesMobile ? "w-24" : "flex-1"
                      }`}
                    />
                  ))}
                </div>

                {/* 텍스트 영역 */}
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-bold text-[14px] text-slate-900 leading-snug break-keep">{proj.title}</h3>
                      <p className="text-[11px] text-indigo-600 font-medium mt-0.5">{proj.company} · {proj.period}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[10px] text-slate-400">{proj.role}</span>
                      <div className="text-[11px] font-bold text-indigo-600 mt-0.5">{proj.metric}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2.5">
                    {proj.tags.map((t) => (
                      <span key={t} className="text-[9px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">{t}</span>
                    ))}
                  </div>
                  <ul className="space-y-1">
                    {proj.highlights.map((h, i) => (
                      <li key={i} className="text-[11px] text-slate-600 flex gap-1.5">
                        <span className="text-indigo-400 shrink-0">·</span>
                        <span className="break-keep">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════ */}
        {/* PAGE 3 — 사이드 / 학교 프로젝트               */}
        {/* ═══════════════════════════════════════════════ */}
        <div style={{ breakBefore: "page" }} className="pt-4">
          <header className="border-b-[3px] border-indigo-600 pb-3 mb-5">
            <h1 className="text-xl font-black text-slate-900">Other Projects</h1>
            <p className="text-[11px] text-slate-400 mt-0.5">Ko Hyeyeon · khy33355@gmail.com · github.com/Hyeyeon-Ko</p>
          </header>

          <div className="grid grid-cols-2 gap-4">
            {SIDE_PROJECTS.map((proj) => (
              <div
                key={proj.title}
                className="border border-slate-200 rounded-xl overflow-hidden flex flex-col"
                style={{ breakInside: "avoid" }}
              >
                {/* 이미지 */}
                <div className="bg-slate-50 flex gap-1.5 p-2 h-40 items-stretch">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className={`object-cover rounded ${proj.hasMobile ? "flex-1" : "w-full"}`}
                  />
                  {proj.hasMobile && proj.mobileImages && (
                    <div className="flex gap-1">
                      {proj.mobileImages.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt=""
                          className="w-16 h-full object-cover object-top rounded"
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* 텍스트 */}
                <div className="p-3 flex-1">
                  <div className="flex items-start justify-between gap-1 mb-1">
                    <h3 className="font-bold text-[12px] text-slate-900 leading-snug break-keep">{proj.title}</h3>
                    <span className="text-[9px] text-slate-400 shrink-0">{proj.period}</span>
                  </div>
                  <p className="text-[10px] text-indigo-500 font-medium mb-1">{proj.role}</p>
                  {proj.award && (
                    <p className="text-[10px] text-amber-600 font-semibold mb-1.5">🏆 {proj.award}</p>
                  )}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {proj.tags.map((t) => (
                      <span key={t} className="text-[9px] bg-slate-100 text-slate-600 px-1 py-0.5 rounded">{t}</span>
                    ))}
                  </div>
                  <ul className="space-y-0.5">
                    {proj.highlights.map((h, i) => (
                      <li key={i} className="text-[10px] text-slate-600 flex gap-1">
                        <span className="text-indigo-400 shrink-0">·</span>
                        <span className="break-keep">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[10px] text-slate-300 mt-6 no-print">
            브라우저 인쇄 → "PDF로 저장" / 여백: 없음 / 배경 그래픽 체크
          </p>
        </div>

      </div>
    </>
  );
}

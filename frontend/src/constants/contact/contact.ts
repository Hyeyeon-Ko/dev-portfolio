import type { ContactHeroCopy, SocialItem } from "../../types/contact";

export const CONTACT_HERO: ContactHeroCopy = {
  badge: "GET IN TOUCH",
  titleLine1: "함께 만들고",
  titleLine2: "함께 성장하고 싶습니다.",
  description:
    "프로젝트/협업 제안, 기술적인 질문, 간단한 인사까지 편하게 보내주세요. 최대한 빠르게 확인하고 답장드릴게요.",
};

export const SOCIALS: SocialItem[] = [
  {
    label: "GitHub",
    subLabel: "프로젝트와 코드 보기",
    href: "https://github.com/Hyeyeon-Ko",
    icon: "code",
    colorClass: "bg-slate-900",
  },
  {
    label: "LinkedIn",
    subLabel: "커리어/경험 확인",
    href: "https://linkedin.com",
    icon: "work",
    colorClass: "bg-[#0077b5]",
  },
  {
    label: "Email",
    subLabel: "khy33355@gmail.com",
    href: "mailto:khy33355@gmail.com",
    icon: "mail",
    colorClass: "bg-primary",
    copyText: "khy33355@gmail.com",
  },
];

import type { ContactHeroCopy, SocialItem } from "../../types/contact";

export const CONTACT_HERO: ContactHeroCopy = {
  badge: "NETWORKING",
  titleLine1: "Let's",
  titleLine2: "Connect.",
  description:
    "프로젝트/협업 제안, 기술적인 질문, 간단한 인사까지 편하게 보내주세요.\n최대한 빠르게 확인하고 답장 드리겠습니다:)",
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
    subLabel: "준비 중",
    href: "#",
    icon: "work",
    colorClass: "bg-[#0077b5]",
    disabled: true,
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

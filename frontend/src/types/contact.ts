export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
  
  export interface SocialItem {
    label: string;
    subLabel: string;
    href: string;
    icon: string;
    colorClass: string;
    copyText?: string;
  }
  
  export interface ContactHeroCopy {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
  }
  
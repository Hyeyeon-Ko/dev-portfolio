export interface TechItem {
    name: string;
    fullName: string;
    description: string;
    color: string;
  }
  
  export interface SkillCategory {
    title: string;
    icon: string;
    colorClass: string;
    items: TechItem[];
  }
  
  export interface InfrastructureItem {
    name: string;
    description: string;
    icon: string;
    iconColor: string;
    bgColor: string;
  }
  
  export interface ExpertiseStats {
    frontend: number;
    backend: number;
    devops: number;
    levelLabel: string;
  }
  
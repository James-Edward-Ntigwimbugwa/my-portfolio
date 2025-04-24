export interface NavItem {
    name: string;
    href: string;
  }
  
  export interface Skill {
    name: string;
    percentage: number;
  }
  
  export interface SkillCategory {
    title: string;
    icon: string;
    skills: Skill[];
  }
  
  export interface Technology {
    name: string;
    color?: string;
  }
  
  export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    categories: string[];
    technologies: Technology[];
    demoUrl: string;
    codeUrl: string;
  }
  

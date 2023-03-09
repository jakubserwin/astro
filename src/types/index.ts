export interface AstroIcon {
  name: string;
  pack?: string;
}

export interface Service {
  id: number;
  icon: AstroIcon;
  title: string;
  label: string;
}

export interface StaticPath {
  params: {
    [key in string]: string
  };
}

export interface ProjectDetails {
  description: string;
  problem: string;
  timeline: string;
  industry: string;
  goals: string;
  role1: string;
  role2: string;
  summary: string;
}

export interface Project {
  name: string;
  href: string;
  // logo: string;
  accentColor: string;
  demo: string;
  link: string;
  repository: string;
  details: ProjectDetails;
}

export enum ProjectCardVariant {
  DEFAULT = 'DEFAULT',
  FLIPPED = 'FLIPPED',
}

export enum ButtonVariant {
  DEFAULT = 'DEFALUT',
  OUTLINE = 'OUYLINE',
}

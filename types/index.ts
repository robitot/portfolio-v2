export type SocialKind = 'li' | 'gh' | 'mail';

export interface SocialLink {
  label: string;
  href: string;
  kind: SocialKind;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface Experience {
  role: string;
  company: string;
  mode: string;
  location: string;
  dates: string;
  current: boolean;
  bullets: string[];
  tech: string[];
}

export interface Education {
  title: string;
  school: string;
  place: string;
  years: string;
}

export interface Certificate {
  name: string;
  rank: string;
  issuer: string;
  date: string;
  url: string;
  /** Optional badge image in /public/images, e.g. '/images/cert-react.png' */
  image?: string;
}

export type SkillKey = 'fe' | 'be' | 'db' | 'tl' | 'ai';

export interface SkillGroup {
  key: SkillKey;
  title: string;
  label?: string;
  items: string[];
}

export interface Stats {
  years: number;
  companies: number;
  certs: number;
}

export interface ContactValues {
  name: string;
  email: string;
  message: string;
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

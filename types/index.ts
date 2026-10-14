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

export type ProjectCategory = 'Full Stack' | 'Frontend' | 'PWA';
export type ProjectStatus = 'Live' | 'In progress' | 'Completed' | 'Prototype';

export interface Project {
  /** URL slug: the detail page lives at /projects/<slug> */
  slug: string;
  title: string;
  /** One line shown under the title on the detail page */
  tagline: string;
  /** 1 to 2 sentences shown on the card */
  summary: string;
  category: ProjectCategory;
  year: string;
  role: string;
  timeline: string;
  team: string;
  status: ProjectStatus;
  featured?: boolean;
  /** Cover screenshot in /public/images/projects, e.g. '/images/projects/inventory-pulse.png'. Placeholder shows when omitted. */
  image?: string;
  /** Optional extra screenshots (up to 3 shown). Placeholders show when omitted. */
  gallery?: string[];
  links: { live?: string; repo?: string };
  /** Short list shown as tags on the card */
  tech: string[];
  /** Grouped stack shown on the detail page */
  stack: { label: string; items: string[] }[];
  problem: string;
  solution: string;
  features: { title: string; text: string }[];
  metrics: { value: string; label: string }[];
  challenges: { title: string; text: string }[];
  demo?: {
    email: string;
    password: string;
    url: string;
    source: string;
  };
}

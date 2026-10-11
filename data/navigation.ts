import type { NavItem } from '@/types';

export const NAV: NavItem[] = [
  {
    id: 'hero',
    label: 'Home',
  },
  {
    id: 'experiences',
    label: 'Experiences',
  },
  {
    id: 'about',
    label: 'About Me',
  },
  {
    id: 'skills',
    label: 'Skills',
  },
  {
    id: 'contact',
    label: 'Contact Me',
  },
];

export const NAV_IDS = NAV.map((n) => n.id);

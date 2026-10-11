import type { Experience } from '@/types';

export const EXPERIENCE: Experience[] = [
  {
    role: 'Junior Software Engineer',
    company: 'Activasia Inc.',
    mode: 'Hybrid',
    location: 'Oranbo, Pasig City',
    dates: 'May 15, 2025 – Present',
    current: true,
    bullets: [
      'Developed and maintained frontend, backend, and database systems using React.js, Next.js, Mantine UI, and Serverless architecture.',
      'Managed AWS infrastructure, production deployments, Git workflows, and environment configurations to ensure reliable releases.',
      'Designed, developed, and delivered new features and system enhancements based on business requirements.',
      'Debugged production issues, refactored legacy code, optimized performance, and contributed to system architecture improvements.',
      'Collaborated with cross-functional teams to resolve issues and mentored developers through code reviews and technical guidance.',
    ],
    tech: ['React', 'Next.js', 'Mantine', 'AWS Serverless', 'Git'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Unlimited Network of Opportunities',
    mode: 'Hybrid',
    location: 'West Avenue, Quezon City',
    dates: 'September 18, 2024 – May 14, 2025',
    current: false,
    bullets: [
      'Designed and developed responsive landing pages and intuitive UI/UX for customer-facing and internal systems.',
      'Developed new systems and features while optimizing existing applications for performance, usability, and conversions.',
      'Troubleshot, debugged, and resolved system issues to improve reliability, compatibility, and overall performance.',
      'Collaborated with management, QA, business analysts, and cross-functional teams to prioritize work, validate features, and deliver business requirements.',
    ],
    tech: ['Landing Pages', 'UI/UX', 'Performance', 'Debugging'],
  },
  {
    role: 'Junior Full Stack Developer',
    company: 'Simplified Business Consultancy',
    mode: 'Onsite',
    location: 'Feria, Quezon City',
    dates: 'August 1, 2023 – September 3, 2024',
    current: false,
    bullets: [
      'Developed a full-stack Progressive Web Application (PWA) using Blazor WebAssembly and .NET 8, implementing secure authentication and the MVVM architecture.',
      'Designed a responsive, scalable application, ensuring quality through testing, debugging, and modern development best practices.',
      'Collaborated with clients to present features, gather feedback, and deliver solutions aligned with business requirements.',
      'Led project coordination, documentation, and team collaboration using GitHub and Notion to ensure successful project delivery.',
    ],
    tech: ['.NET 8', 'Blazor', 'PWA', 'MVVM', 'GitHub', 'Notion'],
  },
];

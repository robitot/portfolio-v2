import type { SocialLink } from '@/types';

export const PROFILE = {
  name: 'Robby Cruz',
  roles: ['Full Stack Developer', 'Frontend Developer', 'Backend Developer'],
  pitch:
    'Full Stack Developer with 3+ years building responsive web apps and PWAs using React.js, Next.js, .NET, and AWS Serverless. Experienced in frontend, backend, database, DevOps and leading small teams.',
  bio: "I'm a Full Stack Developer in Quezon City with 3+ years of experience building responsive web apps and PWAs. I work across the whole stack: frontend, backend, database and DevOps, from React and Next.js interfaces to .NET and AWS Serverless services. I enjoy leading small teams and mentoring other developers through code reviews and technical guidance.",
  aiBlurb:
    "I use AI actively in my day-to-day development, and I use it very effectively. Claude, ChatGPT, Gemini and ChatGPT's Codex are part of how I build, debug and ship.",
  location: 'Quezon City, Metro Manila, Philippines',
  email: 'cruzrobby200224@gmail.com',
  phone: '+639081672123',
  resumeUrl: '/UPDATEDRESUME.pdf',
  socials: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/robby-cruz-367563242/',
      kind: 'li',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/robitot',
      kind: 'gh',
    },
    {
      label: 'Email Robby',
      href: 'mailto:cruzrobby200224@gmail.com',
      kind: 'mail',
    },
  ] as SocialLink[],
} as const;

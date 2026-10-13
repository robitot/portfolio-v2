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
  services:
    'I design and build software from the ground up, choosing the right tech stack for the problem rather than forcing the problem into a familiar one. Once a system is live, I keep it healthy by maintaining both the front end and back end, so it stays fast, stable, and ready to grow. I also integrate AI into existing systems to take over time-consuming manual work. For example, I can add AI-powered resume screening that reads and ranks applicants automatically, saving your HR team hours of sifting through applications so they can focus on interviewing the right people. On the infrastructure side, I manage AWS cloud environments to keep your systems secure, scalable, and cost-efficient. And because good engineering depends on good process, I set up Jira workflows and build custom automations that cut manual work and keep teams moving.',
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

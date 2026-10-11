import type { SkillGroup } from '@/types';

export const SKILLS: SkillGroup[] = [
  {
    key: 'fe',
    title: 'FRONTEND',
    items: ['HTML', 'CSS', 'JS', 'TypeScript', 'Bootstrap', 'Tailwind', 'ReactJS', 'NextJS'],
  },
  {
    key: 'be',
    title: 'BACKEND',
    items: ['C#', 'PHP', '.NET', 'JS', 'NodeJS', 'Laravel', 'Serverless Framework', 'AWS'],
  },
  {
    key: 'db',
    title: 'DATABASE',
    items: ['MSSQL Server', 'MySQL', 'DynamoDB'],
  },
  {
    key: 'tl',
    title: 'TOOLS',
    items: ['Git', 'Postman', 'Figma', 'GitHub', 'ClaudeAI'],
  },
  {
    key: 'ai',
    title: 'AI TOOLS',
    label: 'AI Tools',
    items: ['Claude', 'ChatGPT', 'Gemini', 'Codex (ChatGPT)'],
  },
];

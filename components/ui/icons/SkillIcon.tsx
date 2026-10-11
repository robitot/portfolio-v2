import type { SVGProps } from 'react';
import type { SkillKey } from '@/types';
import { AiIcon, BackendIcon, DatabaseIcon, FrontendIcon, ToolsIcon } from './index';

const MAP = {
  fe: FrontendIcon,
  be: BackendIcon,
  db: DatabaseIcon,
  tl: ToolsIcon,
  ai: AiIcon,
} as const;

export default function SkillIcon({
  kind,
  ...props
}: { kind: SkillKey } & SVGProps<SVGSVGElement>) {
  const Icon = MAP[kind];
  return <Icon {...props} />;
}

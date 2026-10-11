import type { SVGProps } from 'react';
import type { SocialKind } from '@/types';
import { GitHubIcon, LinkedInIcon, MailIcon } from './index';

const MAP = { li: LinkedInIcon, gh: GitHubIcon, mail: MailIcon } as const;

export default function SocialIcon({
  kind,
  ...props
}: { kind: SocialKind } & SVGProps<SVGSVGElement>) {
  const Icon = MAP[kind];
  return <Icon {...props} />;
}

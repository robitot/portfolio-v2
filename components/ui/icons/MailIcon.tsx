import type { SVGProps } from 'react';

export default function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className="ico" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

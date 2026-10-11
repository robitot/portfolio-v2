import type { SVGProps } from 'react';

export default function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className="ico" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" />
      <path d="M8 10v7M8 7v.01M12 17v-7M12 13a3 3 0 0 1 6 0v4" />
    </svg>
  );
}

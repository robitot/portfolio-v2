import type { SVGProps } from 'react';

export default function FrontendIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 8 8" aria-hidden="true" style={{ fill: '#97D7FF' }} {...props}>
      <rect x="0" y="1" width="8" height="5" />
      <rect x="1" y="2" width="6" height="3" fill="#086288" />
      <rect x="2" y="3" width="1" height="1" />
      <rect x="4" y="3" width="2" height="1" />
      <rect x="3" y="6" width="2" height="1" />
      <rect x="2" y="7" width="4" height="1" />
    </svg>
  );
}

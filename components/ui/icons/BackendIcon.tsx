import type { SVGProps } from 'react';

export default function BackendIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 8 8" aria-hidden="true" style={{ fill: '#97D7FF' }} {...props}>
      <rect x="0" y="0" width="8" height="2" />
      <rect x="0" y="3" width="8" height="2" />
      <rect x="0" y="6" width="8" height="2" />
      <rect x="5" y="0" width="1" height="1" fill="#086288" />
      <rect x="5" y="3" width="1" height="1" fill="#086288" />
      <rect x="5" y="6" width="1" height="1" fill="#086288" />
      <rect x="7" y="0" width="1" height="1" fill="#086288" />
      <rect x="7" y="3" width="1" height="1" fill="#086288" />
      <rect x="7" y="6" width="1" height="1" fill="#086288" />
    </svg>
  );
}

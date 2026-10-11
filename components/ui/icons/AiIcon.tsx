import type { SVGProps } from 'react';

export default function AiIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 8 8" aria-hidden="true" style={{ fill: '#97D7FF' }} {...props}>
      <rect x="3" y="0" width="2" height="8" />
      <rect x="0" y="3" width="8" height="2" />
      <rect x="2" y="2" width="4" height="4" />
    </svg>
  );
}

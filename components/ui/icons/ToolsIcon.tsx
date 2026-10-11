import type { SVGProps } from 'react';

export default function ToolsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 8 8" aria-hidden="true" style={{ fill: '#97D7FF' }} {...props}>
      <rect x="5" y="0" width="3" height="1" />
      <rect x="4" y="1" width="1" height="3" />
      <rect x="6" y="1" width="2" height="2" />
      <rect x="3" y="3" width="2" height="1" />
      <rect x="2" y="4" width="2" height="1" />
      <rect x="1" y="5" width="2" height="1" />
      <rect x="0" y="6" width="2" height="2" />
      <rect x="2" y="6" width="1" height="1" />
    </svg>
  );
}

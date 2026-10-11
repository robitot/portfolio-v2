import type { SVGProps } from 'react';

export default function ArrowDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 8 8"
      shapeRendering="crispEdges"
      aria-hidden="true"
      style={{ fill: '#FFEFC4' }}
      {...props}
    >
      <rect x="3" y="0" width="2" height="5" />
      <rect x="1" y="4" width="2" height="2" />
      <rect x="5" y="4" width="2" height="2" />
      <rect x="2" y="5" width="4" height="2" />
      <rect x="3" y="6" width="2" height="2" />
    </svg>
  );
}

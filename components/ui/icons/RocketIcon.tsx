import type { SVGProps } from 'react';

export default function RocketIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 8 8"
      shapeRendering="crispEdges"
      aria-hidden="true"
      style={{ fill: 'currentColor' }}
      {...props}
    >
      <rect x="3" y="0" width="2" height="1" />
      <rect x="2" y="1" width="4" height="4" />
      <rect x="3" y="2" width="2" height="1" fill="#FFEFC4" />
      <rect x="1" y="4" width="1" height="2" />
      <rect x="6" y="4" width="1" height="2" />
      <rect x="3" y="5" width="2" height="2" />
      <rect x="3" y="7" width="2" height="1" fill="#97D7FF" />
    </svg>
  );
}

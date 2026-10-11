import type { SVGProps } from 'react';

export default function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="heart"
      viewBox="0 0 8 7"
      shapeRendering="crispEdges"
      aria-label="love"
      role="img"
      style={{ fill: '#97D7FF' }}
      {...props}
    >
      <rect x="1" y="0" width="2" height="1" />
      <rect x="5" y="0" width="2" height="1" />
      <rect x="0" y="1" width="4" height="2" />
      <rect x="4" y="1" width="4" height="2" />
      <rect x="1" y="3" width="6" height="1" />
      <rect x="2" y="4" width="4" height="1" />
      <rect x="3" y="5" width="2" height="1" />
    </svg>
  );
}

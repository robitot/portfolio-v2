import type { SVGProps } from 'react';

export default function BurgerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 8 8"
      shapeRendering="crispEdges"
      aria-hidden="true"
      {...props}
    >
      <rect x="0" y="1" width="8" height="1" fill="currentColor" />
      <rect x="0" y="3.5" width="8" height="1" fill="currentColor" />
      <rect x="0" y="6" width="8" height="1" fill="currentColor" />
    </svg>
  );
}

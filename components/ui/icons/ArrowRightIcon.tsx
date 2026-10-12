import type { SVGProps } from 'react';

/** Pixel arrow pointing right. Flip with style={{ transform: 'scaleX(-1)' }} for a left arrow. */
export default function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 8 8"
      shapeRendering="crispEdges"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <rect x="0" y="3" width="5" height="2" />
      <rect x="4" y="1" width="1" height="6" />
      <rect x="5" y="2" width="1" height="4" />
      <rect x="6" y="3" width="1" height="2" />
    </svg>
  );
}

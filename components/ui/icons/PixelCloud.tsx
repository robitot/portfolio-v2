import type { SVGProps } from 'react';

export default function PixelCloud(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 8" shapeRendering="crispEdges" {...props}>
      <rect x="8" y="0" width="4" height="2" />
      <rect x="5" y="2" width="9" height="2" />
      <rect x="3" y="4" width="14" height="2" />
      <rect x="1" y="6" width="18" height="2" />
    </svg>
  );
}

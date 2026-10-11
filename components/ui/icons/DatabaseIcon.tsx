import type { SVGProps } from 'react';

export default function DatabaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 8 8" aria-hidden="true" style={{ fill: '#97D7FF' }} {...props}>
      <rect x="1" y="0" width="6" height="1" />
      <rect x="0" y="1" width="8" height="1" />
      <rect x="0" y="2" width="8" height="1" fill="#4D8DBA" />
      <rect x="0" y="3" width="8" height="1" />
      <rect x="0" y="4" width="8" height="1" fill="#4D8DBA" />
      <rect x="0" y="5" width="8" height="1" />
      <rect x="0" y="6" width="8" height="1" />
      <rect x="1" y="7" width="6" height="1" />
    </svg>
  );
}

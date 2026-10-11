import type { SVGProps } from 'react';

export default function PinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className="ico" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

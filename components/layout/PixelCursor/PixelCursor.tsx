'use client';

import { useEffect, useRef } from 'react';
import './PixelCursor.css';

/** Custom pixel arrow cursor. Hidden on touch devices and when the pointer is coarse (see CSS). */
export default function PixelCursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      el.classList.add('on');
      el.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
      const big = (e.target as Element | null)?.closest?.('a,button,input,textarea');
      el.classList.toggle('big', !!big);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);
  return (
    <div className="cur" id="cur" ref={ref} aria-hidden="true">
      <svg viewBox="-1 -1 10 14">
        <defs>
          <g id="arw">
            <rect x="0" y="0" width="1" height="1" />
            <rect x="0" y="1" width="2" height="1" />
            <rect x="0" y="2" width="3" height="1" />
            <rect x="0" y="3" width="4" height="1" />
            <rect x="0" y="4" width="5" height="1" />
            <rect x="0" y="5" width="6" height="1" />
            <rect x="0" y="6" width="7" height="1" />
            <rect x="0" y="7" width="8" height="1" />
            <rect x="0" y="8" width="5" height="1" />
            <rect x="3" y="9" width="2" height="3" />
          </g>
        </defs>
        <use href="#arw" fill="#043A52" stroke="#043A52" strokeWidth="2"></use>
        <use href="#arw" className="af"></use>
      </svg>
    </div>
  );
}

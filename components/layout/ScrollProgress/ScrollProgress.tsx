'use client';

import { useEffect, useRef } from 'react';
import './ScrollProgress.css';

export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight || 1;
      if (ref.current)
        ref.current.style.width = `${Math.min(100, Math.max(0, (window.scrollY / max) * 100))}%`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return <div className="prog" id="prog" ref={ref} aria-hidden="true" />;
}

import { useEffect, useRef, useState, type RefObject } from 'react';
import { frameFromVector, type Frame } from '@/lib/pixelFrames';

/**
 * Tracks the mouse / touch position and picks which of the 7 head frames to show.
 * Also exposes `lastMove` and `looking` so useIdleLook can take over when the pointer rests.
 */
export function useHeadTracking(headRef: RefObject<SVGGElement | null>, reduced: boolean) {
  const [frame, setFrame] = useState<Frame>('fwd');
  const lastMove = useRef(Date.now());
  const looking = useRef(false);

  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    let x = 0;
    let y = 0;
    const onPoint = (cx: number, cy: number) => {
      lastMove.current = Date.now();
      looking.current = false;
      x = cx;
      y = cy;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = headRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        setFrame(frameFromVector(x - (r.left + r.width / 2), y - (r.top + r.height / 2)));
      });
    };
    const onMouse = (e: MouseEvent) => onPoint(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) onPoint(t.clientX, t.clientY);
    };
    window.addEventListener('mousemove', onMouse, { passive: true });
    window.addEventListener('touchmove', onTouch, { passive: true });
    window.addEventListener('touchstart', onTouch, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('touchmove', onTouch);
      window.removeEventListener('touchstart', onTouch);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [headRef, reduced]);

  return { frame, setFrame, lastMove, looking };
}

export type HeadTracker = ReturnType<typeof useHeadTracking>;

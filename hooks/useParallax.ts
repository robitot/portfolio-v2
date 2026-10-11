import { useEffect, type RefObject } from 'react';

/** Moves every `.plx[data-d]` inside `rootRef` opposite to the pointer, scaled by its data-d depth. */
export function useParallax(rootRef: RefObject<HTMLElement | null>, reduced: boolean) {
  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    let x = 0;
    let y = 0;
    const update = () => {
      raf = 0;
      const nx = (x / window.innerWidth - 0.5) * 2;
      const ny = (y / window.innerHeight - 0.5) * 2;
      rootRef.current?.querySelectorAll<HTMLElement>('.plx').forEach((el) => {
        const d = parseFloat(el.dataset.d ?? '0') || 0;
        el.style.transform = `translate(${Math.round(-nx * d)}px,${Math.round(-ny * d)}px)`;
      });
    };
    const schedule = (cx: number, cy: number) => {
      x = cx;
      y = cy;
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onMouse = (e: MouseEvent) => schedule(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) schedule(t.clientX, t.clientY);
    };
    window.addEventListener('mousemove', onMouse, { passive: true });
    window.addEventListener('touchmove', onTouch, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('touchmove', onTouch);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [rootRef, reduced]);
}

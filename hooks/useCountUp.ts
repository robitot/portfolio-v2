import { useEffect, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

/** Returns eased progress 0 -> 1 once `active` becomes true (jumps straight to 1 if reduced motion). */
export function useCountUp(active: boolean, duration = 1400): number {
  const reduced = useReducedMotion();
  const [k, setK] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (reduced) {
      setK(1);
      return;
    }
    const t0 = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, Math.max(0, (t - t0) / duration));
      setK(1 - Math.pow(1 - p, 3));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, reduced, duration]);
  return k;
}

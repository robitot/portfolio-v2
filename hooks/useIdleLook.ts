import { useEffect, useRef } from 'react';
import { LOOK_AROUND } from '@/lib/pixelFrames';
import type { HeadTracker } from './useHeadTracking';

/** After 3s without pointer movement: face forward, then glance around every ~4 seconds. */
export function useIdleLook({ frame, setFrame, lastMove, looking }: HeadTracker, reduced: boolean) {
  const frameRef = useRef(frame);
  useEffect(() => {
    frameRef.current = frame;
  }, [frame]);

  useEffect(() => {
    if (reduced) return;
    let n = 0;
    const timers = new Set<ReturnType<typeof setTimeout>>();
    const id = setInterval(() => {
      if (Date.now() - lastMove.current > 3000) {
        n++;
        if (frameRef.current !== 'fwd' && !looking.current) setFrame('fwd');
        if (n % 4 === 0) {
          looking.current = true;
          setFrame(LOOK_AROUND[Math.floor(Math.random() * LOOK_AROUND.length)]);
          timers.add(
            setTimeout(() => {
              looking.current = false;
              if (Date.now() - lastMove.current > 3000) setFrame('fwd');
            }, 1300),
          );
        }
      } else {
        n = 0;
      }
    }, 1000);
    return () => {
      clearInterval(id);
      timers.forEach(clearTimeout);
    };
  }, [reduced, setFrame, lastMove, looking]);
}

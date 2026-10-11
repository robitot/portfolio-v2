import { useEffect, useState } from 'react';

/** Toggles true for 140ms every 3 to 5 seconds. */
export function useBlink(reduced: boolean): boolean {
  const [blink, setBlink] = useState(false);
  useEffect(() => {
    if (reduced) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const go = () => {
      setBlink(true);
      timers.push(
        setTimeout(() => {
          setBlink(false);
          timers.push(setTimeout(go, 3000 + Math.random() * 2000));
        }, 140),
      );
    };
    timers.push(setTimeout(go, 2500));
    return () => timers.forEach(clearTimeout);
  }, [reduced]);
  return blink;
}

import { useCallback, useEffect, useRef, useState } from 'react';

/** `wave` is true for 1.7s after `trigger()` is called (character click). */
export function useWave() {
  const [wave, setWave] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const trigger = useCallback(() => {
    setWave(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setWave(false), 1700);
  }, []);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  return { wave, trigger };
}

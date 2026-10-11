'use client';

import { PROFILE } from '@/data/profile';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useTypewriter } from '@/hooks/useTypewriter';

export default function Typewriter() {
  const reduced = useReducedMotion();
  const text = useTypewriter(PROFILE.roles, reduced);
  return (
    <p className="h-role" aria-live="off">
      <span>{text}</span>
      <span className="caret" aria-hidden="true" style={{ height: 14, width: 8 }} />
    </p>
  );
}

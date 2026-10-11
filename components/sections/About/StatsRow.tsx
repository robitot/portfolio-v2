'use client';

import { STATS } from '@/data/stats';
import { useCountUp } from '@/hooks/useCountUp';
import { useReveal } from '@/hooks/useReveal';

export default function StatsRow() {
  const { ref, inView } = useReveal<HTMLDivElement>();
  const k = useCountUp(inView);
  return (
    <div ref={ref} className={`stats rv ${inView ? 'in' : ''}`} id="stats">
      <div className="stat">
        <b>{Math.round(STATS.years * k)}+</b>
        <span>Years Experience</span>
      </div>
      <div className="stat">
        <b>{Math.round(STATS.companies * k)}</b>
        <span>Companies</span>
      </div>
      <div className="stat">
        <b>{Math.round(STATS.certs * k)}</b>
        <span>Certifications</span>
      </div>
      <div className="stat">
        <b style={{ fontSize: 16, lineHeight: 1.5, paddingTop: 6, paddingBottom: 6 }}>Full Stack</b>
        <span>Range</span>
      </div>
    </div>
  );
}

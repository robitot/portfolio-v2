import { EDUCATION } from '@/data/education';
import Reveal from '@/components/ui/Reveal/Reveal';

export default function EducationList() {
  return (
    <Reveal className="edu" style={{ marginTop: 56 }}>
      <h3>EDUCATION</h3>
      <div className="edu-g">
        {EDUCATION.map((ed) => (
          <div key={ed.title}>
            <b>{ed.title}</b>
            <span>{ed.school}</span>
            <span>
              {ed.place} · {ed.years}
            </span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

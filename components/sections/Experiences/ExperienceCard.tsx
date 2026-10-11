import type { Experience } from '@/types';
import Reveal from '@/components/ui/Reveal/Reveal';
import Tag from '@/components/ui/Tag/Tag';

export default function ExperienceCard({
  experience: e,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  return (
    <div className={`row ${index % 2 ? 'r' : 'l'}${e.current ? ' cur-r' : ''}`}>
      <div className="node" aria-hidden="true" />
      <Reveal as="article" className="card" delay={`${index * 80}ms`}>
        <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
          <div style={{ minWidth: 0 }}>
            {e.current && (
              <span className="badge">
                <i />
                CURRENT
              </span>
            )}
            <h3 className="role">{e.role}</h3>
            <p className="co">{e.company}</p>
          </div>
        </div>
        <p className="meta">
          {e.mode} · {e.location}
          <br />
          {e.dates}
        </p>
        <ul className="blt">
          {e.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <div className="tags">
          {e.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

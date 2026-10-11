import { SKILLS } from '@/data/skills';

export default function SkillsMarquee() {
  const unique = Array.from(new Set(SKILLS.flatMap((k) => k.items)));
  const items = [...unique, ...unique];
  return (
    <div className="mq" aria-hidden="true">
      <div className="mq-t">
        {items.map((m, i) => (
          <div key={`${m}-${i}`} className="mq-i">
            <span>{m}</span>
            <span style={{ width: 10, height: 10, background: 'var(--mid)' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

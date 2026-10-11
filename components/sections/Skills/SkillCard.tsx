import type { CSSProperties } from 'react';
import type { SkillGroup } from '@/types';
import SkillIcon from '@/components/ui/icons/SkillIcon';

export default function SkillCard({ skill, show }: { skill: SkillGroup; show: boolean }) {
  return (
    <article className={`${show ? 'skc show' : 'skc'}${skill.key === 'ai' ? ' ai' : ''}`}>
      <div className="skh">
        <SkillIcon kind={skill.key} />
        <h3>{skill.title}</h3>
      </div>
      <div className="chips">
        {skill.items.map((name, i) => (
          <span key={name} className="chip" style={{ '--d': `${i * 55}ms` } as CSSProperties}>
            {name}
          </span>
        ))}
      </div>
    </article>
  );
}

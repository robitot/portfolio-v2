'use client';

import { useState } from 'react';
import { SKILLS } from '@/data/skills';
import SkillCard from './SkillCard';
import SkillFilter, { type SkillFilterValue } from './SkillFilter';

/** Holds the selected filter; the only client-side state in the Skills section. */
export default function SkillsGrid() {
  const [filter, setFilter] = useState<SkillFilterValue>('all');
  return (
    <>
      <SkillFilter active={filter} onChange={setFilter} />
      <div className="sk-g">
        {SKILLS.map((k) => (
          <SkillCard key={k.key} skill={k} show={filter === 'all' || filter === k.key} />
        ))}
      </div>
    </>
  );
}

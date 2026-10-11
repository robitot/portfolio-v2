import { SKILLS } from '@/data/skills';
import Reveal from '@/components/ui/Reveal/Reveal';
import type { SkillKey } from '@/types';

export type SkillFilterValue = 'all' | SkillKey;

export default function SkillFilter({
  active,
  onChange,
}: {
  active: SkillFilterValue;
  onChange: (v: SkillFilterValue) => void;
}) {
  const options = [
    { key: 'all' as const, label: 'All' },
    ...SKILLS.map((k) => ({
      key: k.key,
      label: k.label ?? k.title.charAt(0) + k.title.slice(1).toLowerCase(),
    })),
  ];
  return (
    <Reveal className="filters" role="group" aria-label="Filter skills by category">
      {options.map((o) => (
        <button
          key={o.key}
          type="button"
          className={active === o.key ? 'fb on' : 'fb'}
          aria-pressed={active === o.key}
          onClick={() => onChange(o.key)}
        >
          {o.label}
        </button>
      ))}
    </Reveal>
  );
}

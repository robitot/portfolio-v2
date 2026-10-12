import Reveal from '@/components/ui/Reveal/Reveal';
import type { Project, ProjectCategory } from '@/types';

export type ProjectFilterValue = 'all' | ProjectCategory;

export default function ProjectFilter({
  projects,
  active,
  onChange,
}: {
  projects: Project[];
  active: ProjectFilterValue;
  onChange: (v: ProjectFilterValue) => void;
}) {
  const categories = Array.from(new Set(projects.map((p) => p.category)));
  const options: { key: ProjectFilterValue; label: string; count: number }[] = [
    { key: 'all', label: 'All', count: projects.length },
    ...categories.map((c) => ({
      key: c,
      label: c,
      count: projects.filter((p) => p.category === c).length,
    })),
  ];
  return (
    <Reveal className="pj-filters" role="group" aria-label="Filter projects by type">
      {options.map((o) => (
        <button
          key={o.key}
          type="button"
          className={active === o.key ? 'pj-fb on' : 'pj-fb'}
          aria-pressed={active === o.key}
          onClick={() => onChange(o.key)}
        >
          {o.label} <b>{o.count}</b>
        </button>
      ))}
    </Reveal>
  );
}

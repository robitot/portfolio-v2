'use client';

import { useState } from 'react';
import { PROJECTS } from '@/data/projects';
import ProjectCard from './ProjectCard';
import ProjectFilter, { type ProjectFilterValue } from './ProjectFilter';

/** Holds the selected filter. The featured project spans the full row while "All" is selected. */
export default function ProjectsGrid() {
  const [filter, setFilter] = useState<ProjectFilterValue>('all');
  const visible = PROJECTS.filter((p) => filter === 'all' || p.category === filter);
  return (
    <>
      <ProjectFilter projects={PROJECTS} active={filter} onChange={setFilter} />
      <p className="pj-count" aria-live="polite">
        Showing {visible.length} of {PROJECTS.length} projects
      </p>
      <div className="pj-grid">
        {visible.map((p, i) => (
          <ProjectCard
            key={p.slug}
            project={p}
            index={i}
            featured={filter === 'all' && p.featured}
          />
        ))}
      </div>
    </>
  );
}

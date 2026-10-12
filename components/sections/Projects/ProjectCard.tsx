import Link from 'next/link';
import type { Project } from '@/types';
import Reveal from '@/components/ui/Reveal/Reveal';
import ProjectShot from '@/components/ui/ProjectShot/ProjectShot';
import Tag from '@/components/ui/Tag/Tag';
import ArrowRightIcon from '@/components/ui/icons/ArrowRightIcon';

interface Props {
  project: Project;
  index: number;
  /** Large two-column layout used for the featured project */
  featured?: boolean;
}

/** Whole card is clickable (stretched title link); Live / Code links sit above it. */
export default function ProjectCard({ project: p, index, featured }: Props) {
  return (
    <Reveal as="article" className={`pj-card${featured ? ' feat' : ''}`} delay={`${index * 70}ms`}>
      <ProjectShot
        src={p.image}
        label={`${p.title} screenshot, 1600×900`}
        sizes={featured ? '(max-width: 860px) 100vw, 640px' : '(max-width: 860px) 100vw, 560px'}
      />
      <div className="pj-body">
        <div className="pj-meta">
          {featured && <span className="pj-feat">★ FEATURED</span>}
          <span className="pj-cat">{p.category}</span>
          <span className="pj-year">{p.year}</span>
          <span className={`pj-status ${p.status === 'Live' ? 'live' : ''}`}>
            <i />
            {p.status}
          </span>
        </div>
        <h3 className="pj-title">
          <Link href={`/projects/${p.slug}`} className="pj-link">
            {p.title}
          </Link>
        </h3>
        <p className="pj-sum">{p.summary}</p>
        <div className="tags" style={{ marginTop: 0 }}>
          {p.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <div className="pj-foot">
          <span className="pj-more">
            View case study <ArrowRightIcon />
          </span>
          <div className="pj-ext">
            {p.links.live && (
              <a href={p.links.live} aria-label={`${p.title} live demo`}>
                Live
              </a>
            )}
            {p.links.repo && (
              <a href={p.links.repo} aria-label={`${p.title} source code`}>
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

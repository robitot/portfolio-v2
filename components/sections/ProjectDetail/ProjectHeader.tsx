import Link from 'next/link';
import type { Project } from '@/types';
import Button from '@/components/ui/Button/Button';
import ProjectShot from '@/components/ui/ProjectShot/ProjectShot';
import ArrowRightIcon from '@/components/ui/icons/ArrowRightIcon';
import Eyebrow from '@/components/ui/Eyebrow/Eyebrow';
import Reveal from '@/components/ui/Reveal/Reveal';

export default function ProjectHeader({ project: p }: { project: Project }) {
  const meta = [
    { label: 'ROLE', value: p.role },
    { label: 'TIMELINE', value: p.timeline },
    { label: 'TEAM', value: p.team },
    { label: 'STATUS', value: p.status },
  ];
  return (
    <section className="deep sec pd-head">
      <div className="wrap">
        <Link href="/#projects" className="pd-back">
          <ArrowRightIcon style={{ transform: 'scaleX(-1)' }} /> All projects
        </Link>
        <div className="eyebrow">
          <i />
          {p.category.toUpperCase()} · {p.year}
        </div>
        <h1 className="pd-title">{p.title}</h1>
        <p className="pd-tag">{p.tagline}</p>
        <dl className="pd-meta">
          {meta.map((m) => (
            <div key={m.label}>
              <dt>{m.label}</dt>
              <dd>{m.value}</dd>
            </div>
          ))}
        </dl>
        {!p.demo && (
          <div className="pd-cta">
            {p.links.live && <Button href={p.links.live}>Live demo</Button>}
            {p.links.repo && (
              <Button variant="alt" href={p.links.repo}>
                Source code
              </Button>
            )}
          </div>
        )}

        <dl className="pd-meta">
          {p.demo && (
            <>
              <div>
                <dt>Demo Email</dt>
                <dd style={{ wordBreak: 'break-all' }}>{p.demo.email}</dd>
              </div>
              <div>
                <dt>Demo Password</dt>
                <dd style={{ wordBreak: 'break-all' }}>{p.demo.password}</dd>
              </div>
              {p.demo.url && (
                <div>
                  <dt>Live Demo</dt>
                  <dd>
                    <a href={p.demo.url} target="_blank" rel="noopener noreferrer">
                      Open the system
                    </a>
                  </dd>
                </div>
              )}
              {p.demo.source && (
                <div>
                  <dt>Source Code</dt>
                  <dd>
                    <a href={p.demo.source} target="_blank" rel="noopener noreferrer">
                      View on GitHub
                    </a>
                  </dd>
                </div>
              )}
            </>
          )}
        </dl>

        <div className="pd-cover">
          <ProjectShot
            src={p.image}
            label={`${p.title} cover screenshot, 1600×900`}
            sizes="(max-width: 1240px) 100vw, 1192px"
            priority
          />
        </div>
      </div>
    </section>
  );
}

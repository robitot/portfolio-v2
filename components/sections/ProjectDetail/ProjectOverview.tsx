import type { Project } from '@/types';
import Eyebrow from '@/components/ui/Eyebrow/Eyebrow';
import Reveal from '@/components/ui/Reveal/Reveal';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

export default function ProjectOverview({ project: p }: { project: Project }) {
  return (
    <section className="cream sec" aria-labelledby="h-overview">
      <div className="wrap">
        <Eyebrow>OVERVIEW</Eyebrow>
        <SectionHeading id="h-overview">The problem and the fix.</SectionHeading>
        <div className="pd-two">
          <Reveal className="pd-card">
            <h3>THE PROBLEM</h3>
            <p>{p.problem}</p>
          </Reveal>
          <Reveal className="pd-card dk" delay="80ms">
            <h3>MY SOLUTION</h3>
            <p>{p.solution}</p>
          </Reveal>
        </div>
        {/* <div className="pd-stats">
          {p.metrics.map((m, i) => (
            <Reveal key={m.label} className="pd-stat" delay={`${i * 70}ms`}>
              <b>{m.value}</b>
              <span>{m.label}</span>
            </Reveal>
          ))}
        </div> */}
        <Eyebrow style={{ marginTop: 72 }}>KEY FEATURES</Eyebrow>
        <div className="pd-feats">
          {p.features.map((f, i) => (
            <Reveal as="article" key={f.title} className="pd-feat" delay={`${i * 70}ms`}>
              <span className="pd-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </Reveal>
          ))}
        </div>

        
      </div>
    </section>
  );
}

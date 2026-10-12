import type { Project } from '@/types';
import Eyebrow from '@/components/ui/Eyebrow/Eyebrow';
import Reveal from '@/components/ui/Reveal/Reveal';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import Tag from '@/components/ui/Tag/Tag';

export default function ProjectStack({ project: p }: { project: Project }) {
  return (
    <section className="deep sec" aria-labelledby="h-stack">
      <div className="wrap">
        <Eyebrow>TECH STACK</Eyebrow>
        <SectionHeading id="h-stack">Built with.</SectionHeading>
        <div className="pd-stack">
          {p.stack.map((g, i) => (
            <Reveal key={g.label} className="pd-box" delay={`${i * 70}ms`}>
              <h3>{g.label.toUpperCase()}</h3>
              <div className="tags" style={{ marginTop: 0 }}>
                {g.items.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
        <Eyebrow style={{ marginTop: 72 }}>CHALLENGES AND LEARNINGS</Eyebrow>
        <div className="pd-two" style={{ marginTop: 24 }}>
          {p.challenges.map((c, i) => (
            <Reveal key={c.title} className="pd-box" delay={`${i * 70}ms`}>
              <h4>{c.title}</h4>
              <p>{c.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Project } from '@/types';
import Eyebrow from '@/components/ui/Eyebrow/Eyebrow';
import Reveal from '@/components/ui/Reveal/Reveal';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import ProjectShot from '@/components/ui/ProjectShot/ProjectShot';

export default function ProjectGallery({ project: p }: { project: Project }) {
  const shots = [0, 1, 2].map((i) => ({
    src: p.gallery?.[i],
    label: `${p.title} screenshot ${i + 1}, 1600×900`,
  }));
  return (
    <section className="cream sec" aria-labelledby="h-gallery">
      <div className="wrap">
        <Eyebrow>GALLERY</Eyebrow>
        <SectionHeading id="h-gallery">A closer look.</SectionHeading>
        <div className="pd-gallery">
          {shots.map((s, i) => (
            <Reveal key={i} className={i === 0 ? 'pd-g0' : ''} delay={`${i * 70}ms`}>
              <ProjectShot src={s.src} label={s.label} sizes="(max-width: 860px) 100vw, 600px" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

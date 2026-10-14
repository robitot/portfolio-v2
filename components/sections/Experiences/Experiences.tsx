import { EXPERIENCE } from '@/data/experience';
import Eyebrow from '@/components/ui/Eyebrow/Eyebrow';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import ExperienceCard from './ExperienceCard';
import './Experiences.css';

export default function Experiences() {
  return (
    <section className="cream sec" id="experiences" aria-labelledby="h-exp">
      <div className="wrap">
        <Eyebrow>01 / EXPERIENCES </Eyebrow>
        <SectionHeading id="h-exp">Where I&apos;ve built things.</SectionHeading>
        <div className="tl">
          {EXPERIENCE.map((e, i) => (
            <ExperienceCard key={`${e.company}-${e.dates}`} experience={e} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

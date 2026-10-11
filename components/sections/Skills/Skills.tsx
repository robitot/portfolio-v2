import Eyebrow from '@/components/ui/Eyebrow/Eyebrow';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import SkillsGrid from './SkillsGrid';
import SkillsMarquee from './SkillsMarquee';
import './Skills.css';

export default function Skills() {
  return (
    <section className="cream sec" id="skills" aria-labelledby="h-skills">
      <div className="wrap">
        <Eyebrow>03 / SKILLS</Eyebrow>
        <SectionHeading id="h-skills" style={{ marginBottom: 32 }}>
          The toolbox.
        </SectionHeading>
        <SkillsGrid />
      </div>
      <SkillsMarquee />
    </section>
  );
}

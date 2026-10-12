import Eyebrow from '@/components/ui/Eyebrow/Eyebrow';
import Reveal from '@/components/ui/Reveal/Reveal';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import ProjectsGrid from './ProjectsGrid';
import './Projects.css';

export default function Projects() {
  return (
    <section className="pj-sec sec" id="projects" aria-labelledby="h-projects">
      <div className="wrap">
        <Eyebrow>02 / PERSONAL PROJECTS</Eyebrow>
        <SectionHeading id="h-projects">Things I&apos;ve made.</SectionHeading>
        <Reveal as="p" className="pj-intro">
          A few personal projects that show how I think and build. Open any card for the full case
          study: the problem, my approach, the stack and what I learned.
        </Reveal>
        <ProjectsGrid />
      </div>
    </section>
  );
}

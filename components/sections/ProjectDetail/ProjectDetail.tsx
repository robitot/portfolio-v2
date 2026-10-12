import type { Project } from '@/types';
import PixelStairDivider from '@/components/ui/PixelStairDivider/PixelStairDivider';
import ProjectCta from './ProjectCta';
import ProjectGallery from './ProjectGallery';
import ProjectHeader from './ProjectHeader';
import ProjectOverview from './ProjectOverview';
import ProjectPager from './ProjectPager';
import ProjectStack from './ProjectStack';
import './ProjectDetail.css';

/** Case-study page for a single project. Content comes from data/projects.ts. */
export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <main>
      <ProjectHeader project={project} />
      <PixelStairDivider color="var(--cream)" />
      <ProjectOverview project={project} />
      <PixelStairDivider color="var(--deep)" />
      <ProjectStack project={project} />
      <PixelStairDivider color="var(--cream)" />
      <ProjectGallery project={project} />
      <div className="cream" style={{ paddingTop: 64, paddingBottom: 96 }}>
        <div className="wrap" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <ProjectPager slug={project.slug} />
        </div>
      </div>
      <PixelStairDivider color="var(--deep)" />
      <ProjectCta />
    </main>
  );
}

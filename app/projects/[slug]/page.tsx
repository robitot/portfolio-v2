import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageShell from '@/components/layout/PageShell';
import ProjectDetail from '@/components/sections/ProjectDetail/ProjectDetail';
import { getProject, PROJECTS } from '@/data/projects';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: `${project.title} | Robby Cruz`, description: project.summary };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return (
    <PageShell>
      <ProjectDetail project={project} />
    </PageShell>
  );
}

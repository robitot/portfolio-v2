import Link from 'next/link';
import { getAdjacent } from '@/data/projects';
import Reveal from '@/components/ui/Reveal/Reveal';
import ArrowRightIcon from '@/components/ui/icons/ArrowRightIcon';

/** Previous / next project cards at the bottom of a detail page. */
export default function ProjectPager({ slug }: { slug: string }) {
  const { prev, next } = getAdjacent(slug);
  return (
    <nav className="pd-pager" aria-label="More projects">
      <Reveal>
        <Link href={`/projects/${prev.slug}`} className="pd-pg">
          <span>
            <ArrowRightIcon style={{ transform: 'scaleX(-1)' }} /> PREVIOUS
          </span>
          <b>{prev.title}</b>
        </Link>
      </Reveal>
      <Reveal delay="70ms">
        <Link href={`/projects/${next.slug}`} className="pd-pg r">
          <span>
            NEXT <ArrowRightIcon />
          </span>
          <b>{next.title}</b>
        </Link>
      </Reveal>
    </nav>
  );
}

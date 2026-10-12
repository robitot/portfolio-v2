import Button from '@/components/ui/Button/Button';
import Eyebrow from '@/components/ui/Eyebrow/Eyebrow';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

export default function ProjectCta() {
  return (
    <section className="deep sec" aria-labelledby="h-cta">
      <div className="wrap" style={{ paddingBottom: 140 }}>
        <Eyebrow>NEXT STEP</Eyebrow>
        <SectionHeading id="h-cta" style={{ marginBottom: 32 }}>
          Like what you see?
        </SectionHeading>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          <Button href="/#contact">Get in touch</Button>
          <Button variant="alt" href="/#projects">
            More projects
          </Button>
        </div>
      </div>
    </section>
  );
}

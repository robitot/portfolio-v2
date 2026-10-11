import { CERTIFICATES } from '@/data/certificates';
import { PROFILE } from '@/data/profile';
import Eyebrow from '@/components/ui/Eyebrow/Eyebrow';
import Reveal from '@/components/ui/Reveal/Reveal';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import CertificateCard from './CertificateCard';
import EducationList from './EducationList';
import StatsRow from './StatsRow';
import './About.css';

export default function About() {
  return (
    <section className="deep sec" id="about" aria-labelledby="h-about">
      <div className="wrap">
        <Eyebrow>02 / ABOUT ME</Eyebrow>
        <SectionHeading id="h-about">Full Stack Developer.</SectionHeading>
        <div className="about-g">
          <Reveal>
            {/*
              Placeholder. To use your real photo, put it at public/images/profile.jpg and replace this div with:
              <Image src="/images/profile.jpg" alt="Portrait of Robby Cruz" width={400} height={500} priority />
            */}
            <div
              className="ph photo"
              role="img"
              aria-label="Placeholder for a portrait of Robby Cruz"
            >
              [IMAGE: portrait of Robby, 400×500, rounded pixel-corner frame]
            </div>
          </Reveal>
          <div>
            <Reveal as="p" className="bio">
              {PROFILE.bio}
            </Reveal>
            <Reveal className="aihl">
              <span className="aitag">AI-POWERED DEVELOPER</span>
              <p>{PROFILE.aiBlurb}</p>
            </Reveal>
            <StatsRow />
          </div>
        </div>
        <EducationList />
        <Eyebrow style={{ marginTop: 72 }}>CERTIFICATES</Eyebrow>
        <div className="certs">
          {CERTIFICATES.map((c, i) => (
            <CertificateCard key={c.name} cert={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

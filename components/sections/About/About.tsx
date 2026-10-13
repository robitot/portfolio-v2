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
              <img
                alt="Portrait of Robby Cruz"
                width={400}
                height={500}
                src="https://scontent.fmnl17-7.fna.fbcdn.net/v/t39.30808-6/787405935_4704879399754254_1841293413869909329_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=xdTPSVEXB5kQ7kNvwEa0eMZ&_nc_oc=AdrOZGm6Y9HKNWfJAjhd374Ne_SD6OyCf1T7NnLgPb9BUCOLhWepAJEkln8cKXLvAsI&_nc_zt=23&_nc_ht=scontent.fmnl17-7.fna&_nc_gid=X7sbyGwGx_YmTQFKIJyClQ&_nc_ss=7b2a8&oh=00_AQNnqoKr1KvDboxNLYILOvTZrIrmoxgMewx-aoniF-JIMA&oe=6AD16B65"
              />
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
        <Reveal className="aihl">
          <span className="aitag">WHAT I CAN DO?</span>
          <p>{PROFILE.services}</p>
        </Reveal>
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

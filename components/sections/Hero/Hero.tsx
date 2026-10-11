import { PROFILE } from '@/data/profile';
import Button from '@/components/ui/Button/Button';
import { ArrowDownIcon, PinIcon } from '@/components/ui/icons';
import PixelCloud from '@/components/ui/icons/PixelCloud';
import SocialIcon from '@/components/ui/icons/SocialIcon';
import HeroScene from './HeroScene';
import Typewriter from './Typewriter';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero sec" id="hero" aria-label="Introduction">
      <div className="bgc" aria-hidden="true">
        <PixelCloud className="c1" />
        <PixelCloud className="c2" />
        <PixelCloud className="c3" />
      </div>
      <div className="bands" aria-hidden="true" />
      <div className="hero-in">
        <div>
          <p className="greet">
            <span>&gt; hello, world_</span>
            <span className="caret" aria-hidden="true" />
          </p>
          <h1 className="h-name" style={{ margin: '22px 0 28px' }}>
            {PROFILE.name}
          </h1>
          <Typewriter />
          <p className="pitch">{PROFILE.pitch}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            <Button href="#experiences">View Experience</Button>
            {/* Drop your resume PDF at public/resume.pdf */}
            <Button variant="alt" href={PROFILE.resumeUrl} download>
              Download Resume
            </Button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, margin: '28px 0' }}>
            {PROFILE.socials.map((s) => (
              <a key={s.kind} className="soc" href={s.href} aria-label={s.label}>
                <SocialIcon kind={s.kind} />
              </a>
            ))}
          </div>
          <p className="chip-loc">
            <PinIcon style={{ width: 18, height: 18 }} />
            {PROFILE.location}
          </p>
        </div>
        <HeroScene />
      </div>
      <a className="scrolldn" href="#experiences" aria-label="Scroll to experiences">
        <ArrowDownIcon />
      </a>
    </section>
  );
}

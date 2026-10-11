import { NAV } from '@/data/navigation';
import { PROFILE } from '@/data/profile';
import { HeartIcon, RocketIcon } from '@/components/ui/icons';
import SocialIcon from '@/components/ui/icons/SocialIcon';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-in">
        <div className="foot-top">
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span className="logo">
              <b>RC</b>
            </span>
            <p style={{ fontWeight: 500, fontSize: 16 }}>Full Stack Developer · Quezon City, PH</p>
          </div>
          <nav className="nl-row" aria-label="Footer">
            {NAV.map((n) => (
              <a key={n.id} className="nl" href={`#${n.id}`}>
                {n.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="foot-top">
          <div style={{ display: 'flex', gap: 12 }}>
            {PROFILE.socials.map((s) => (
              <a key={s.kind} className="soc" href={s.href} aria-label={s.label}>
                <SocialIcon kind={s.kind} />
              </a>
            ))}
          </div>
          <a className="btn up" href="#top">
            <RocketIcon />
            Back to top
          </a>
        </div>
        <div className="foot-b">
          <p>
            © 2026 {PROFILE.name}. Built with Next.js &amp; React &amp;{' '}
            <HeartIcon className="heart" />
          </p>
          <p
            style={{
              fontFamily: 'var(--font-press), ui-monospace, monospace',
              fontSize: 9,
              color: 'var(--sky)',
            }}
          >
            RC // 2026
          </p>
        </div>
      </div>
    </footer>
  );
}

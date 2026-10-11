import { PROFILE } from '@/data/profile';
import Button from '@/components/ui/Button/Button';
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon, PinIcon } from '@/components/ui/icons';
import Reveal from '@/components/ui/Reveal/Reveal';

const social = (kind: 'li' | 'gh') => PROFILE.socials.find((s) => s.kind === kind)?.href ?? '#';

export default function ContactInfo() {
  return (
    <Reveal>
      <ul className="clist">
        <li>
          <a href={`mailto:${PROFILE.email}`}>
            <span className="ib">
              <MailIcon />
            </span>
            {PROFILE.email}
          </a>
        </li>
        <li>
          <a href={`tel:${PROFILE.phone}`}>
            <span className="ib">
              <PhoneIcon />
            </span>
            {PROFILE.phone}
          </a>
        </li>
        <li>
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              fontSize: 18,
              fontWeight: 500,
              padding: '6px 0',
            }}
          >
            <span className="ib">
              <PinIcon />
            </span>
            {PROFILE.location}
          </span>
        </li>
      </ul>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 32 }}>
        <Button href={social('li')}>
          <LinkedInIcon />
          LinkedIn
        </Button>
        <Button variant="alt" href={social('gh')}>
          <GitHubIcon />
          GitHub
        </Button>
      </div>
    </Reveal>
  );
}

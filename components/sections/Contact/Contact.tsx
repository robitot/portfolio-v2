import Eyebrow from '@/components/ui/Eyebrow/Eyebrow';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import PeekingCharacter from './PeekingCharacter';
import './Contact.css';

export default function Contact() {
  return (
    <section className="deep sec ct-sec" id="contact" aria-labelledby="h-contact">
      <div className="wrap">
        <Eyebrow>04 / CONTACT ME</Eyebrow>
        <SectionHeading id="h-contact" style={{ marginBottom: 56 }}>
          Let&apos;s build something together.
        </SectionHeading>
        <div className="ct-g">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
      <PeekingCharacter />
    </section>
  );
}

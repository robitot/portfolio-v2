import Image from 'next/image';
import type { Certificate } from '@/types';
import Reveal from '@/components/ui/Reveal/Reveal';

export default function CertificateCard({ cert, index }: { cert: Certificate; index: number }) {
  return (
    <Reveal as="article" className="cert" delay={`${index * 70}ms`}>
      <b>{cert.name}</b>
      <span className="top">{cert.rank}</span>
      <span>
        {cert.issuer} · {cert.date}
      </span>
      <a className="clink" href={cert.url}>
        View certificate
      </a>
    </Reveal>
  );
}

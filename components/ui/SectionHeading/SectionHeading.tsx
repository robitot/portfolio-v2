import type { CSSProperties, ReactNode } from 'react';
import Reveal from '../Reveal/Reveal';

export default function SectionHeading({
  id,
  children,
  style,
}: {
  id: string;
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <Reveal as="h2" className="h2" id={id} style={style}>
      {children}
    </Reveal>
  );
}

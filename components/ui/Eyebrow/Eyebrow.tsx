import type { CSSProperties, ReactNode } from 'react';
import Reveal from '../Reveal/Reveal';

export default function Eyebrow({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <Reveal className="eyebrow" style={style}>
      <i />
      {children}
    </Reveal>
  );
}

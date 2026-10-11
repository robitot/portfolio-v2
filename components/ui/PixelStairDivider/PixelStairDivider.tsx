import type { CSSProperties } from 'react';
import './PixelStairDivider.css';

/** `color` is the colour of the section BELOW the divider, e.g. 'var(--cream)'. */
export default function PixelStairDivider({ color }: { color: string }) {
  return <div className="stair" style={{ '--n': color } as CSSProperties} aria-hidden="true" />;
}

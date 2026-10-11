'use client';

import type { CSSProperties, ElementType, HTMLAttributes } from 'react';
import { useReveal } from '@/hooks/useReveal';

type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  /** Stagger delay, e.g. '80ms' (sets the --d CSS variable). */
  delay?: string;
};

/** Fade-and-slide wrapper: adds `.in` once it scrolls into view. Styles live in globals.css (.rv). */
export default function Reveal({
  as: Tag = 'div',
  delay,
  className = '',
  style,
  children,
  ...rest
}: RevealProps) {
  const { ref, inView } = useReveal<HTMLElement>();
  const merged = { ...style, ...(delay ? { '--d': delay } : {}) } as CSSProperties;
  return (
    <Tag
      ref={ref}
      className={`rv ${inView ? 'in' : ''} ${className}`.trim()}
      style={merged}
      {...rest}
    >
      {children}
    </Tag>
  );
}

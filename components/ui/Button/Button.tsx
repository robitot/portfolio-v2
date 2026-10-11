import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Common = { variant?: 'primary' | 'alt'; className?: string; children: ReactNode };
type AsLink = Common & { href: string } & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    'className' | 'children'
  >;
type AsButton = Common & { href?: undefined } & Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'className' | 'children'
  >;

/** Pixel button. Renders an <a> when `href` is given, otherwise a <button>. */
export default function Button(props: AsLink | AsButton) {
  const { variant = 'primary', className = '', children, ...rest } = props;
  const cls = `btn ${variant === 'alt' ? 'alt' : ''} ${className}`.replace(/\s+/g, ' ').trim();
  if ('href' in rest && rest.href !== undefined) {
    return (
      <a className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} type="button" {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

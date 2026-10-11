import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const dmSans = localFont({
  src: [
    { path: './fonts/dm-sans-latin-400-normal.woff2', weight: '400' },
    { path: './fonts/dm-sans-latin-500-normal.woff2', weight: '500' },
    { path: './fonts/dm-sans-latin-700-normal.woff2', weight: '700' },
  ],
  variable: '--font-dm',
  display: 'swap',
});
const spaceGrotesk = localFont({
  src: [
    { path: './fonts/space-grotesk-latin-500-normal.woff2', weight: '500' },
    { path: './fonts/space-grotesk-latin-700-normal.woff2', weight: '700' },
  ],
  variable: '--font-grotesk',
  display: 'swap',
});
const pressStart = localFont({
  src: './fonts/press-start-2p-latin-400-normal.woff2',
  weight: '400',
  variable: '--font-press',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: 'Robby Cruz | Full Stack Developer',
  description:
    'Robby Cruz is a Full Stack Developer in Quezon City with 3+ years building responsive web apps and PWAs using React.js, Next.js, .NET, and AWS Serverless.',
  openGraph: {
    title: 'Robby Cruz | Full Stack Developer',
    description:
      'Full Stack Developer building responsive web apps and PWAs with React.js, Next.js, .NET, and AWS Serverless.',
    type: 'website',
    // TODO: add public/images/og.png (1200x630)
    images: ['/images/og.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${spaceGrotesk.variable} ${pressStart.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

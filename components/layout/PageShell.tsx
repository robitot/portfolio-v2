import type { ReactNode } from 'react';
import Footer from '@/components/layout/Footer/Footer';
import JsFlag from '@/components/layout/JsFlag';
import Navbar from '@/components/layout/Navbar/Navbar';
import PixelCursor from '@/components/layout/PixelCursor/PixelCursor';
import ScrollProgress from '@/components/layout/ScrollProgress/ScrollProgress';
import PixelStairDivider from '@/components/ui/PixelStairDivider/PixelStairDivider';

/** Wrapper shared by every page: cursor, progress bar, navbar, footer. Pages supply their own <main>. */
export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="pf" id="top">
      <JsFlag />
      <ScrollProgress />
      <PixelCursor />
      <Navbar />
      {children}
      <PixelStairDivider color="var(--deep-d)" />
      <Footer />
    </div>
  );
}

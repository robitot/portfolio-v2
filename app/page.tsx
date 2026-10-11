import Footer from '@/components/layout/Footer/Footer';
import JsFlag from '@/components/layout/JsFlag';
import Navbar from '@/components/layout/Navbar/Navbar';
import PixelCursor from '@/components/layout/PixelCursor/PixelCursor';
import ScrollProgress from '@/components/layout/ScrollProgress/ScrollProgress';
import About from '@/components/sections/About/About';
import Contact from '@/components/sections/Contact/Contact';
import Experiences from '@/components/sections/Experiences/Experiences';
import Hero from '@/components/sections/Hero/Hero';
import Skills from '@/components/sections/Skills/Skills';
import PixelStairDivider from '@/components/ui/PixelStairDivider/PixelStairDivider';

export default function Home() {
  return (
    <div className="pf" id="top">
      <JsFlag />
      <ScrollProgress />
      <PixelCursor />
      <Navbar />
      <main>
        <Hero />
        <PixelStairDivider color="var(--cream)" />
        <Experiences />
        <PixelStairDivider color="var(--deep)" />
        <About />
        <PixelStairDivider color="var(--cream)" />
        <Skills />
        <PixelStairDivider color="var(--deep)" />
        <Contact />
      </main>
      <PixelStairDivider color="var(--deep-d)" />
      <Footer />
    </div>
  );
}

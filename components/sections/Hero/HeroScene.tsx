'use client';

import { useRef } from 'react';
import { useBlink } from '@/hooks/useBlink';
import { useHeadTracking } from '@/hooks/useHeadTracking';
import { useIdleLook } from '@/hooks/useIdleLook';
import { useParallax } from '@/hooks/useParallax';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useWave } from '@/hooks/useWave';
import PixelDeveloper from './PixelDeveloper';

/** The framed pixel scene: parallax decorations + the cursor-following developer. */
export default function HeroScene() {
  const reduced = useReducedMotion();
  const artRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<SVGGElement>(null);
  const tracker = useHeadTracking(headRef, reduced);
  useIdleLook(tracker, reduced);
  useParallax(artRef, reduced);
  const blink = useBlink(reduced);
  const { wave, trigger } = useWave();

  return (
    <div className="art" id="art" ref={artRef}>
      <div className="plx" data-d="14" style={{ top: '7%', left: '6%', width: '19%' }}>
        <div className="drift">
          <svg
            viewBox="0 0 20 8"
            shapeRendering="crispEdges"
            aria-hidden="true"
            style={{ display: 'block', fill: '#FFF8E1' }}
          >
            <rect x="8" y="0" width="4" height="2" />
            <rect x="5" y="2" width="9" height="2" />
            <rect x="3" y="4" width="14" height="2" />
            <rect x="1" y="6" width="18" height="2" />
          </svg>
        </div>
      </div>
      <div className="plx" data-d="22" style={{ top: '15%', right: '7%', width: '24%' }}>
        <div className="drift b">
          <svg
            viewBox="0 0 20 8"
            shapeRendering="crispEdges"
            aria-hidden="true"
            style={{ display: 'block', fill: '#FFF8E1' }}
          >
            <rect x="8" y="0" width="4" height="2" />
            <rect x="5" y="2" width="9" height="2" />
            <rect x="3" y="4" width="14" height="2" />
            <rect x="1" y="6" width="18" height="2" />
          </svg>
        </div>
      </div>
      <div className="plx" data-d="30" style={{ top: '11%', left: '46%', width: '4%' }}>
        <div className="drift c">
          <svg
            viewBox="0 0 7 7"
            shapeRendering="crispEdges"
            aria-hidden="true"
            style={{ display: 'block', fill: '#086288' }}
          >
            <rect x="3" y="0" width="1" height="7" />
            <rect x="0" y="3" width="7" height="1" />
            <rect x="2" y="2" width="3" height="3" />
          </svg>
        </div>
      </div>
      <div className="plx" data-d="38" style={{ top: '36%', right: '5%', width: '3.5%' }}>
        <div className="drift">
          <svg
            viewBox="0 0 7 7"
            shapeRendering="crispEdges"
            aria-hidden="true"
            style={{ display: 'block', fill: '#086288' }}
          >
            <rect x="3" y="0" width="1" height="7" />
            <rect x="0" y="3" width="7" height="1" />
            <rect x="2" y="2" width="3" height="3" />
          </svg>
        </div>
      </div>
      <div className="plx" data-d="26" style={{ top: '42%', left: '4%', width: '3.5%' }}>
        <div className="drift b">
          <svg
            viewBox="0 0 7 7"
            shapeRendering="crispEdges"
            aria-hidden="true"
            style={{ display: 'block', fill: '#FFF8E1' }}
          >
            <rect x="3" y="0" width="1" height="7" />
            <rect x="0" y="3" width="7" height="1" />
            <rect x="2" y="2" width="3" height="3" />
          </svg>
        </div>
      </div>
      <div className="plx" data-d="34" style={{ top: '27%', left: '10%' }}>
        <div className="drift c">
          <span className="glyph" aria-hidden="true">
            {'{ }'}
          </span>
        </div>
      </div>
      <div className="plx" data-d="42" style={{ top: '50%', right: '10%' }}>
        <div className="drift">
          <span className="glyph" aria-hidden="true">
            &lt;/&gt;
          </span>
        </div>
      </div>
      <div className="plx" data-d="18" style={{ top: '5%', left: '30%' }}>
        <div className="drift b">
          <span className="glyph" aria-hidden="true">
            ;
          </span>
        </div>
      </div>
      <div className="plx" data-d="10" style={{ bottom: '26%', right: '3%', width: '27%' }}>
        <div className="drift b">
          <div className="lap">
            <svg
              viewBox="0 0 26 18"
              shapeRendering="crispEdges"
              aria-hidden="true"
              style={{ display: 'block', width: '100%', height: 'auto' }}
            >
              <rect x="2" y="0" width="22" height="14" fill="#043A52" />
              <rect x="3" y="1" width="20" height="12" fill="#086288" />
              <rect x="3" y="1" width="20" height="2" fill="#4D8DBA" />
              <text
                x="13"
                y="10"
                textAnchor="middle"
                style={{ fontFamily: 'var(--font-press), monospace' }}
                fontSize="5.5"
                fill="#97D7FF"
              >
                &lt;/&gt;
              </text>
              <rect x="0" y="14" width="26" height="3" fill="#4D8DBA" />
              <rect x="0" y="17" width="26" height="1" fill="#043A52" />
              <rect x="10" y="14" width="6" height="1" fill="#043A52" />
            </svg>
          </div>
        </div>
      </div>
      <PixelDeveloper
        frame={reduced ? 'fwd' : tracker.frame}
        blink={blink}
        wave={wave}
        onWave={trigger}
        headRef={headRef}
      />
    </div>
  );
}

import type { RefObject } from 'react';
import { FRAMES, type Frame } from '@/lib/pixelFrames';

interface Props {
  frame: Frame;
  blink: boolean;
  wave: boolean;
  onWave: () => void;
  headRef: RefObject<SVGGElement | null>;
}

/** The pixel-art developer. The head/face/pupils shift per frame; click to wave. */
export default function PixelDeveloper({ frame, blink, wave, onWave, headRef }: Props) {
  const f = FRAMES[frame];
  return (
    <button
      className="charbtn"
      type="button"
      aria-label="Wave hello to the pixel developer"
      onClick={onWave}
    >
      <svg
        className="char"
        viewBox="0 0 64 56"
        shapeRendering="crispEdges"
        role="img"
        aria-label="Pixel-art developer at a desk who looks toward your cursor"
      >
        <g className="bob">
          <rect x="14" y="35" width="6" height="11" fill="#4D8DBA" />
          <rect x="18" y="33" width="28" height="13" fill="#4D8DBA" />
          <rect x="20" y="32" width="24" height="1" fill="#4D8DBA" />
          <rect x="38" y="33" width="8" height="13" fill="#086288" />
          <rect x="28" y="29" width="8" height="5" fill="#E8D29C" />
          <rect x="26" y="33" width="12" height="2" fill="#97D7FF" />
          <rect x="29" y="36" width="1" height="5" fill="#FFEFC4" />
          <rect x="34" y="36" width="1" height="5" fill="#FFEFC4" />
          {!wave && (
            <>
              <rect x="46" y="35" width="6" height="11" fill="#4D8DBA" />
            </>
          )}
          {wave && (
            <>
              <g className="wavearm">
                <rect x="46" y="22" width="6" height="14" fill="#4D8DBA" />
                <rect x="46" y="18" width="6" height="5" fill="#FFEFC4" />
              </g>
              <rect
                x="47"
                y="2"
                width="10"
                height="11"
                fill="#FFF8E1"
                stroke="#043A52"
                strokeWidth="1"
              />
              <rect x="51" y="4" width="2" height="4" fill="#043A52" />
              <rect x="51" y="9" width="2" height="2" fill="#043A52" />
            </>
          )}
          <g id="rc-head" ref={headRef} transform={`translate(${f[0]} ${f[1]})`}>
            <rect x="22" y="6" width="20" height="2" fill="#043A52" />
            <rect x="20" y="8" width="24" height="7" fill="#043A52" />
            <rect x="20" y="15" width="2" height="6" fill="#043A52" />
            <rect x="42" y="15" width="2" height="6" fill="#043A52" />
            <rect x="22" y="13" width="20" height="17" fill="#FFEFC4" />
            <rect x="20" y="21" width="2" height="5" fill="#FFEFC4" />
            <rect x="42" y="21" width="2" height="5" fill="#FFEFC4" />
            <rect x="22" y="13" width="8" height="2" fill="#043A52" />
            <rect x="35" y="13" width="7" height="1" fill="#043A52" />
            <rect x="22" y="29" width="20" height="1" fill="#E8D29C" />
            <g transform={`translate(${f[2]} ${f[3]})`}>
              <rect
                x="24.5"
                y="19.5"
                width="6"
                height="5"
                fill="#FFF8E1"
                stroke="#043A52"
                strokeWidth="1"
              />
              <rect
                x="33.5"
                y="19.5"
                width="6"
                height="5"
                fill="#FFF8E1"
                stroke="#043A52"
                strokeWidth="1"
              />
              <rect x="30" y="21" width="4" height="1" fill="#043A52" />
              {!blink && (
                <>
                  <rect x={27 + f[4]} y={21 + f[5]} width="2" height="2" fill="#043A52" />
                  <rect x={36 + f[4]} y={21 + f[5]} width="2" height="2" fill="#043A52" />
                </>
              )}
              {blink && (
                <>
                  <rect x="25" y="20" width="5" height="4" fill="#FFEFC4" />
                  <rect x="34" y="20" width="5" height="4" fill="#FFEFC4" />
                  <rect x="25" y="22" width="5" height="1" fill="#043A52" />
                  <rect x="34" y="22" width="5" height="1" fill="#043A52" />
                </>
              )}
              <rect x="31" y="25" width="2" height="1" fill="#E8D29C" />
              <rect x="29" y="27" width="6" height="1" fill="#043A52" />
              <rect x="28" y="26" width="1" height="1" fill="#043A52" />
              <rect x="35" y="26" width="1" height="1" fill="#043A52" />
            </g>
          </g>
        </g>
        <rect x="2" y="44" width="60" height="3" fill="#064E6D" />
        <rect x="2" y="44" width="60" height="1" fill="#97D7FF" />
        <rect x="6" y="47" width="3" height="9" fill="#064E6D" />
        <rect x="55" y="47" width="3" height="9" fill="#064E6D" />
        <rect x="9" y="40" width="5" height="4" fill="#FFEFC4" />
        <rect x="14" y="41" width="1" height="2" fill="#FFEFC4" />
        <rect x="10" y="40" width="3" height="1" fill="#4D8DBA" />
      </svg>
    </button>
  );
}

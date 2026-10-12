import Image from 'next/image';
import './ProjectShot.css';

interface Props {
  /** Image path under /public (e.g. '/images/projects/x.png'). Placeholder is shown when omitted. */
  src?: string;
  /** Text used for the placeholder label and as the image alt text */
  label: string;
  ratio?: string;
  sizes?: string;
  priority?: boolean;
}

/** Pixel browser-window frame around a screenshot (or a labeled placeholder). */
export default function ProjectShot({
  src,
  label,
  ratio = '16 / 9',
  sizes = '(max-width: 860px) 100vw, 600px',
  priority,
}: Props) {
  return (
    <div className="pj-shot">
      <div className="pj-bar" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="pj-view" style={{ aspectRatio: ratio }}>
        {src ? (
          <Image
            src={src}
            alt={label}
            fill
            sizes={sizes}
            priority={priority}
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <div className="pj-ph" role="img" aria-label={`Placeholder: ${label}`}>
            <span>[IMAGE: {label}]</span>
          </div>
        )}
      </div>
    </div>
  );
}

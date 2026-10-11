/** Little pixel character that peeks in from the bottom while the contact form has focus (see Contact.css). */
export default function PeekingCharacter() {
  return (
    <div className="peek" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="2" fill="#043A52" />
        <rect x="2" y="5" width="20" height="5" fill="#043A52" />
        <rect x="4" y="9" width="16" height="15" fill="#FFEFC4" />
        <rect x="4" y="9" width="6" height="2" fill="#043A52" />
        <rect x="7" y="14" width="4" height="4" fill="#FFF8E1" stroke="#043A52" strokeWidth="1" />
        <rect x="13" y="14" width="4" height="4" fill="#FFF8E1" stroke="#043A52" strokeWidth="1" />
        <rect x="8" y="15" width="2" height="2" fill="#043A52" />
        <rect x="14" y="15" width="2" height="2" fill="#043A52" />
        <rect x="9" y="20" width="6" height="1" fill="#043A52" />
        <g className="hand">
          <rect x="20" y="9" width="3" height="9" fill="#FFEFC4" />
          <rect x="20" y="7" width="3" height="3" fill="#FFEFC4" />
        </g>
      </svg>
    </div>
  );
}

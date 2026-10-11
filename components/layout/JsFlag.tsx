'use client';

import { useEffect } from 'react';

/** Adds the `js` class to .pf once hydrated, enabling the scroll-reveal start state (see .js .rv). */
export default function JsFlag() {
  useEffect(() => {
    document.querySelector('.pf')?.classList.add('js');
  }, []);
  return null;
}

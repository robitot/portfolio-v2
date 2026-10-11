import { useEffect, useState } from 'react';

/** Types and deletes each word in turn, returning the text currently shown. */
export function useTypewriter(words: readonly string[], reduced: boolean): string {
  const [text, setText] = useState(words[0]);
  useEffect(() => {
    if (reduced) {
      setText(words[0]);
      return;
    }
    let i = 0;
    let c = 0;
    let deleting = false;
    let id: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = words[i];
      if (!deleting) {
        c++;
        if (c >= word.length) {
          deleting = true;
          setText(word);
          id = setTimeout(tick, 1500);
          return;
        }
      } else {
        c--;
        if (c <= 0) {
          deleting = false;
          i = (i + 1) % words.length;
          c = 0;
        }
      }
      setText(word.slice(0, c));
      id = setTimeout(tick, deleting ? 36 : 72);
    };
    tick();
    return () => clearTimeout(id);
  }, [words, reduced]);
  return text;
}

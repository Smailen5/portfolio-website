import { useCallback, useEffect, useRef, useState } from 'react';

const DEFAULT_RESET_DELAY = 2000;

/**
 * Hook per copiare un testo negli appunti con feedback temporaneo.
 *
 * Espone `copied` per mostrare una conferma all'utente e `copy` per
 * eseguire la copia. Se il browser nega il permesso, `copy` restituisce
 * `false` senza lanciare eccezioni.
 *
 * @param {number} [resetDelay] - Millisecondi dopo i quali `copied` torna a false
 * @returns {{ copied: boolean, copy: (text: string) => Promise<boolean> }}
 */
export const useCopyToClipboard = (resetDelay = DEFAULT_RESET_DELAY) => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const copy = useCallback(
    async (text: string) => {
      try {
        await window.navigator.clipboard.writeText(text);
      } catch {
        setCopied(false);
        return false;
      }

      setCopied(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, resetDelay);

      return true;
    },
    [resetDelay]
  );

  return { copied, copy };
};

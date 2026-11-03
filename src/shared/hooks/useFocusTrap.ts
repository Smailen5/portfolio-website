import type { KeyboardEvent } from 'react';

const FOCUSABLE = 'a[href]:not(details:not([open]) a), button, summary';

/**
 * Hook useFocusTrap - Confina il focus dentro un contenitore
 *
 * Restituisce un gestore per `onKeyDown` che tiene il focus dentro all'interno dell'elemento
 * su cui viene agganciato finche' `isActive` e' `true`.
 * @param {boolean} isActive - Se il trap e' attivo (es. menu mobile aperto)
 * @param {() => void} onClose - Callback invocata alla pressione di Escape
 * @returns {(e: KeyboardEvent<HTMLElement>) => void} - Gestore da passare a onKeyDown
 */
export const useFocusTrap = (isActive: boolean, onClose: () => void) => {
  return (e: KeyboardEvent<HTMLElement>) => {
    if (!isActive) return;

    if (e.key === 'Escape') {
      onClose();
      return;
    }
    if (e.key !== 'Tab') return;

    const nodes = e.currentTarget.querySelectorAll<HTMLElement>(FOCUSABLE);
    const first = nodes[0];
    const last = nodes[nodes.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };
};

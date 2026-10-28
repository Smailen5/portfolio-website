const BOLD_PATTERN = /\*\*(.+?)\*\*/;

/**
 * Converte i marcatori `**testo**` in elementi `<strong>`.
 *
 * Usa `split` con un gruppo di cattura: il risultato alterna testo normale
 * (indici pari) e testo marcato (indici dispari). Restituisce nodi React,
 * quindi non serve `dangerouslySetInnerHTML` e non c'e' rischio di iniezione.
 *
 * Un `**` spaiato non viene riconosciuto e resta testo normale.
 */
export const renderBold = (text: string): React.ReactNode[] =>
  text
    .split(BOLD_PATTERN)
    .map((part, index) =>
      index % 2 === 1 ? <strong key={index}>{part}</strong> : part
    );

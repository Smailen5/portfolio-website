/**
 * Riconosce la sezione "Live Site URL:" del README e ne cattura il link.
 *
 * Cattura l'URL solo se racchiuso in un link markdown e con schema http/https.
 * Se la sezione manca o l'URL non e' valido, `getLiveUrl` restituisce `null`
 * e la card disabilita il pulsante "Live Site" invece di puntare a un link errato.
 */
const LIVE_URL_PATTERN = /Live Site URL:\s*\[[^\]]*\]\((https?:\/\/[^\s)]+)\)/i;

/**
 * Estrae l'URL del sito live dal contenuto markdown del README.
 *
 * @param {string | null | undefined} readmeContent - Contenuto markdown del README
 * @returns {string | null} L'URL del sito live, oppure `null` se non trovato
 */
export function getLiveUrl(
  readmeContent: string | null | undefined
): string | null {
  if (!readmeContent) return null;
  const match = readmeContent.match(LIVE_URL_PATTERN);
  return match ? match[1] : null;
}

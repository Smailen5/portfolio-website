/**
 * Estrae l'anno di sviluppo da una data in formato stringa.
 *
 * Usato dalle card dei progetti per il badge dell'anno di inizio.
 * Restituisce `null` se la data manca o non e' valida, cosi' la card
 * puo' evitare di mostrare un badge senza valore.
 *
 * @param {string | null | undefined} createdAt - Data di creazione del progetto
 * @returns {number | null} L'anno a 4 cifre, oppure `null` se non valido
 */
export function getProjectYear(
  createdAt: string | null | undefined
): number | null {
  if (!createdAt) return null;
  const date = new Date(createdAt);
  if (Number.isNaN(date.getTime())) return null;
  return date.getFullYear();
}

/**
 * Elenco curato delle tecnologie mostrate come filtro nella pagina progetti.
 *
 * Lista fissa (non derivata dai progetti) per evitare duplicati e
 * un'esplosione di pillole. "Tutto" azzera il filtro. Il confronto con i tag
 * dei progetti e' case-insensitive (vedi filterProjectsByTechnology).
 */
export const FILTER_TECHNOLOGIES = [
  'React',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'Next.js',
  'TanStack Router',
];

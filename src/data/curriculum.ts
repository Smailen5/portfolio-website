interface CurriculumFile {
  /** Testo visibile nel bottone, volutamente breve */
  label: string;
  /** Nome accessibile completo: il testo visibile da solo non spiega l'azione */
  ariaLabel: string;
  href: string;
  fileName: string;
}

/**
 * File del curriculum disponibili per il download.
 *
 * Fonte unica per i path dei PDF: oggi li consumano la CTA di `/about`,
 * la pagina contatti e il menu della navbar. Per aggiornare il CV si
 * cambia solo questo file.
 */
export const CURRICULUM_FILES: CurriculumFile[] = [
  {
    label: 'CV italiano',
    ariaLabel: 'Scarica il CV in italiano (PDF)',
    href: '/curriculum/cv-smailen-vargas-it.pdf',
    fileName: 'CV-Smailen-Vargas-IT.pdf',
  },
  {
    label: 'CV inglese',
    ariaLabel: 'Scarica il CV in inglese (PDF)',
    href: '/curriculum/cv-smailen-vargas-en.pdf',
    fileName: 'CV-Smailen-Vargas-EN.pdf',
  },
];

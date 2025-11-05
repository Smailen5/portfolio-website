import { framework, language, utility } from '@/data/skillsData';
import Skills from './Skills';
import Separator from '@/components/atoms/Separator';
import { H2 } from '@/components/atoms/heading';

/**
 * Componente SectionSkill - Sezione competenze tecniche
 *
 * Organizza e mostra le skill in tre categorie:
 * - Linguaggi (HTML, CSS, JavaScript, TypeScript)
 * - Framework e Librerie (React, Tailwind, etc.)
 * - Strumenti di Sviluppo (Git, Vite, pnpm, etc.)
 *
 * Layout responsive: colonna su mobile, grid 3 colonne su desktop
 */
export const SectionSkill = () => {
  return (
    <section className="mx-auto w-full text-center">
      <H2>Competenze acquisite</H2>

      <Separator />

      <main className="flex h-full w-full flex-col flex-wrap gap-12 md:grid md:grid-cols-3">
        <Skills section={language} title="Linguaggi" />
        <Skills section={framework} title="Framework e Librerie" />
        <Skills section={utility} title="Strumenti di Sviluppo" />
      </main>
    </section>
  );
};

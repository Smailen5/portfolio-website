import Separator from '@/components/atoms/Separator';
import { H2 } from '@/components/atoms/heading';
import { framework, language, utility } from '@/data/skillsData';
import { SkillCategory } from './Skills';

/**
 * Componente SkillsSection - Sezione competenze tecniche
 *
 * Organizza e mostra le skill in tre categorie:
 * - Linguaggi (HTML, CSS, JavaScript, TypeScript)
 * - Framework e Librerie (React, Tailwind, etc.)
 * - Strumenti di Sviluppo (Git, Vite, pnpm, etc.)
 *
 * Layout responsive: colonna su mobile, grid 3 colonne su desktop
 */
export const SkillsSection = () => {
  return (
    <section className="mx-auto w-full text-center">
      <H2>Competenze acquisite</H2>

      <Separator />

      <main className="flex h-full w-full flex-col flex-wrap gap-12 md:grid md:grid-cols-3">
        <SkillCategory section={language} title="Linguaggi" />
        <SkillCategory section={framework} title="Framework e Librerie" />
        <SkillCategory section={utility} title="Strumenti di Sviluppo" />
      </main>
    </section>
  );
};

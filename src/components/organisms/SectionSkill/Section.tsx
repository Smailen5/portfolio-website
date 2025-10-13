import { framework, language, utility } from "@/data/skillsData";
import Skills from "./Skills";

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
    <section className="mx-auto flex w-full flex-col gap-4">
      <h2 className="text-primary-content">Competenze acquisite</h2>

      <main className="flex h-full w-full flex-col flex-wrap gap-12 md:grid md:grid-cols-3">
        <Skills section={language} title="Linguaggi" />
        <Skills section={framework} title="Framework e Librerie" />
        <Skills section={utility} title="Strumenti di Sviluppo" />
      </main>
    </section>
  );
};

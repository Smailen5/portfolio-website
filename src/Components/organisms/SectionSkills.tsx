import { ButtonAction } from "../atoms/ButtonAction";
import { Section } from "../atoms/Section";
import Skills from "../molecules/Skills";

export const SectionSkill = () => {
  const linguaggi = ["HTML5", "CSS3", "JavaScript", "TypeScript"];
  return (
    <section className="mx-auto flex w-full flex-col gap-8">
      <h3 className="text-center text-2xl font-semibold">
        Competenze acquisite
      </h3>
      <div className="flex h-full w-full flex-col flex-wrap gap-8 md:grid md:grid-cols-3">
        <Skills />

        {/* Questa e una prova */}
        <Section title="prova di title" content={linguaggi} />
        
        <div className="space-y-4 md:col-start-2">
          <h3 className="text-center text-2xl font-semibold">
            Guarda i miei lavori
          </h3>
          {/* Qui sarebbe bello mostrare gli ultimi lavori, massimo due o tre */}
          <ButtonAction navigateTo="projects" buttonClass="w-full">
            Portfolio
          </ButtonAction>
        </div>
      </div>
    </section>
  );
};

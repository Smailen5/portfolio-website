import { ButtonAction } from "../atoms/ButtonAction";
// import { Section } from "../atoms/Section";
import Skills from "../molecules/Skills";
import { framework, library, program } from "../../data/skillsData";

export const SectionSkill = () => {
  // const linguaggi = ["Git", "React", "JavaScript", "Tailwind"];
  return (
    <section className="mx-auto flex w-full flex-col gap-8">
      <h3 className="text-center text-2xl font-semibold">
        Competenze acquisite
      </h3>
      <div className="flex h-full w-full flex-col flex-wrap gap-8 md:grid md:grid-cols-3">
        <Skills program={program} title="Linguaggi" />
        <Skills program={framework} title="Framework e librerie" />
        <Skills program={library} title="Strumenti e Tecnologie " />

        {/* Questa e una prova */}
        {/* <Section title="prova di title" content={skillsData} /> */}
        
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

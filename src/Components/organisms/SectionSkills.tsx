import { framework, language, utility } from "../../data/skillsData";
import { ButtonAction } from "../atoms/ButtonAction";
import Skills from "../molecules/Skills";

export const SectionSkill = () => {
  return (
    <section className="mx-auto flex w-full flex-col gap-12">
      <h3 className="text-center text-3xl font-semibold">
        Competenze acquisite
      </h3>
      <div className="flex h-full w-full flex-col flex-wrap gap-12 md:grid md:grid-cols-3">
        <Skills section={language} title="Linguaggi" />
        <Skills section={framework} title="Framework e Librerie" />
        <Skills section={utility} title="Strumenti di Sviluppo" />

        <div className="space-y-12 md:col-start-2">
          <h3 className="text-center text-3xl font-semibold">
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

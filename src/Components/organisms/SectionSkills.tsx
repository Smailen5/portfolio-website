import { framework, language, utility } from "../../data/skillsData";
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
      </div>
    </section>
  );
};

import { framework, language, utility } from "../../data/skillsData";
import { Header } from "../atoms/Header";
import { Section } from "../atoms/Section";
import Skills from "../molecules/Skills";

export const SectionSkill = () => {
  return (
    <Section>
      <Header type="h2">Competenze acquisite</Header>

      <main className="flex h-full w-full flex-col flex-wrap gap-12 md:grid md:grid-cols-3">
        <Skills section={language} title="Linguaggi" />
        <Skills section={framework} title="Framework e Librerie" />
        <Skills section={utility} title="Strumenti di Sviluppo" />
      </main>
    </Section>
  );
};

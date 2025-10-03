import { framework, language, utility } from "@/data/skillsData";
import { Section } from "@components/atoms/Section";
import Skills from "./Skills";

export const SectionSkill = () => {
  return (
    <Section>
      <h2 className='text-primary-content'>Competenze acquisite</h2>

      <main className="flex h-full w-full flex-col flex-wrap gap-12 md:grid md:grid-cols-3">
        <Skills section={language} title="Linguaggi" />
        <Skills section={framework} title="Framework e Librerie" />
        <Skills section={utility} title="Strumenti di Sviluppo" />
      </main>
    </Section>
  );
};

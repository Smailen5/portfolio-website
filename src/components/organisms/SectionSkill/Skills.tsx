// import { Section } from "@components/atoms/Section";
import { H3 } from '@/components/atoms/heading';
import Skill from './Skill';

interface SkillsProps {
  title: string;
  section: { name: string; icon: string }[];
}

/**
 * Componente Skills - Sezione categoria di competenze
 *
 * Raggruppa e visualizza una categoria specifica di skill
 * (es: Linguaggi, Framework, Strumenti)
 *
 * Layout: grid responsive da 1 colonna (mobile) a 4 colonne (desktop)
 *
 * @param {string} title - Titolo della categoria (es: "Linguaggi")
 * @param {Array} section - Array di skill con nome e icona
 */
const Skills = ({ title, section }: SkillsProps) => {
  return (
    <>
      <section className="mx-auto flex w-full flex-col gap-10">
        <H3>{title}</H3>
        <ul className="grid gap-2 md:grid-cols-3 lg:grid-cols-4">
          {section.map(skill => (
            <Skill key={skill.name} {...skill} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Skills;

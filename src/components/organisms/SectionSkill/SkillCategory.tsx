// import { Section } from "@components/atoms/Section";
import { H3 } from '@/components/atoms/heading';
import Section from '@/components/atoms/Section';
import Separator from '@/components/atoms/Separator';
import { SkillCard } from './SkillCard';

interface SkillCategoryProps {
  title: string;
  section: { name: string; icon: string }[];
}

/**
 * Componente SkillCategory - Sezione categoria di competenze
 *
 * Raggruppa e visualizza una categoria specifica di skill
 * (es: Linguaggi, Framework, Strumenti)
 *
 * Layout: grid responsive da 1 colonna (mobile) a 4 colonne (desktop)
 *
 * @param {string} title - Titolo della categoria (es: "Linguaggi")
 * @param {Array} section - Array di skill con nome e icona
 */
export const SkillCategory = ({ title, section }: SkillCategoryProps) => {
  return (
    <>
      <Section>
        <H3>{title}</H3>

        <Separator />

        <ul className="grid gap-2 md:grid-cols-3 lg:grid-cols-4">
          {section.map(skill => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </ul>
      </Section>
    </>
  );
};

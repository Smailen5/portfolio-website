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
 * Layout responsive:
 * - Mobile: 2 colonne (grid-cols-2)
 * - Tablet: 3 colonne (md:grid-cols-3)
 * - Desktop: 4 colonne (lg:grid-cols-4)
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

        <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
          {section.map(skill => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </ul>
      </Section>
    </>
  );
};

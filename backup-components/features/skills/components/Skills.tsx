import { Header } from "@components/atoms/Header";
import { Section } from "@components/atoms/Section";
import Skill from "@features/skills/components/Skill";

interface SkillsProps {
  title: string;
  section: { name: string; icon: string }[];
}
const Skills = ({ title, section }: SkillsProps) => {

  return (
    <>
      <Section className="gap-10">
        <Header type="h3">
          {title}
        </Header>
        <ul className="grid gap-2 md:grid-cols-4">
          {section.map((skill) => (
            <Skill key={skill.name} {...skill} />
          ))}
        </ul>
      </Section>
    </>
  );
};

export default Skills;

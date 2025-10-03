import { Section } from "@components/atoms/Section";
import Skill from "./Skill";

interface SkillsProps {
  title: string;
  section: { name: string; icon: string }[];
}
const Skills = ({ title, section }: SkillsProps) => {

  return (
    <>
      <Section className="gap-10">
        <h3 className='text-secondary-content'>
          {title}
        </h3>
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

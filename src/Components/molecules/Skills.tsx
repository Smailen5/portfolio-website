import { Header } from "../atoms/Header";
import Skill from "../atoms/Skill";

interface SkillsProps {
  title: string;
  section: { name: string; icon: string }[];
}
const Skills = ({ title, section }: SkillsProps) => {

  return (
    <>
      <article className="space-y-12">
        <Header type="h3">
          {title}
        </Header>
        <ul className="grid gap-2 md:grid-cols-4">
          {section.map((skill) => (
            <Skill key={skill.name} {...skill} />
          ))}
        </ul>
      </article>
    </>
  );
};

export default Skills;

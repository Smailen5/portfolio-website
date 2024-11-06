import Skill from "../atoms/Skill";

interface SkillsProps {
  title: string;
  section: { name: string; icon: string }[];
}
const Skills = ({ title, section }: SkillsProps) => {

  return (
    <>
      <article className="space-y-12">
        <header>
          <h3 className="text-center text-xl font-semibold">{title}</h3>
        </header>
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

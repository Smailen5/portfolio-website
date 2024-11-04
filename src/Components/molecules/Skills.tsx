import Skill from "../atoms/Skill";

interface SkillsProps {
  title: string;
  program: { name: string; icon: string }[];
}
const Skills = ({ title, program }: SkillsProps) => {
  console.log(program);

  return (
    <>
      <div className="space-y-4">
        <header>
          <h3 className="text-center text-xl font-semibold">{title}</h3>
        </header>
        <ul className="grid gap-2 md:grid-cols-4">
          {program.map((skill) => (
            <Skill key={skill.name} {...skill} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Skills;

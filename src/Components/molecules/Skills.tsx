import skillsData from "../../data/skillsData";
import Skill from "../atoms/Skill";

interface SkillsProps {
  title: string;
}
const Skills = ({ title }: SkillsProps) => {
  return (
    <>
      <div className="space-y-4">
        <header>
          <h3 className="text-xl font-semibold">{title}</h3>
        </header>
        <ul className="grid grid-cols-4 gap-2">
          {skillsData.map((skill) => (
            <Skill key={skill.name} {...skill} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Skills;

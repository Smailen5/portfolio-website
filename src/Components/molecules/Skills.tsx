// import { SiNextui } from "react-icons/si";
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

      {/* {skillsData.map((skill) => {
        return <Skill key={skill.name} {...skill} />;
      })} */}
      {/* questa icona viene importata diversamente dalle altre */}
      {/* <div className="flex items-center justify-between rounded-md bg-card p-4 uppercase shadow-md shadow-secondary">
        <p className="font-semibold uppercase">NextUI</p>
        <SiNextui size={48} className="" />
      </div> */}
    </>
  );
};

export default Skills;

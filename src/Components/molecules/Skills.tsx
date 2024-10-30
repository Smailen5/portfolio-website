import { SiNextui } from "react-icons/si";
import skillsData from "../../data/skillsData";
import Skill from "../atoms/Skill";
const Skills = () => {
  return (
    <>
      {skillsData.map((skill) => {
        return <Skill key={skill.name} {...skill} />;
      })}
      {/* questa icona viene importata diversamente dalle altre */}
      <div className="flex items-center justify-between rounded-md bg-card p-4 uppercase shadow-md shadow-secondary">
        <p className="font-semibold uppercase">NextUI</p>
        <SiNextui size={48} className="" />
      </div>
    </>
  );
};

export default Skills;

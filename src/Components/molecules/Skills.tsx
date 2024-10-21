import { Button } from "@/Components/atoms/button";
import { GoProjectRoadmap } from "react-icons/go";
import { SiNextui } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import skillsData from "../../data/skillsData";
import Skill from "../atoms/Skill";
const Skills = () => {
  const navigate = useNavigate();

  return (
    <section className="mx-auto flex w-full flex-col gap-8">
      <h3 className="text-center text-2xl font-semibold">
        Competenze acquisite
      </h3>
      <div className="flex h-full w-full flex-col flex-wrap gap-8 md:grid md:grid-cols-3">
        {skillsData.map((skill) => {
          return <Skill key={skill.name} {...skill} />;
        })}
        {/* questa icona viene importata diversamente dalle altre */}
        <div className="flex items-center justify-between rounded-md bg-white p-4 uppercase shadow-md shadow-slate-400">
          <p className="font-semibold uppercase">NextUI</p>
          <SiNextui size={48} className="" />
        </div>

        <div className="space-y-4 md:col-start-2">
          <p className="text-center">Guarda i miei lavori</p>
          {/* <Link to={"/projects"}> */}
          <Button
            variant={"secondary"}
            size="lg"
            className="w-full gap-2"
            onClick={() => navigate("/projects")}
          >
            <GoProjectRoadmap /> Portfolio
          </Button>
          {/* </Link> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;

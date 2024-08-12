/* eslint-disable no-unused-vars */
import { Button } from "@nextui-org/react";
import { SiNextui } from "react-icons/si";
import icons from "../data/icons";
import SkillsIcons from "./SkillsIcons";
// import { RiJavascriptFill } from "react-icons/ri";
const Skills = () => {
  return (
    <section className="mx-auto flex w-full flex-col gap-8">
      <h3 className="text-center text-2xl font-semibold">Skill tecniche</h3>
      <div className="flex h-full w-full flex-col flex-wrap gap-8 md:grid md:grid-cols-3">
        {icons.map((skill) => {
          return <SkillsIcons key={skill.name} {...skill} />;
        })}
        <div className="flex items-center justify-between bg-green-300 p-4 uppercase">
          <p className="font-semibold uppercase">NextUI</p>
          <SiNextui size={48} className="" />
        </div>

        <div className="col-span-3 col-start-1">
          <p className="text-center">Guarda i miei lavori</p>
          <Button variant="solid" color="primary" className="w-full">
            Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Skills;

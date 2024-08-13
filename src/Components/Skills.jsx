/* eslint-disable no-unused-vars */
import { Button } from "@nextui-org/react";
import { SiNextui } from "react-icons/si";
import skills from "../data/skills";
import SkillsIcons from "./SkillsIcons";
// import { RiJavascriptFill } from "react-skills/ri";
const Skills = () => {
  return (
    <section className="mx-auto flex w-full flex-col gap-8">
      <h3 className="text-center text-2xl font-semibold">Competenze acquisite</h3>
      <div className="flex h-full w-full flex-col flex-wrap gap-8 md:grid md:grid-cols-3">
        {skills.map((skill) => {
          return <SkillsIcons key={skill.name} {...skill} />;
        })}
        <div className="flex items-center justify-between rounded-md bg-white p-4 uppercase shadow-md shadow-slate-400">
          <p className="font-semibold uppercase">NextUI</p>
          <SiNextui size={48} className="" />
        </div>

        <div className="space-y-4 md:col-start-2">
          <p className="text-center">Guarda i miei lavori</p>
          <Button variant="solid" color="primary" size="lg" className="w-full">
            Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Skills;

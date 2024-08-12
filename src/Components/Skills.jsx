import { Button } from "@nextui-org/react";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { SiNextui } from "react-icons/si";
// import { RiJavascriptFill } from "react-icons/ri";
const Skills = () => {
  return (
    <section className="mx-auto flex w-full flex-col gap-8">
      <h3 className="text-center text-2xl font-semibold">Skill tecniche</h3>
      <div className="flex h-full w-full flex-col flex-wrap gap-8 md:grid md:grid-cols-3">
        <div className="flex items-center justify-between bg-green-300 p-4">
          JavaScript
          <IoLogoJavascript color="yellow" size={24} className="bg-black" />
        </div>
        <div className="flex items-center justify-between bg-green-300 p-4">
          tailwind
          <RiTailwindCssFill size={24} className="fill-cyan-500" />
        </div>
        <div className="flex items-center justify-between bg-green-300 p-4">
          React
          <IoLogoReact color="blue" size={24} className="animate-spin-slow" />
        </div>
        <div className="flex items-center justify-between bg-green-300 p-4">
          Git
          <FaGitAlt size={24} className="fill-orange-400" />
        </div>
        <div className="flex items-center justify-between bg-green-300 p-4">
          NextUI
          <SiNextui size={24} className="" />
        </div>
        
        <div className="col-span-3 col-start-1">
          <p className="text-center">Guarda i miei lavori</p>
          <Button className="w-full">Portfolio</Button>
        </div>
      </div>
    </section>
  );
};

export default Skills;

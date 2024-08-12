import { Button } from "@nextui-org/react";

const Skills = () => {
  return (
    <section className="mx-auto flex w-full flex-col gap-8">
      <h3 className="text-center text-2xl font-semibold">Skill tecniche</h3>
      <div className="flex h-full w-full flex-col flex-wrap gap-8 md:grid md:grid-cols-3">
        <div className="flex items-center justify-center bg-green-300 p-4">
          JavaScript
        </div>
        <div className="flex items-center justify-center bg-green-300 p-4">
          tailwind
        </div>
        <div className="flex items-center justify-center bg-green-300 p-4">
          React
        </div>
        <div className="flex items-center justify-center bg-green-300 p-4">
          Git
        </div>
        <div className="flex items-center justify-center bg-green-300 p-4">
          NextUI
        </div>
        <div className="flex items-center justify-center bg-green-300 p-4">
          NextUI
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

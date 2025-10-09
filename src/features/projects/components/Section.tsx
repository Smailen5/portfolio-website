import { Project } from "@/shared/types/projects";
import { useState } from "react";
import { CardProject } from "./Card";
import { Filter } from "./Filter";

export const SectionProjects = ({ projects }: { projects: Project[] }) => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  return (
    <>
      <div className="flex flex-col gap-8">
        <Filter
          number={filteredProjects.length}
          setFilteredProject={setFilteredProjects}
          projectsNoFiltered={projects}
        />
        <section className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project: Project) => (
            <CardProject key={project.name} {...project} />
          ))}
        </section>
      </div>
    </>
  );
};

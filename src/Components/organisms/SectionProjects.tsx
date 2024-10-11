import projects from "../../data/projects.json";
import Project from "./Project";

export const SectionProjects = () => {
  return (
    <>
      <section className="grid gap-4 lg:grid-cols-2">
        {projects.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </section>
    </>
  );
};

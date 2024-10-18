import { useFetch } from "@/utils/useFetch";
// import projects from "../../data/projects.json";
import Project from "./Project";

export const SectionProjects = () => {
  const { projects, loading, error } = useFetch();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <section className="grid gap-4 lg:grid-cols-2">
        {projects.map((project) => {
          return <Project key={project.name} {...project} />;
        })}
      </section>
    </>
  );
};

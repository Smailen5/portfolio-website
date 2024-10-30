import { useFetch } from "@/utils/useFetch";
import { Loading } from "../atoms/Loading";
import { CardProject } from "./CardProject";

export const SectionProjects = () => {
  const { projects, loading, error } = useFetch();

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;
  return (
    <>
      <section className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => {
          return <CardProject key={project.name} {...project} />;
        })}
      </section>
    </>
  );
};

import { useFetch } from "@/utils/useFetch";
// import { Loading } from "../atoms/Loading";
import { CardProject } from "./CardProject";
import { SkeletonLoaderCard } from "../atoms/SkeletonLoaderCard";

export const SectionProjects = () => {
  const { projects, loading, error } = useFetch();

  // Cambia qui quante card skeleton visualizzare
  const arraySkeleton = Array.from({ length: 4 });
  // if (loading) return <SkeletonLoaderCard />;
  if (error) return <p>{error}</p>;
  return (
    <>
      <section className="grid gap-4 md:grid-cols-2">
        {loading
          ? arraySkeleton.map((_, index) => <SkeletonLoaderCard key={index} />)
          : projects.map((project) => {
              return <CardProject key={project.name} {...project} />;
            })}
      </section>
    </>
  );
};

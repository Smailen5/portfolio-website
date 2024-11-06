import { useFetch } from "@/utils/useFetch";
import { SkeletonLoaderCard } from "../atoms/SkeletonLoaderCard";
import { CardProject } from "./CardProject";

export const SectionProjects = () => {
  const { projects, loading, error } = useFetch();

  // Cambia qui quante card skeleton visualizzare
  const arraySkeleton = Array.from({ length: 4 });

  if (error) return <p>{error}</p>;

  return (
    <>
      <section className="grid gap-4 md:grid-cols-2">
        {loading
          ? arraySkeleton.map((_, index) => <SkeletonLoaderCard key={index} />)
          : projects.map((project, index) => {
              return <CardProject key={index} {...project} />;
            })}
      </section>
    </>
  );
};

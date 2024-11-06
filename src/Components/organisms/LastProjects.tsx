import { useFetch } from "@/utils/useFetch";
import { SkeletonLoaderCard } from "../atoms/SkeletonLoaderCard";
import { CardProject } from "./CardProject";

export const LastProjects = () => {
  const { loading, projects } = useFetch();
  const arraySkeleton = Array.from({ length: 3 });

  return (
    <section className="grid grid-cols-3 gap-4">
      {loading
        ? arraySkeleton.map((_, index) => <SkeletonLoaderCard key={index} />)
        : projects
            .map((project, index) => {
              return <CardProject key={index} {...project} />;
            })
            .slice(0, 3)}
    </section>
  );
};

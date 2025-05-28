import { CardProject } from "@/features/projects/components/Card";
import { SkeletonLoaderCard } from "@/features/projects/components/Skeleton";
import { useFetch } from "@/features/projects/hooks/useFetch";
import { useFilter } from "@/utils/useFilter";
import { Filter } from "@features/projects/components/Filter";

export const SectionProjects = () => {
  const { loading } = useFetch();
  const { filteredProjects, setSelectedFilter, numberFilteredProjects } =
    useFilter();

  // Cambia qui quante card skeleton visualizzare
  const arraySkeleton = Array.from({ length: 4 });

  return (
    <>
      <Filter
        setSelectedFilter={setSelectedFilter}
        number={numberFilteredProjects}
      />
      {numberFilteredProjects === 0 ? (
        <p>Nessun progetto trovato.</p>
      ) : (
        <section className="grid gap-4 md:grid-cols-2">
          {loading
            ? arraySkeleton.map((_, index) => (
                <SkeletonLoaderCard key={index} />
              ))
            : filteredProjects.map((project, index) => {
                return <CardProject key={index} {...project} />;
              })}
        </section>
      )}
    </>
  );
};

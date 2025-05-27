import { useFetch } from "@/utils/useFetch";
import { useFilter } from "@/utils/useFilter";
import { SkeletonLoaderCard } from "@components/atoms/SkeletonLoaderCard";
import { Filter } from "@features/projects/components/Filter";
import { CardProject } from "@features/projects/components/CardProject";

export const SectionProjects = () => {
  const { loading, error } = useFetch();
  const { filteredProjects, setSelectedFilter, numberFilteredProjects } =
    useFilter();

  if (error) return <p>{error}</p>;
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

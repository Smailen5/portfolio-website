import { useFetch } from "@/utils/useFetch";
import { SkeletonLoaderCard } from "../atoms/SkeletonLoaderCard";
import { CardProject } from "./CardProject";
import { Filter } from "../molecules/Filter";
import { useFilter } from "@/utils/useFilter";

export const SectionProjects = () => {
  const { loading, error } = useFetch();
  const {
    filteredProjects,
    selectedFilter,
    setSelectedFilter,
    numberFilteredProjects,
  } = useFilter();

  if (error) return <p>{error}</p>;
  // Cambia qui quante card skeleton visualizzare
  const arraySkeleton = Array.from({ length: 4 });

  return (
    <>
      <Filter
        selectedFilter={selectedFilter}
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

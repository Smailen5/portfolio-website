import { ErrorMessage } from "@/components/atoms/ErrorMessage";
import { CardProject } from "@/features/projects/components/Card";
import { SkeletonLoaderCard } from "@/features/projects/components/Skeleton";
import { useFilter } from "@/features/projects/hooks/useFilter";
import { Filter } from "@features/projects/components/Filter";

export const SectionProjects = () => {
  const {
    loading,
    error,
    filteredProjects,
    setSelectedFilter,
    numberFilteredProjects,
  } = useFilter();

  return (
    <>
      <Filter
        setSelectedFilter={setSelectedFilter}
        number={numberFilteredProjects}
      />
      {numberFilteredProjects === 0 ? (
        <p>Nessun progetto trovato.</p>
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <section className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {loading
            ? filteredProjects.map((_, index) => (
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

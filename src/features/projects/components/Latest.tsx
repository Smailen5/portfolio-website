import { ErrorMessage } from "@/components/atoms/ErrorMessage";
import { CardProject } from "@/features/projects/components/Card";
import { SkeletonLoaderCard } from "@/features/projects/components/Skeleton";
import { useFetch } from "@/features/projects/hooks/useFetch";
import { useGetProjects } from "@/features/projects/hooks/useGetProjects";
import { Project } from "@/features/projects/utils/types";
import { Header } from "@components/atoms/Header";
import { Section } from "@components/atoms/Section";

export const LastProjects = () => {
  const { loading, error } = useFetch();
  const projectsArray = useGetProjects();
  // !Modifica qui i progetti da mostrare
  const showLastProjects = 3;
  const arraySkeleton = Array.from({ length: showLastProjects });
  // se staimo caricando E non abbiamo dati, mostra skeleton
  const shouldShowSkeleton = loading && projectsArray.length === 0;

  return (
    <>
      <Section>
        <Header type="h2" titleID="ultimi lavori">
          Guarda i miei ultimi lavori
        </Header>
        {error ? (
          <ErrorMessage>{error}</ErrorMessage>
        ) : (
          <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {shouldShowSkeleton
              ? arraySkeleton.map((_, index) => (
                  <SkeletonLoaderCard key={index} />
                ))
              : projectsArray
                  .map((project: Project, index: number) => (
                    <CardProject key={index} {...project} />
                  ))
                  .slice(0, showLastProjects)}
          </main>
        )}
      </Section>
    </>
  );
};

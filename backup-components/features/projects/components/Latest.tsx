import { ErrorMessage } from "@/components/atoms/ErrorMessage";
import { CardProject } from "@/features/projects/components/Card";
import { SkeletonLoaderCard } from "@/features/projects/components/Skeleton";
import { useFetch } from "@/features/projects/hooks/useFetch";
import { Project } from '@/shared/types/projects';
import { Header } from "@components/atoms/Header";
import { Section } from "@components/atoms/Section";

export const LastProjects = () => {
  const { loading, error, projects } = useFetch();
  // !Modifica qui i progetti da mostrare
  const showLastProjects = 3;
  const arraySkeleton = Array.from({ length: showLastProjects });
  // se non stiamo caricando, non ci sono errori e non ci sono progetti
  const noProjects = !loading && !error && projects.length === 0;

  return (
    <>
      <Section>
        <Header type="h2" titleID="ultimi lavori">
          Guarda i miei ultimi lavori
        </Header>
        {error ? (
          <ErrorMessage>{error}</ErrorMessage>
        ) : noProjects ? (
          <p>Nessun progetto trovato</p>
        ) : (
          <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {loading
              ? arraySkeleton.map((_, index) => (
                  <SkeletonLoaderCard key={index} />
                ))
              : projects
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

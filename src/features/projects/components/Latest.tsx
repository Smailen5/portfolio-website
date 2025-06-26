import { ErrorMessage } from "@/components/atoms/ErrorMessage";
import { CardProject } from "@/features/projects/components/Card";
import { SkeletonLoaderCard } from "@/features/projects/components/Skeleton";
import { useFetch } from "@/features/projects/hooks/useFetch";
// import { useGetProjects } from "@/features/projects/hooks/useGetProjects";
import { Project } from '@/shared/types/projects';
// import { Project } from "@/features/projects/utils/types";
import { Header } from "@components/atoms/Header";
import { Section } from "@components/atoms/Section";

export const LastProjects = () => {
  const { loading, error, projects } = useFetch();
  // const projectsArray = useGetProjects();
  // !Modifica qui i progetti da mostrare
  const showLastProjects = 3;
  const arraySkeleton = Array.from({ length: showLastProjects });
  // se non ci sono progetti e non stiamo caricando, mostra messaggio
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

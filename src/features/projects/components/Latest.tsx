import { CardProject } from "@/features/projects/components/Card";
import { SkeletonLoaderCard } from "@/features/projects/components/Skeleton";
import { useFetch } from "@/features/projects/hooks/useFetch";
import { Header } from "@components/atoms/Header";
import { Section } from "@components/atoms/Section";
import { Project } from "@/features/projects/utils/types";
import { useGetProjects } from "@/features/projects/hooks/useGetProjects";

export const LastProjects = () => {
  const { loading } = useFetch();
  // !Modifica qui i progetti da mostrare
  const showLastProjects = 3;
  const arraySkeleton = Array.from({ length: showLastProjects });

  const projectsArray = useGetProjects();

  return (
    <>
      <Section>
        <Header type="h2" titleID="ultimi lavori">
          Guarda i miei ultimi lavori
        </Header>
        <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {loading
            ? arraySkeleton.map((_, index) => (
                <SkeletonLoaderCard key={index} />
              ))
            : projectsArray
                .map((project: Project, index: number) => (
                  <CardProject key={index} {...project} />
                ))
                .slice(0, showLastProjects)}
        </main>
      </Section>
    </>
  );
};

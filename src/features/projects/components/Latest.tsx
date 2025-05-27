import { CardProject } from "@/features/projects/components/Card";
import { SkeletonLoaderCard } from "@/features/projects/components/Skeleton";
import { useFetch } from "@/utils/useFetch";
import { Header } from "@components/atoms/Header";
import { Section } from "@components/atoms/Section";

export const LastProjects = () => {
  const { loading, projects } = useFetch();
  // !Modifica qui i progetti da mostrare
  const showLastProjects = 3;
  const arraySkeleton = Array.from({ length: showLastProjects });

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
            : projects
                .map((project, index) => {
                  return <CardProject key={index} {...project} />;
                })
                .slice(0, showLastProjects)}
        </main>
      </Section>
    </>
  );
};

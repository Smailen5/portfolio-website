import { useFetch } from "@/utils/useFetch";
import { Header } from "../atoms/Header";
import { Section } from "../atoms/Section";
import { SkeletonLoaderCard } from "../atoms/SkeletonLoaderCard";
import { CardProject } from "./CardProject";

export const LastProjects = () => {
  const { loading, projects } = useFetch();
  // !Modifica qui i progetti da mostrare
  const showLastProjects = 3;
  const arraySkeleton = Array.from({ length: showLastProjects });

  return (
    <>
      <Section>
        <Header type="h2" titleID="ultimi lavori">Guarda i miei ultimi lavori</Header>
        <main className="grid grid-cols-3 gap-4">
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

import { useFetch } from "@/utils/useFetch";
import { SkeletonLoaderCard } from "../atoms/SkeletonLoaderCard";
import { CardProject } from "./CardProject";
import { Filter } from "../molecules/Filter";
import { useState } from "react";

export const SectionProjects = () => {
  const { projects, loading, error } = useFetch();
  const [selectedFilter, setSelectedFilter] = useState("Tutto")

  if (error) return <p>{error}</p>;
  // Cambia qui quante card skeleton visualizzare
  const arraySkeleton = Array.from({ length: 4 });

// Funzione per filtrare i progetti
const filteredProjects = selectedFilter === "Tutto" ? projects : projects.filter((project)=> project.technologies.includes(selectedFilter))
const numberProjects = filteredProjects.length

  return (
    <>
    <Filter setSelectedFilter={setSelectedFilter} selectedFilter={selectedFilter} numberProjects={numberProjects}/>
    
      <section className="grid gap-4 md:grid-cols-2">
        {loading
          ? arraySkeleton.map((_, index) => <SkeletonLoaderCard key={index} />)
          : filteredProjects.map((project, index) => {
              return <CardProject key={index} {...project} />;
            })}
      </section>
    </>
  );
};

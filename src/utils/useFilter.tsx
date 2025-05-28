import { useFetch } from "@/features/projects/hooks/useFetch";
import { useState } from "react";
import { useGlobalContext } from './context';

export const useFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState("Tutto");
  const { projects, setProjects } = useGlobalContext();

  const cachedProjects = sessionStorage.getItem("projects");

  if (cachedProjects) {
    console.log("cachedProjects", cachedProjects);
    setProjects(JSON.parse(cachedProjects));
  } else {
    const { projects } = useFetch();
    // setProjects(projects);
    console.log("projects", projects);
  }

  // Array filtrato
  const filteredProjects =
    selectedFilter === "Tutto"
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(selectedFilter),
        );

  // Numero progetti filtrati
  const numberFilteredProjects = filteredProjects.length;

  return {
    filteredProjects,
    selectedFilter,
    setSelectedFilter,
    numberFilteredProjects,
  };
};

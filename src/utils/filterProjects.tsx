import { useState } from "react";
import { useFetch } from "./useFetch";

export const filterProjects = () => {
  const [selectedFilter, setSelectedFilter] = useState("Tutto");
  const { projects } = useFetch();

  // Array filtrato
  const filteredProjects =
    selectedFilter === "Tutto"
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(selectedFilter),
        );
        
  // Numero progetti filtrati
  const numberFilteredProjects = filterProjects.length;

  return {
    filteredProjects,
    selectedFilter,
    setSelectedFilter,
    numberFilteredProjects,
  };
};

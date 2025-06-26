import { useFetch } from "@/features/projects/hooks/useFetch";
import { useState } from "react";

export const useFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState("Tutto");
  const { loading, error, projects } = useFetch();

  // Array filtrato
  const filteredProjects = projects.filter((project) =>
    selectedFilter === "Tutto"
      ? true
      : project.technologies.some((tech) =>
          tech.toLowerCase().includes(selectedFilter.toLowerCase()),
        ),
  );

  // Numero progetti filtrati
  const numberFilteredProjects = filteredProjects.length;

  return {
    filteredProjects,
    selectedFilter,
    setSelectedFilter,
    numberFilteredProjects,
    loading,
    error,
  };
};

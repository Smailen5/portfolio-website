import { useFetch } from "@/features/projects/hooks/useFetch";
import { useGetProjects } from "@/features/projects/hooks/useGetProjects";
import { useState } from "react";

export const useFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState("Tutto");
  const { loading, error } = useFetch();
  const projects = useGetProjects();

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

import { useFetch } from "@/features/projects/hooks/useFetch";
import { useGetProjects } from "@/features/projects/hooks/useGetProjects";
import { useState } from "react";

export const useFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState("Tutto");
  const { loading } = useFetch();

  // Array filtrato
  const filteredProjects = useGetProjects().filter((project) =>
    selectedFilter === "Tutto"
      ? true
      : project.technologies.includes(selectedFilter),
  );

  // Numero progetti filtrati
  const numberFilteredProjects = filteredProjects.length;

  return {
    filteredProjects,
    selectedFilter,
    setSelectedFilter,
    numberFilteredProjects,
    loading,
  };
};

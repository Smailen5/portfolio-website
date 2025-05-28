import { useFetch } from "@/features/projects/hooks/useFetch";
import { useState } from "react";
import { useGlobalContext } from "./context";

export const useFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState("Tutto");
  const { projects } = useGlobalContext();
  const { loading } = useFetch();

  // Array filtrato
  const filteredProjects =
    projects?.filter((project) =>
      selectedFilter === "Tutto"
        ? true
        : project.technologies.includes(selectedFilter),
    ) || [];

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

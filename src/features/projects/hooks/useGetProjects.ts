import { Project } from "../utils/types";

export const useGetProjects = (): Project[] => {
  const cachedData = sessionStorage.getItem("projects");
  if (cachedData) {
    const { projects } = JSON.parse(cachedData);
    return projects;
  }
  return [];
};

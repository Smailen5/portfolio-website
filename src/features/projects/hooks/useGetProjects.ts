import { Project } from "../utils/types";

export const useGetProjects = (): Project[] => {
  try {
    const cachedData = sessionStorage.getItem('projects')
    if(!cachedData) return []

    const parsed = JSON.parse(cachedData)
    if(!Array.isArray(parsed.projects)) return []

    return parsed.projects
  } catch (err) {
    return []
  }
};

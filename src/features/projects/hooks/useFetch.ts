import { useState } from "react";
import { projectService } from "../services/projectService";

type Project = {
  name: string;
  path: string;
  html_url: string;
  updated_at: string;
  image: string;
  technologies: string[];
};

export const useFetch = async () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const cachedProjects = sessionStorage.getItem("projects");
  const cachedDuration = 1000 * 60 * 60;

  // Controlla se i progetti sono salvati nel session storage e li recupera
  if (cachedProjects) {
    try {
      const cachedData = JSON.parse(cachedProjects);

      // Verifica che il timestamp sia valido e che i progetti non siano più vecchi di un'ora
      if (
        cachedData.timestamp &&
        Date.now() - cachedData.timestamp < cachedDuration
      ) {
        setProjects(cachedData.projects);
        setLoading(false);
        return;
      }
    } catch (error) {
      console.warn("Errore nel parsing della cache:", error);
    }
  }

  try {
    const response = await projectService.getAll();
    setProjects(response.data);
    setLoading(false);
    console.log(projects);
  } catch (error) {
    console.warn("Errore nel recupero dei progetti:", error);
  }
  return { projects, loading };
};

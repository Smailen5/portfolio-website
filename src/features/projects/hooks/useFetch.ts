import { useEffect, useState } from "react";
import { projectService } from "../services/projectService";

type Project = {
  name: string;
  path: string;
  html_url: string;
  updated_at: string;
  image: string;
  technologies: string[];
};

export const useFetch = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const cachedProjects = sessionStorage.getItem("projects");
  const cachedDuration = 1000 * 60 * 60;

  useEffect(() => {
    const fetchProjects = async () => {
      // Controlla se i progetti sono salvati nel session storage e li recupera
      if (cachedProjects) {
        try {
          const cachedData = JSON.parse(cachedProjects);

          // Verifica che il timestamp sia valido e che i progetti non siano più vecchi di un'ora
          if (
            cachedData.timestamp &&
            Date.now() - cachedData.timestamp < cachedDuration
          ) {
            console.log("Progetti recuperati dalla cache");
            setProjects(cachedData.projects);
            console.log(projects);
            setLoading(false);
            return;
          }
        } catch (error) {
          console.warn("Errore nel parsing della cache:", error);
        }
      }

      // Se non ci sono progetti nel session storage, li recupera dall'API
      try {
        console.log("Inizio recupero dei progetti dall'API");
        const response = await projectService.getAll();
        console.log(
          "Risposta ricevuta: ",
          response.status,
          response.statusText,
        );
        if (response.status === 200) {
          // Salva i progetti nel session storage aggiungendo il timestamp
          sessionStorage.setItem(
            "projects",
            JSON.stringify({ projects: response.data, timestamp: Date.now() }),
          );
          // Salva i progetti nello stato
          setProjects(response.data);
          setLoading(false);
          console.log(projects);
        }
      } catch (error) {
        console.warn("Errore nel recupero dei progetti:", error);
      }
      return { projects, loading };
    };
    fetchProjects();
  }, []);
  return { projects, loading };
};

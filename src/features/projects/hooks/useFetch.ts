import { useGlobalContext, type Project } from "@/utils/context";
import { useEffect, useState } from "react";
import { projectService } from "../services/projectService";

type CachedData = {
  projects: Project[];
  timestamp: number;
};

export const useFetch = () => {
  const { projects, setProjects } = useGlobalContext();
  const [loading, setLoading] = useState<boolean>(true);

  const cachedProjects = sessionStorage.getItem("projects");
  const cachedDuration = 1000 * 60 * 60;

  useEffect(() => {
    const fetchProjects = async () => {
      // Controlla se i progetti sono salvati nel session storage e li recupera
      if (cachedProjects) {
        try {
          const cachedData: CachedData = JSON.parse(cachedProjects);

          // Verifica che il timestamp sia valido e che i progetti non siano più vecchi di un'ora
          if (
            cachedData.timestamp &&
            Date.now() - cachedData.timestamp < cachedDuration
          ) {
            console.log(
              "Progetti recuperati dalla cache:",
              cachedData.projects,
            );
            setProjects(cachedData.projects);
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
          const projectsData = response.data;
          console.log("Progetti ricevuti dall'API:", projectsData);

          // Salva i progetti nel session storage con una struttura più pulita
          const cacheData: CachedData = {
            projects: projectsData,
            timestamp: Date.now(),
          };
          sessionStorage.setItem("projects", JSON.stringify(cacheData));

          // Salva i progetti nello stato
          setProjects(projectsData);
          setLoading(false);
        }
      } catch (error) {
        console.warn("Errore nel recupero dei progetti:", error);
      }
    };
    fetchProjects();
  }, []);
  return { projects, loading };
};

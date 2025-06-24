import { useEffect, useState } from "react";
import { projectService } from "../services/projectService";

export const useFetch = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [shouldFetch, setShouldFetch] = useState<boolean>(true);
  const cachedDuration = 1000 * 60 * 60; // 1 ora
  const timeout = 500;

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setShouldFetch(true);
      
      const cachedProjects = sessionStorage.getItem("projects");

      // Se ci sono progetti in cache e non sono vecchi, usali
      if (cachedProjects) {
        try {
          const { timestamp } = JSON.parse(cachedProjects);
          if (Date.now() - timestamp < cachedDuration) {
            console.log("Usando progetti dalla cache");
            setShouldFetch(false);
          }
        } catch (error) {
          console.warn("Errore nel parsing della cache:", error);
        }
      }

      // Se non ci sono progetti in cache o sono vecchi, fai la chiamata API
      if (shouldFetch) {
        try {
          console.log("Recupero progetti dall'API");
          setLoading(true);
          const response = await projectService.getAll();
          if (response.status === 200) {
            const projects = response.data;
            // Salva in cache con timestamp
            sessionStorage.setItem(
              "projects",
              JSON.stringify({ projects, timestamp: Date.now() }),
            );
          }
        } catch (error) {
          console.warn("Errore nel recupero dei progetti:", error);
        }
      }
      setTimeout(() => setLoading(false), timeout);
    };

    fetchProjects();
  }, []);

  return { loading };
};

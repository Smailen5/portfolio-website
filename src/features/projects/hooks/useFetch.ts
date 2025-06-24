import { useEffect, useState } from "react";
import { projectService } from "../services/projectService";

export const useFetch = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const cachedDuration = 1000 * 60 * 60; // 1 ora

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      const cachedProjects = sessionStorage.getItem("projects");
      const timeout = 500

      // Se ci sono progetti in cache e non sono vecchi, usali
      if (cachedProjects) {
        try {
          const { timestamp } = JSON.parse(cachedProjects);
          if (Date.now() - timestamp < cachedDuration) {
            console.log("Usando progetti dalla cache");
            setTimeout(()=> setLoading(false), timeout);
            return;
          }
        } catch (error) {
          console.warn("Errore nel parsing della cache:", error);
        }
      }

      // Se non ci sono progetti in cache o sono vecchi, fai la chiamata API
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
          setTimeout(() => {
            setLoading(false);
          }, timeout);
        }
      } catch (error) {
        console.warn("Errore nel recupero dei progetti:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, timeout);
      }
    };

    fetchProjects();
  }, []);

  return { loading };
};

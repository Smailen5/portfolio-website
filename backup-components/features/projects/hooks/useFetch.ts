/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { projectService } from "../services/projectService";
import { CachedProjects, Project } from '@/shared/types/projects';

export const useFetch = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const cachedDuration = 1000 * 60 * 60; // 1 ora
  const timeout = 500;

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);
      let shouldFetch = true;

      const cachedProjects = sessionStorage.getItem("projects");

      // Se ci sono progetti in cache e non sono vecchi, usali
      if (cachedProjects) {
        try {
          const cachedData: CachedProjects = JSON.parse(cachedProjects);
          const { projects: cached, timestamp } = cachedData;
          if (Date.now() - timestamp < cachedDuration) {
            setProjects(cached);
            shouldFetch = false;
          }
        } catch (error) {
          setError("Errore nel parsing della cache");
        }
      }

      // Se non ci sono progetti in cache o sono vecchi, fai la chiamata API
      if (shouldFetch) {
        try {
          setLoading(true);
          const data = await projectService.getAll();
          if (data) {
            setProjects(data);
            // Salva in cache con timestamp
            sessionStorage.setItem(
              "projects",
              JSON.stringify({ projects: data, timestamp: Date.now() }),
            );
          }
        } catch (error) {
          setError(`Errore nel recupero dei progetti, ${error}`);
        }
      }
      setTimeout(() => setLoading(false), timeout);
    };

    fetchProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, error, projects };
};

import axios from "axios";
import { useEffect, useState } from "react";
import { extractTechnologies } from "./extractTechnologies";

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url =
    "https://api.github.com/repos/Smailen5/Frontend-Mentor-Challenge/contents/";
  const token = `token ${import.meta.env.VITE_GITHUB_TOKEN}`;
  const imageBaseUrl =
    "https://raw.githubusercontent.com/Smailen5/Frontend-Mentor-Challenge/main/screen-capture/";

  useEffect(() => {
    const fetchProjects = async () => {
      const cachedProjects = sessionStorage.getItem("projects");
      const cacheDuration = 1000 * 60 * 60; // 1 ora

      // Controlla se i progetti sono salvati e li recupera da session storage
      if (cachedProjects) {
        try {
          const cachedData = JSON.parse(cachedProjects);
          // Verifica che ci siano sia i progetti che il timestamp
          if (
            cachedData.timestamp &&
            Date.now() - cachedData.timestamp < cacheDuration
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
        // ! TODO: aggiungere header alla richiesta per evitare errori 403
        const response = await axios.get(`${url}`, {
          // Token GitHub per aumentare le richieste a 5000, // ! aggiornare ogni 30 giorni
          headers: {
            Authorization: `${token}`,
          },
        });

        const projectFolders = response.data.filter(
          (item: any) =>
            item.type === "dir" &&
            ![".github", "screen capture"].includes(item.name),
        );

        // Recupera data e immagini dai progetti
        const detailedProjects = await Promise.all(
          projectFolders.map(async (project: any) => {
            // Recupera l'ultimo commit di ogni progetto
            const commitResponse = await axios.get(
              `https://api.github.com/repos/Smailen5/Frontend-Mentor-Challenge/commits?path=${project.path}&per_page=1`,
              { headers: { Authorization: `${token}` } },
            );

            const updated_at =
              commitResponse.data[0]?.commit?.committer?.date || "";

            return {
              ...project,
              updated_at,
              image: `${imageBaseUrl}${project.name}.webp`,
            };
          }),
        );

        // Ordina i progetti dal piu recente al piu vecchio
        const sortedProjects = detailedProjects.sort(
          (a, b) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
        );

        // Recupera le tecnologie per ciascun progetto
        const projectsWithTechnologies = await Promise.all(
          sortedProjects.map(async (project: Project) => {
            const technologies = await extractTechnologies(project.name);
            return { ...project, technologies };
          }),
        );

        setProjects(projectsWithTechnologies);
        // console.log(projectsWithTechnologies);
        // Salva i progetti in session storage
        sessionStorage.setItem(
          "projects",
          JSON.stringify({
            projects: projectsWithTechnologies,
            timestamp: Date.now(),
          }),
        );
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);
  return { projects, loading, error };
};

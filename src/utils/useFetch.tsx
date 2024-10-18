import axios from "axios";
import { useEffect, useState } from "react";
import { extractTechnologies } from "./extractTechnologies";

type Project = {
  name:string;
  path:string;
  html_url:string;
  image:string;
  technologies: string[];
}

type GitHubFolder = {
  name:string;
  path:string;
  html_url:string;
  type:string;
}

export const useFetch = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = import.meta.env.VITE_GITHUB_URL_REPOS;
  const token = `token ${import.meta.env.VITE_GITHUB_TOKEN}`
  const imageBaseUrl = import.meta.env.VITE_GITHUB_URL_IMAGES;

  useEffect(() => {
    const fetchProjects = async () => {
      const cachedProjects = sessionStorage.getItem("projects");

      // Controlla se i progetti sono salvati e li recupera da session storage
      if(cachedProjects){
        setProjects(JSON.parse(cachedProjects))
        setLoading(false)
        return
      }

      try {
        const response = await axios.get(`${url}`, {
          // Token GitHub per aumentare le richieste a 5000, // ! aggiornare ogni 30 giorni
          headers: {
            Authorization: `${token}`,
          },
        });

        const projectFolders = response.data.filter(
          (item: any) => item.type === "dir" && ![".github", "screen-capture"].includes(item.name)
        ).map((project:any) => ({
          ...project,
          image: `${imageBaseUrl}${project.name}.jpeg`,
        }));

         // Recupera le tecnologie per ciascun progetto
         const projectsWithTechnologies = await Promise.all(
          projectFolders.map(async (folder:GitHubFolder) => {
            const technologies = await extractTechnologies(folder.name);
            return { ...folder, technologies };
          })
        );
        
        setProjects(projectsWithTechnologies);
        // Salva i progetti in session storage
        sessionStorage.setItem("projects", JSON.stringify(projectsWithTechnologies))
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

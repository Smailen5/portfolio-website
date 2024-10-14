import axios from "axios";
import { useEffect, useState } from "react";

type Project = {
  name:string;
  path:string;
  html_url:string;
}

export const useFetch = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = import.meta.env.VITE_GITHUB_URL_REPOS;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${url}`, {
          headers: {
            Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },
        });

        const projectFolders = response.data.filter(
          (item: any) => item.type === "dir",
        );
        setProjects(projectFolders);
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

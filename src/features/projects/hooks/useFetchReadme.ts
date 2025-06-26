import { useEffect, useState } from "react";
import { projectService } from "../services/projectService";

export const useFetchReadme = (readmeUrl: string | null, name: string | undefined) => {
  const [error, setError] = useState<boolean>(false);
  const [readmeContent, setReadmeContent] = useState<string | null>(null);

  useEffect(() => {
    if (!readmeUrl) {
      return setError(true);
    }

    const fetchReadme = async () => {
      try {
        const response = await projectService.getReadme(readmeUrl);
        setReadmeContent(response.data);
        
        const cached = sessionStorage.getItem('projects')
        if(cached) {
          const parsed = JSON.parse(cached)

          const updatedProjects = parsed.projects.map((project: any)=> project.name === name ? {...project, readmeContent: response.data} : project)

          sessionStorage.setItem('projects', JSON.stringify({ projects: updatedProjects, timeStamp: parsed.timeStamp }))
        }
      } catch (error) {
        setError(true);
      }
    };

    fetchReadme();
  }, [readmeUrl]);

  return { error, readmeContent };
};

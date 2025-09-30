import { Project } from "@/shared/types/projects";
import { useEffect, useState } from "react";
import { projectService } from "../services/projectService";

export const useFetchReadme = (
  readmeUrl: string | null,
  name: string | undefined,
) => {
  const [error, setError] = useState<boolean>(false);
  const [readmeContent, setReadmeContent] = useState<string | null>(null);

  useEffect(() => {
    if (!readmeUrl) {
      return setError(true);
    }

    // Controllo prima la cache
    const cached = sessionStorage.getItem("projects");

    if (cached) {
      const parsed = JSON.parse(cached);
      const project = parsed.projects.find(
        (project: Project) => project.name === name,
      );
      if (project && project.readmeContent) {
        setReadmeContent(project.readmeContent); // Uso il readme della cache
        return;
      }
    }

    const fetchReadme = async () => {
      try {
        const readmeText = await projectService.getReadme(readmeUrl);
        setReadmeContent(readmeText);

        // Aggiorno la cache
        if (cached) {
          const parsed = JSON.parse(cached);

          const updatedProjects = parsed.projects.map((project: Project) =>
            project.name === name
              ? { ...project, readmeContent: readmeText }
              : project,
          );

          sessionStorage.setItem(
            "projects",
            JSON.stringify({
              projects: updatedProjects,
              timestamp: parsed.timestamp,
            }),
          ); // Non modifico il timestamp
        }
      } catch (error) {
        setError(true);
      }
    };

    fetchReadme();
  }, [readmeUrl, name]);

  return { error, readmeContent };
};

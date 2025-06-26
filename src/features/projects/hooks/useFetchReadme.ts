import { useEffect, useState } from "react";
import { projectService } from "../services/projectService";

export const useFetchReadme = (readmeUrl: string | null) => {
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
      } catch (error) {
        setError(true);
      }
    };

    fetchReadme();
  }, [readmeUrl]);

  return { error, readmeContent };
};

import { useEffect, useState } from "react";

export const useFetchReadme = (nome: string) => {
  const [readmeContent, setReadmeContent] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchReadme = async () => {
      if (nome) {
        try {
          const url = `https://raw.githubusercontent.com/Smailen5/Frontend-Mentor-Challenge/main/${nome}/README.md`;

          const response = await fetch(url);

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const content = await response.text();

          setReadmeContent(content);
        } catch (error) {
          console.error("Errore nel recupero del README.md:", error);
          setError("Errore nel caricamento del README.md.");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchReadme();
  }, [nome]);
  return { readmeContent, error, loading };
};

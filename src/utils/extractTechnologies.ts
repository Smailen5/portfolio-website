import axios from "axios";

export const extractTechnologies = async (
  projectName: string,
): Promise<string[]> => {
  const readmeUrl = import.meta.env.VITE_GITHUB_README;
  try {
    const response = await axios.get(`${readmeUrl}${projectName}/README.md`);
    const readmeContent = response.data;

    // Cerca la sezione "Tecnologie" nel file README.md
    const techSectionMatch = readmeContent.match(
      /## Tecnologie([\s\S]*?)(?=\n##|\n$)/,
    );

    if (techSectionMatch) {
      const techLines: string[] = techSectionMatch[1]
        .split("\n")
        .filter((line: string) => line.trim() !== "");
      const technologies: string[] = techLines.map((line: string) =>
        line.replace(/^- /, "").trim(),
      );
      return technologies;
    }

    return []; // Nessuna tecnologia trovata
  } catch (error) {
    console.error("Errore nel recupero delle tecnologie:", error);
    return [];
  }
};

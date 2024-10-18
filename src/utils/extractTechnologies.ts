import axios from "axios";

// Funzione per estrarre le tecnologie da un file README.md di un progetto
export const extractTechnologies = async (
  projectName: string,
): Promise<string[]> => {
  const readmeUrl =
    "https://raw.githubusercontent.com/Smailen5/Frontend-Mentor-Challenge/main/";
  try {
    const response = await axios.get(`${readmeUrl}${projectName}/README.md`);
    const readmeContent = response.data;

    // Cerca la sezione "Tecnologie" nel file README.md
    const techSectionMatch = readmeContent.match(
      /### Built with([\s\S]*?)(?=\n##|\n$)/,
    );

    if (techSectionMatch) {
      // Divide le righe trovate e filtra le righe vuote
      const techLines: string[] = techSectionMatch[1]
        .split("\n")
        .filter((line: string) => line.trim() !== "");
      // Rimuove il prefisso "- " e crea un array di tecnologie
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

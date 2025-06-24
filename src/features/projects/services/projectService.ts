import { API_ENDPOINTS } from "@/shared/constants/api";
import axios, { AxiosError } from "axios";

export const projectService = {
  // Ottieni tutti i progetti dalla monorepo
  getAll: async () => {
    try {
      console.log("Chiamando API per packages...");
      const response = await axios.get(API_ENDPOINTS.GITHUB.PACKAGES);

      console.log("Risposta API packages:", response.data);

      // Filtra solo le cartelle (type: "dir")
      const projectFolders = response.data.filter(
        (item: any) => item.type === "dir",
      );
      console.log("Progetti filtrati:", projectFolders);

      // Recupera gli screenshot
      console.log("Recupero screenshot...");
      const screenshotsResponse = await axios.get(
        API_ENDPOINTS.GITHUB.SCREENSHOTS,
      );
      const screenshots = screenshotsResponse.data.filter(
        (item: any) => item.type === "file",
      );
      console.log("Screenshot trovati:", screenshots.length);

      // Recupera i dati dal package.json di ogni progetto
      const projectsWithData = await Promise.all(
        projectFolders.map(async (project: any) => {
          try {
            // Recupera il package.json del progetto
            const packageJsonResponse = await axios.get(
              `https://api.github.com/repos/Smailen5/Frontend-Mentor-Challenge/contents/${project.path}/package.json`,
            );

            // Decodifica il contenuto del package.json
            const packageJsonContent = atob(packageJsonResponse.data.content);
            const packageJson = JSON.parse(packageJsonContent);

            // Cerca l'immagine corrispondente usando il nome della cartella
            const matchingScreenshot = screenshots.find((screenshot: any) => {
              const screenshotName = screenshot.name.replace(".webp", "");
              return screenshotName === project.name;
            });

            return {
              ...project,
              name: packageJson.name, // Nome pulito dal package.json
              displayName: packageJson.name, // Nome da mostrare
              folderName: project.name, // Nome della cartella per riferimento
              image: matchingScreenshot ? matchingScreenshot.download_url : "",
              technologies: packageJson.technologies || [],
              description: packageJson.description || "",
              author: packageJson.author || "",
              createdAt: packageJson.createdAt || "",
              version: packageJson.version || "",
              readme: "", // Per ora vuoto, lo popoleremo dopo
            };
          } catch (error) {
            console.warn(
              `Errore nel recupero del package.json per ${project.name}:`,
              error,
            );

            // Fallback con i dati base se il package.json non è disponibile
            const matchingScreenshot = screenshots.find((screenshot: any) => {
              const screenshotName = screenshot.name.replace(".webp", "");
              return screenshotName === project.name;
            });

            return {
              ...project,
              name: project.name,
              displayName: project.name,
              folderName: project.name,
              image: matchingScreenshot ? matchingScreenshot.download_url : "",
              technologies: [],
              description: "",
              author: "",
              createdAt: "",
              version: "",
              readme: "",
            };
          }
        }),
      );

      console.log("Progetti con dati completi:", projectsWithData);

      return {
        ...response,
        data: projectsWithData,
      };
    } catch (error) {
      console.error("Errore nel recupero dei progetti:", error);
      if (error instanceof AxiosError)
        throw new Error(
          error.response?.data?.message || "Errore nel recupero dei progetti",
        );
      throw error;
    }
  },

};

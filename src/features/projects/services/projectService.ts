import { API_ENDPOINTS } from "@/shared/constants/api";
import { env } from "@/shared/utils/env";
import axios, { AxiosError } from "axios";

export const projectService = {
  // Ottieni tutti i progetti dalla monorepo
  getAll: async () => {
    try {
      const response = await axios.get(
        "https://api.github.com/repos/Smailen5/Frontend-Mentor-Challenge/contents/packages",
        {
          headers: {
            Authorization: `token ${env.GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
          },
        },
      );
      console.log(response.data);

      // Per ogni progetto, recupera il package.json
      const projectsWithData = await Promise.all(
        response.data.map(async (project: any) => {
          try {
            const packageResponse = await axios.get(
              `https://api.github.com/repos/Smailen5/Frontend-Mentor-Challenge/contents/${project.path}/package.json`,
            );

            const packageContent = atob(packageResponse.data.content);
            const packageJson = JSON.parse(packageContent);

            return {
              ...project,
              name: packageJson.name,
              description: packageJson.description,
              technologies: packageJson.technologies,
              createdAt: packageJson.createdAt,
              folderName: project.name,
            };
          } catch (err) {
            // console.log(err);
            throw err;
          }
        }),
      );
      return { data: projectsWithData };
    } catch (err) {
      // console.log(err);
      throw err;
    }
  },

  // Ottieni screenshot di un progetto
  getScreenshots: async () => {
    try {
      console.log("Chiamando API per screenshot...");
      const response = await axios.get(API_ENDPOINTS.GITHUB.SCREENSHOTS);

      console.log("Risposta API screenshot:", response.data);
      return response;
    } catch (error) {
      if (error instanceof AxiosError)
        throw new Error(
          error.response?.data?.message ||
            "Errore nel recupero degli screenshot",
        );
      throw error;
    }
  },

  // Ottieni README di un progetto
  getReadme: async (projectPath: string) => {
    try {
      const response = await axios.get(
        API_ENDPOINTS.GITHUB.README(projectPath),
      );
      return response;
    } catch (error) {
      if (error instanceof AxiosError)
        throw new Error(
          error.response?.data?.message || "Errore nel recupero del README",
        );
      throw error;
    }
  },
};

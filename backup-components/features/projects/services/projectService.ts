import { ENDPOINTS } from "@/shared/constants/api";
import { Project } from "@/shared/types/projects";

export const projectService = {
  // Ottieni tutti i progetti dalla monorepo
  getAll: async () => {
    try {
      const response = await fetch(`${ENDPOINTS.GITHUB.CDN.PROJECTS}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error("I dati non sono un array");
      }

      const projects: Project[] = data.map((project: Project) => {
        return {
          ...project,
          readmeContent: null,
        };
      });

      return projects;
    } catch (err) {
      throw err;
    }
  },

  // Ottieni README di un progetto
  getReadme: async (readmeContentUrl: string) => {
    try {
      const response = await fetch(readmeContentUrl);
      console.log("response ", response);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.text();
    } catch (err) {
      throw err;
    }
  },
};

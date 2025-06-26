import { ENDPOINTS } from '@/shared/constants/api';
import { Project } from "@/shared/types/projects";
import { env } from "@/shared/utils/env";
import axios from "axios";

export const projectService = {
  // Ottieni tutti i progetti dalla monorepo
  getAll: async () => {
    try {
      const response = await axios.get(
        `${ENDPOINTS.GITHUB.API.PROJECTS}`,
        {
          headers: {
            ...(env.GITHUB_TOKEN
              ? { Authorization: `Bearer ${env.GITHUB_TOKEN}` }
              : {}),
            Accept: "application/vnd.github.v3+json",
          },
        },
      );
      const projects: Project[] = JSON.parse(atob(response.data.content));

      return projects;
    } catch (err) {
      throw err;
    }
  },

  // Ottieni README di un progetto
  getReadme: async (readmeContentUrl: string) => {
    try {
      const response = await axios.get(readmeContentUrl);
      return response;
    } catch (err) {
      throw err;
    }
  },
};

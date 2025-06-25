import { API_ENDPOINTS } from "@/shared/constants/api";
import { Project } from '@/shared/types/projects';
import { env } from "@/shared/utils/env";
import axios, { AxiosError } from "axios";

export const projectService = {
  // Ottieni tutti i progetti dalla monorepo
  getAll: async () => {
    try {
      const response = await axios.get(
        "https://api.github.com/repos/Smailen5/Frontend-Mentor-Challenge/contents/public/projects.json",
        {
          headers: {
            ...(env.GITHUB_TOKEN ? {Authorization: `Bearer ${env.GITHUB_TOKEN}`} : {}),
            Accept: "application/vnd.github.v3+json",
          },
        },
      );
      console.log(env.GITHUB_TOKEN)
      const projects: Project[] = JSON.parse(atob(response.data.content))

      return projects
    } catch (err) {
      // console.log(err);
      throw err;
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

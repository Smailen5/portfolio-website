import { API_ENDPOINTS } from "@/shared/constants/api";
import axios, { AxiosError } from "axios";

export const projectService = {
  // Ottieni tutti i progetti
  getAll: async () => {
    try {
      const response = await axios.get(API_ENDPOINTS.PROJECTS.GET_ALL);
      return response;
    } catch (error) {
      if (error instanceof AxiosError)
        // usa gli errori del server se disponibili
        throw new Error(
          error.response?.data?.message || "Errore nel recupero dei progetti",
        );
      throw error;
    }
  },

  // Ottieni un progetto per ID
  getByID: async (id: string) => {
    try {
      const response = await axios.get(
        API_ENDPOINTS.PROJECTS.GET_BY_ID.replace(":id", id),
      );
      return response;
    } catch (error) {
      if (error instanceof AxiosError)
        throw new Error(
          error.response?.data?.message || "Errore nel recupero del progetto",
        );
        throw error;
    }
  },
};

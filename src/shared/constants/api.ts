// URL base per l'API - in sviluppo usa localhost, in produzione usa il dominio corrente
const API_BASE_URL =
  import.meta.env.VITE_APP_ENV === "development"
    ? "http://localhost:8888"
    : window.location.origin;

export const API_ENDPOINTS = {
  // PROJECTS
  PROJECTS: {
    GET_ALL: `${API_BASE_URL}/.netlify/functions/get-projects/`,
  },
};

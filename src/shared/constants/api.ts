const API_URL = import.meta.env.VITE_API_URL;

export const API_ENDPOINTS = {
  // AUTH
  AUTH: {
    LOGIN: `${API_URL}/api/users/login`,
  },
  // PROJECTS
  PROJECTS: {
    GET_ALL: `http://localhost:8888/.netlify/functions/get-projects/`,
    GET_BY_ID: `${API_URL}/api/projects/:id`,
    CREATE: `${API_URL}/api/projects`,
    UPDATE: `${API_URL}/api/projects/:id`,
    DELETE: `${API_URL}/api/projects/:id`,
    SYNC: `${API_URL}/api/github/sync`,
  },
};

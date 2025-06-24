// URL base per l'API - in sviluppo usa localhost, in produzione usa il dominio corrente
const API_BASE_URL = import.meta.env.PROD
  ? window.location.origin
  : "https://smailenvargas.com";

// GitHub API endpoints
const GITHUB_API_BASE = "https://api.github.com";
const GITHUB_USERNAME = "Smailen5";
const GITHUB_REPO = "Frontend-Mentor-Challenge";

export const API_ENDPOINTS = {
  // PROJECTS
  PROJECTS: {
    GET_ALL: `${API_BASE_URL}/.netlify/functions/get-projects/`,
  },
  // GITHUB
  GITHUB: {
    REPO: `${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${GITHUB_REPO}`,
    CONTENTS: `${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/contents`,
    PACKAGES: `${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/contents/packages`,
    SCREENSHOTS: `${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/contents/screen-capture`,
    README: (projectPath: string) =>
      `${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/contents/${projectPath}/README.md`,
    LANGUAGES: (projectPath: string) =>
      `${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/contents/${projectPath}`,
  },
};

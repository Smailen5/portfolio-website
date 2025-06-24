const API_URL = import.meta.env.VITE_API_URL;

// GitHub API endpoints
const GITHUB_API_BASE = "https://api.github.com";
const GITHUB_USERNAME = "Smailen5";
const GITHUB_REPO = "Frontend-Mentor-Challenge";

export const API_ENDPOINTS = {
  // AUTH
  AUTH: {
    LOGIN: `${API_URL}/api/users/login`,
  },
  // PROJECTS
  PROJECTS: {
    GET_ALL: `${API_URL}/api/projects`,
    GET_BY_ID: `${API_URL}/api/projects/:id`,
    CREATE: `${API_URL}/api/projects`,
    UPDATE: `${API_URL}/api/projects/:id`,
    DELETE: `${API_URL}/api/projects/:id`,
    SYNC: `${API_URL}/api/github/sync`,
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

const API_URL = import.meta.env.VITE_API_URL;
import { env } from "@/shared/utils/env";

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
    REPO: `${env.GITHUB_API_BASE}/repos/${env.GITHUB_USERNAME}/${env.GITHUB_REPO}`,
    CONTENTS: `${env.GITHUB_API_BASE}/repos/${env.GITHUB_USERNAME}/${env.GITHUB_REPO}/contents`,
    PACKAGES: `${env.GITHUB_API_BASE}/repos/${env.GITHUB_USERNAME}/${env.GITHUB_REPO}/contents/packages`,
    SCREENSHOTS: `${env.GITHUB_API_BASE}/repos/${env.GITHUB_USERNAME}/${env.GITHUB_REPO}/contents/screen-capture`,
    README: (projectPath: string) =>
      `${env.GITHUB_API_BASE}/repos/${env.GITHUB_USERNAME}/${env.GITHUB_REPO}/contents/${projectPath}/README.md`,
    LANGUAGES: (projectPath: string) =>
      `${env.GITHUB_API_BASE}/repos/${env.GITHUB_USERNAME}/${env.GITHUB_REPO}/contents/${projectPath}`,
  },
};

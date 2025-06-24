const API_URL = import.meta.env.VITE_API_URL;
import { env } from "@/shared/utils/env";

export const API_ENDPOINTS = {
  // PROJECTS
  PROJECTS: {
    GET_ALL: `${API_BASE_URL}/.netlify/functions/get-projects/`,
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

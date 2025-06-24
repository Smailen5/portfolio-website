import { env } from "@/shared/utils/env";

export const API_ENDPOINTS = {
  GITHUB: {
    REPO: `${env.GITHUB_API_BASE}/repos/${env.GITHUB_USERNAME}/${env.GITHUB_REPO}`,
    CONTENTS: `${env.GITHUB_API_BASE}/repos/${env.GITHUB_USERNAME}/${env.GITHUB_REPO}/contents`,
    PACKAGES: `${env.GITHUB_API_BASE}/repos/${env.GITHUB_USERNAME}/${env.GITHUB_REPO}/contents/packages`,
    SCREENSHOTS: `${env.GITHUB_API_BASE}/repos/${env.GITHUB_USERNAME}/${env.GITHUB_REPO}/contents/screen-capture`,
    README: (projectPath: string) =>
      `${env.GITHUB_API_BASE}/repos/${env.GITHUB_USERNAME}/${env.GITHUB_REPO}/contents/${projectPath}/README.md`,
  },
};

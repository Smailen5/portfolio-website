export interface CardProjectProps {
  name: string;
  description: string | null;
  technologies: string[];
  imagesUrl: string[];
  repoUrl: string;
}

export interface Project extends CardProjectProps {
  createdAt: string;
  readmeContent: string | null;
  version: string;
}

export type CachedProjects = {
  projects: Project[];
  timestamp: number;
};

export interface CardProjectProps {
  name: string;
  description: string | null;
  technologies: string[] | [];
  imageUrl: string | null;
}

export interface Project extends CardProjectProps {
  createdAt: string;
  readmeUrl: string | null;
  version: string;
}

export type CachedProjects = {
  projects: Project[];
  timestamp: number;
}

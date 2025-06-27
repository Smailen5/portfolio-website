export interface CardProjectProps {
  name: string;
  description: string | null;
  technologies: string[] | [];
  imageUrl: string | null;
}

export interface Project extends CardProjectProps {
  nameFolder: string;
  createdAt: string;
  readmeUrl: string | null;
  readmeContent: string | null;
  version: string;
}

export type CachedProjects = {
  projects: Project[];
  timestamp: number;
}

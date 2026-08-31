import { Project } from '../types/projects';

export function filterProjectsByTechnology(
  projects: Project[],
  technology: string
): Project[] {
  if (technology === 'Tutto') return projects;
  return projects.filter(project =>
    project.technologies?.some(
      tech => tech.toLowerCase() === technology.toLowerCase()
    )
  );
}

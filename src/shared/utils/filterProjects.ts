import { Project } from '../types/projects';

/**
 * Filtra i progetti per tecnologia
 *
 * Confronto case-insensitive tra il nome della tecnologia selezionata
 * e le tecnologie di ogni progetto. I progetti senza tecnologie non
 * vengono mai inclusi nei filtri specifici.
 *
 * @param {Project[]} projects - Array completo dei progetti da filtrare
 * @param {string} technology - Tecnologia selezionata, "Tutto" disattiva il filtro
 * @returns {Project[]} I progetti che usano la tecnologia, oppure tutti se "Tutto"
 */
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

import { useEffect, useState } from 'react';
import { Project } from '../types/projects';
import { API_URL } from '@/shared/constants/api';

interface ProjectsCache {
  data: Project[];
  timestamp: number;
}

let cache: ProjectsCache | null = null;
const STALE_TIME_MS = 5 * 60 * 1000; // 5 minuti

interface UseProjectsReturn {
  projects: Project[];
  isLoading: boolean;
  error: Error | null;
}

async function fetchProjects(): Promise<Project[]> {
  const response = await fetch(`${API_URL}/api/projects`);
  if (!response.ok) throw new Error(`Richiesta fallita: ${response.status}`);
  return response.json();
}

export function useProjects(): UseProjectsReturn {
  const [projects, setProjects] = useState<Project[]>(cache?.data ?? []);
  const [isLoading, setIsLoading] = useState<boolean>(cache === null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (cache !== null && Date.now() - cache.timestamp < STALE_TIME_MS) {
      return;
    }

    setIsLoading(true);
    setError(null);

    fetchProjects()
      .then(data => {
        cache = { data, timestamp: Date.now() };
        setProjects(data);
      })
      .catch(err => {
        const normalizedError =
          err instanceof Error
            ? err
            : new Error('Errore nel recupero dei progetti');
        setError(normalizedError);
        setProjects([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return { projects, isLoading, error };
}

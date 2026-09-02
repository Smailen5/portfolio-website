import { useCallback, useEffect, useRef, useState } from 'react';
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
  retry: () => void;
}

async function fetchProjects(signal: AbortSignal): Promise<Project[]> {
  const response = await fetch(`${API_URL}/api/projects`, { signal });
  if (!response.ok) throw new Error(`Richiesta fallita: ${response.status}`);
  return response.json();
}

export function useProjects(): UseProjectsReturn {
  const [projects, setProjects] = useState<Project[]>(cache?.data ?? []);
  const [isLoading, setIsLoading] = useState<boolean>(cache === null);
  const [error, setError] = useState<Error | null>(null);
  const controllerRef = useRef<AbortController | null>(null);

  const load = useCallback(() => {
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;
    setIsLoading(true);
    setError(null);
    fetchProjects(controller.signal)
      .then(data => {
        cache = { data, timestamp: Date.now() };
        setProjects(data);
      })
      .catch(err => {
        if (err.name === 'AbortError') return; // ignora abort error
        const normalizedError =
          err instanceof Error
            ? err
            : new Error('Errore nel recupero dei progetti');
        setError(normalizedError);
        setProjects([]);
      })
      .finally(() => {
        if (!controller.signal.aborted) setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (cache !== null && Date.now() - cache.timestamp < STALE_TIME_MS) {
      return;
    }

    load();
    return () => controllerRef.current?.abort();
  }, [load]);
  return { projects, isLoading, error, retry: load };
}

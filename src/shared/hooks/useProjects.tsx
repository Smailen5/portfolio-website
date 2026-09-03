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
  /** Riesegue il fetch, annullando un'eventuale richiesta in corso */
  retry: () => void;
}

async function fetchProjects(signal: AbortSignal): Promise<Project[]> {
  const response = await fetch(`${API_URL}/api/projects`, { signal });
  if (!response.ok) throw new Error(`Richiesta fallita: ${response.status}`);
  return response.json();
}

/**
 * Espone i progetti con cache di 5 minuti: se i dati sono freschi
 * non viene emessa nessuna richiesta.
 * Le richieste in volo vengono annullate quando il componente che
 * usa l'hook si smonta (es. cambio di route).
 * @returns stato dei progetti, loading, errore e funzione di retry
 */
export function useProjects(): UseProjectsReturn {
  const [projects, setProjects] = useState<Project[]>(cache?.data ?? []);
  const [isLoading, setIsLoading] = useState<boolean>(cache === null);
  const [error, setError] = useState<Error | null>(null);
  // ponte tra load (che crea il controller) e il cleanup (che lo annulla)
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
        // una fetch annullata non deve spegnere il loading di quella nuova
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

import { Project } from '@/shared/types/projects';
import { useMemo, useState } from 'react';
import { CardProject } from './Card';
import { Filter } from './Filter';
import { CardSkeleton } from '@/components/molecules/CardSkeleton';
import { CardError } from '@/components/molecules/CardError';
import { filterProjectsByTechnology } from '@/shared/utils/filterProjects';

interface SectionProjectsProps {
  projects: Project[];
  isLoading: boolean;
  error: Error | null;
  retry: () => void;
}

/**
 * Componente SectionProjects - Griglia progetti con filtro
 *
 * Visualizza tutti i progetti in una griglia responsive
 * con sistema di filtraggio per tecnologia
 *
 * Layout responsive:
 * - Mobile: 1 colonna
 * - Tablet: 2 colonne
 * - Desktop: 3 colonne
 *
 * @param {Project[]} projects - Array completo dei progetti da visualizzare
 */
export const SectionProjects = ({
  projects,
  isLoading,
  error,
  retry,
}: SectionProjectsProps) => {
  const [selectedTechnology, setSelectedTechnology] = useState<string>('Tutto');
  const filteredProjects = useMemo(
    () => filterProjectsByTechnology(projects, selectedTechnology),
    [projects, selectedTechnology]
  );

  return (
    <div className="flex w-full flex-col gap-8">
      <Filter
        number={filteredProjects.length}
        onSelect={setSelectedTechnology}
        selected={selectedTechnology}
      />
      {isLoading ? (
        <>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        </>
      ) : error ? (
        <CardError onRetry={retry} />
      ) : (
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project: Project) => (
            <CardProject key={project.name} {...project} />
          ))}
        </section>
      )}
    </div>
  );
};

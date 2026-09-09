import { CardError, CardSkeleton } from '@/components/molecules';
import { Section, Separator } from '@/components/atoms';
import { CardProject } from '@/features/projects/components/Card';
import { useProjects } from '@/shared/hooks/useProjects';
import { Project } from '@/shared/types/projects';

/**
 * Componente LastProjects - Ultimi progetti in homepage
 *
 * Mostra gli ultimi N progetti (configurabile con showLastProjects)
 * dalla lista completa recuperata da GitHub API
 *
 * @see CardProject - Componente per visualizzare singolo progetto
 */
export const LastProjects = () => {
  const { projects, isLoading, error, retry } = useProjects();
  // !Modifica qui i progetti da mostrare
  const maxProjectsToShow = 3;

  return (
    <Section className="text-center">
      <h2>Guarda i miei ultimi lavori</h2>

      <Separator />

      {isLoading ? (
        <>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        </>
      ) : error ? (
        <CardError onRetry={retry} />
      ) : (
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {[...projects]
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .slice(0, maxProjectsToShow)
            .map((project: Project) => (
              <CardProject key={project.name} {...project} />
            ))}
        </div>
      )}
    </Section>
  );
};

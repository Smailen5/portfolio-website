import { fetchProjects } from '@/api/getProjects';
import { H2 } from '@/components/atoms/heading';
import Section from '@/components/atoms/Section';
import Separator from '@/components/atoms/Separator';
import { CardProject } from '@/features/projects/components/Card';
import { Project } from '@/shared/types/projects';
import { useEffect, useState } from 'react';

/**
 * Componente LastProjects - Ultimi progetti in homepage
 *
 * Mostra gli ultimi N progetti (configurabile con showLastProjects)
 * dalla lista completa recuperata da GitHub API
 *
 * @see fetchProjects - Funzione per recuperare i progetti da API
 * @see CardProject - Componente per visualizzare singolo progetto
 */
export const LastProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  // !Modifica qui i progetti da mostrare
  const showLastProjects = 3;

  useEffect(() => {
    fetchProjects()
      .then(data => {
        setProjects(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Section className="text-center">
        <H2>Guarda i miei ultimi lavori</H2>

        <Separator />

        <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, showLastProjects).map((project: Project) => (
            <CardProject key={project.name} {...project} />
          ))}
        </main>
      </Section>
    </>
  );
};

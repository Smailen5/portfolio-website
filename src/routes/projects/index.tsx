import { Layout } from '@/components/molecules/Layout';
import { HeaderProject } from '@/features/projects/components/Header';
import { SectionProjects } from '@/features/projects/components/Section';
import { Head } from '@/components/atoms/Head';
import { createFileRoute } from '@tanstack/react-router';
import { useProjects } from '@/shared/hooks/useProjects';

export const Route = createFileRoute('/projects/')({
  component: ProjectPage,
});

function ProjectPage() {
  const { projects, isLoading, error } = useProjects();
  return (
    <>
      <Head
        title="Progetti | Smailen Vargas"
        description="Esplora i progetti realizzati da Smailen Vargas come Frontend Developer. Scopri le tecnologie utilizzate e i risultati ottenuti."
        keywords="Smailen Vargas, Progetti, Frontend Developer, React, TypeScript, Portfolio"
        ogUrl="/projects"
      />
      <Layout classContent="flex flex-col flex-nowrap gap-20 px-6 pb-14 pt-20 md:items-center">
        <h1 className="sr-only">Progetti</h1>
        <HeaderProject />
        <SectionProjects
          projects={projects}
          isLoading={isLoading}
          error={error}
        />
      </Layout>
    </>
  );
}

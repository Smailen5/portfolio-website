import { Layout } from '@/components/molecules';
import { HeaderProject } from '@/features/projects/components/Header';
import { SectionProjects } from '@/features/projects/components/Section';
import { useProjects } from '@/shared/hooks/useProjects';

export function ProjectPage() {
  const { projects, isLoading, error, retry } = useProjects();
  return (
    <Layout classContent="flex flex-col flex-nowrap gap-20 px-6 pb-14 pt-20 md:items-center">
      <h1 className="sr-only">Progetti</h1>
      <HeaderProject />
      <SectionProjects
        projects={projects}
        isLoading={isLoading}
        error={error}
        retry={retry}
      />
    </Layout>
  );
}

import { Layout } from '@/components/molecules';
import { HeaderProject, SectionProjects } from '@/components/organisms';
import { useProjects } from '@/shared/hooks/useProjects';

export function ProjectPage() {
  const { projects, isLoading, error, retry } = useProjects();
  return (
    <Layout classContent="flex flex-col flex-nowrap gap-20 px-4 lg:px-0 pb-14 md:items-center">
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

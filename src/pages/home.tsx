import { Layout } from '@/components/molecules';
import { TechPillars, Hero, LastProjects } from '@/components/organisms';

export function HomePage() {
  return (
    <Layout classContent="flex flex-col flex-nowrap gap-40 px-4 lg:px-0 pt-12 md:items-center">
      <Hero />
      <LastProjects />
      <TechPillars />
    </Layout>
  );
}

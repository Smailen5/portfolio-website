import { Layout } from '@/components/molecules';
import { TechPillars, Hero, LastProjects } from '@/components/organisms';

export function HomePage() {
  return (
    <Layout classContent="flex flex-col flex-nowrap gap-40 px-4 lg:px-0 pb-14 pt-12 md:items-center">
      <h1 className="sr-only">Portfolio di Smailen Vargas</h1>
      <Hero />
      <LastProjects />
      <TechPillars />
    </Layout>
  );
}

import { Layout, Hero } from '@/components/molecules';
import { LastProjects } from '@/features/projects/components/Latest';

export function HomePage() {
  return (
    <Layout classContent="flex flex-col flex-nowrap gap-40 px-6 pb-14 pt-12 md:items-center">
      <h1 className="sr-only">Portfolio di Smailen Vargas</h1>
      <Hero />
      <LastProjects />
    </Layout>
  );
}

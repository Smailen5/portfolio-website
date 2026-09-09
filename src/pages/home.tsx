import { Layout, Hero, Presentation } from '@/components/molecules';
import { SkillsCarousel } from '@/components/organisms';
import { LastProjects } from '@/features/projects/components/Latest';

export function HomePage() {
  return (
    <Layout classContent="flex flex-col flex-nowrap gap-40 px-6 pb-14 pt-12 md:items-center">
      <h1 className="sr-only">Portfolio di Smailen Vargas</h1>
      <Hero />
      <Presentation />
      <SkillsCarousel />
      <LastProjects />
    </Layout>
  );
}

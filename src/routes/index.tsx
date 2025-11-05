// src/routes/index.tsx

import { Hero } from '@/components/molecules/Hero';
import { Layout } from '@/components/molecules/Layout';
import { Presentation } from '@/components/molecules/Presentation';
import { SkillsSection } from '@/components/organisms/SectionSkill/Section';
import { LastProjects } from '@/features/projects/components/Latest';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <Layout classContent="flex flex-col flex-nowrap gap-40 px-6 pb-14 pt-12 md:items-center">
      <Hero />
      <Presentation />
      <SkillsSection />
      <LastProjects />
    </Layout>
  );
}

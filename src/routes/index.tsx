// src/routes/index.tsx

import { Hero } from "@/components/molecules/Hero";
import { Layout } from "@/components/molecules/Layout";
import Presentation from "@/components/molecules/Presentation";
import { SectionSkill } from "@/components/organisms/SectionSkill/Section";
import { LastProjects } from "@/features/projects/components/Latest";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <Layout>
      <Hero />
      <Presentation />
      <SectionSkill />
      <LastProjects />
    </Layout>
  );
}

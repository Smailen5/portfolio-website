// src/routes/index.tsx

import { Hero } from "@/components/molecules/Hero";
import { Layout } from "@/components/molecules/Layout";
import Presentation from "@/components/molecules/Presentation";
import { SectionSkill } from "@/components/organisms/SectionSkill/Section";
import { LastProjects } from "@/features/projects/components/Latest";
import { Head } from "@/shared/utils/Head";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Head
        title="Smailen Vargas | Frontend Developer"
        description="Ciao, sono Smailen Vargas, Frontend Developer specializzato in React, TypeScript e Tailwind CSS. Scopri i miei progetti e competenze."
        keywords="Smailen Vargas, Frontend Developer, React, TypeScript, Tailwind CSS, DaisyUi, Portfolio"
        ogUrl="https://smailenvargas.com"
      />
      <Layout>
        <Hero />
        <Presentation />
        <SectionSkill />
        <LastProjects />
      </Layout>
    </>
  );
}

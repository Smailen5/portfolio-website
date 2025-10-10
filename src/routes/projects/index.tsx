// src/routes/projects/index.tsx

import { fetchProjects } from "@/api/getProjects";
import { Layout } from "@/components/molecules/Layout";
import { HeaderProject } from "@/features/projects/components/Header";
import { SectionProjects } from "@/features/projects/components/Section";
import { Head } from "@/components/atoms/Head";
import { createFileRoute, useLoaderData } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/")({
  loader: () => fetchProjects(),
  component: ProjectPage,
});

function ProjectPage() {
  const projects = useLoaderData({ from: "/projects/" });
  return (
    <>
      <Head
        title="Progetti | Smailen Vargas"
        description="Esplora i progetti realizzati da Smailen Vargas come Frontend Developer. Scopri le tecnologie utilizzate e i risultati ottenuti."
        keywords="Smailen Vargas, Progetti, Frontend Developer, React, TypeScript, Portfolio"
        ogUrl="https://smailenvargas.com/projects"
      />
      <Layout>
        <HeaderProject />
        <SectionProjects projects={projects} />
      </Layout>
    </>
  );
}

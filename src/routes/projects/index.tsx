import { fetchProjects } from "@/api/getProjects";
import { Layout } from "@/components/molecules/Layout";
import { HeaderProject } from "@/features/projects/components/Header";
import { SectionProjects } from "@/features/projects/components/Section";
import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { Helmet } from "react-helmet";

export const Route = createFileRoute("/projects/")({
  loader: () => fetchProjects(),
  component: ProjectPage,
});

function ProjectPage() {
  const projects = useLoaderData({ from: "/projects/" });
  return (
    <>
      <Helmet>
        <title>Progetti di Smailen Vargas | Frontend Developer</title>
        <meta
          name="description"
          content="Esplora i progetti realizzati da Smailen Vargas come frontend developer"
        />
        <meta
          name="keywords"
          content="Smailen Vargas, Progetti, Frontend Developer"
        />
      </Helmet>
      <Layout>
        <HeaderProject />
        <SectionProjects projects={projects} />
      </Layout>
    </>
  );
}

import { fetchProjects } from "@/api/getProjects";
import { Layout } from "@/components/molecules/Layout";
import { HeaderProject } from "@/features/projects/components/Header";
import { SectionProjects } from "@/features/projects/components/Section";
import { createFileRoute, useLoaderData } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/")({
  loader: () => fetchProjects(),
  component: ProjectPage,
  head: () => ({
    meta: [
      {
        title: "Progetti di Smailen Vargas | Frontend Developer",
      },
      {
        name: "description",
        content:
          "Esplora i progetti realizzati da Smailen Vargas come frontend developer",
      },
      {
        name: "keywords",
        content: "Smailen Vargas, Progetti, Frontend Developer",
      },
    ],
  }),
});

function ProjectPage() {
  const projects = useLoaderData({ from: "/projects/" });
  return (
    <Layout>
      <HeaderProject />
      <SectionProjects projects={projects} />
    </Layout>
  );
}

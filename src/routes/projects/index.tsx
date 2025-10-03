import { fetchProjects } from "@/server/getProjects";
import ProjectPage from "@pages/ProjectPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/")({
  loader: () => fetchProjects(),
  component: ProjectPage,
});

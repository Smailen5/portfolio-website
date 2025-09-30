import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  component: ProjectPage,
});

function ProjectPage() {
  return <div>Project Page</div>;
}

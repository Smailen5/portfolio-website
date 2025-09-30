import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/error")({
  component: ErrorPage,
});

function ErrorPage() {
  return <div>Error Page</div>;
}

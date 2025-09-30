// src/routes/index.tsx

import { createFileRoute } from "@tanstack/react-router";
// import HomePage from "@pages/Homepage";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  console.log("HomePage rendering");

  return <div>Hello tanstack home page</div>;
}

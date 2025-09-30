import { AppProvider } from "@/shared/utils/context";
import { ThemeProvider } from "@/shared/utils/themeProvider";
import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { getRouter } from "./router";

const router = getRouter();

console.log("Router created:", router);
console.log("Router tree:", router.routeTree);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </AppProvider>
  </StrictMode>,
);

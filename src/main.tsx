import App from "@/App.tsx";
import { AppProvider } from "@/shared/utils/context";
import { ThemeProvider } from "@/utils/themeProvider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </AppProvider>
  </StrictMode>,
);

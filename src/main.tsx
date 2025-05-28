import App from "@/App.tsx";
import { AppProvider } from "@/shared/utils/context";
import { ThemeProvider } from "@/utils/themeProvider.tsx";
import { NextUIProvider } from "@nextui-org/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </ThemeProvider>
    </AppProvider>
  </StrictMode>,
);

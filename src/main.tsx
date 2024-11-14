import { NextUIProvider } from "@nextui-org/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AppProvider } from "./utils/context.tsx";
import { ThemeProvider } from "./utils/themeProvider.tsx";

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

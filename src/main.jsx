import { NextUIProvider } from "@nextui-org/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./utils/context";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </AppProvider>
  </StrictMode>,
);

import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

import netlify from "@netlify/vite-plugin-tanstack-start";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    tsConfigPaths(),
    tanstackStart(),
    // Usa Netlify plugin solo in build, non in dev
    ...(mode === "production" ? [netlify()] : []),
    viteReact(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@server": path.resolve(__dirname, "./src/server"),
    },
  },
}));

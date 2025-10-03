import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsConfigPaths(), tanstackStart(), viteReact(), tailwindcss()],
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
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Separa le librerie React in un chunk dedicato
          "react-vendor": ["react", "react-dom", "@tanstack/react-router"],
          // Separa le librerie di form in un altro chunk
          "form-vendor": ["formik", "yup", "@formspree/react"],
          // Separa le librerie di markdown in un altro chunk
          "markdown-vendor": ["react-markdown", "rehype-raw", "remark-gfm"],
        },
      },
    },
    // Aumenta il limite di warning per i chunk
    chunkSizeWarningLimit: 1000,
  },
});

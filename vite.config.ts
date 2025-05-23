import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@pages": path.resolve(__dirname, "./src/pages"),
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
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          // Separa le librerie UI in un altro chunk
          "ui-vendor": ["@nextui-org/react", "framer-motion"],
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

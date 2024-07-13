import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/https://chillthecode.github.io/testreact/src/index.html/", // Replace with your project name or custom base URL
  build: {
    outDir: "dist",
    assetsDir: "",
    sourcemap: false,
  },
});

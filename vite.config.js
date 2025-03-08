import { defineConfig } from "vite";
import compression from "vite-plugin-compression";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [compression(), react(), tailwindcss()],
});

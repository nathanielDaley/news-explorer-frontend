import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/news-explorer-frontend/",
  plugins: [react()],
  server: {
    port: 3002,
  },
});

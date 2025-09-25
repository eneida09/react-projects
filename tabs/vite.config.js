import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/react-tabs-project": {
        target: "https://course-api.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) =>
          path.replace(/^\/react-tabs-project/, "/react-tabs-project"),
      },
    },
  },
});

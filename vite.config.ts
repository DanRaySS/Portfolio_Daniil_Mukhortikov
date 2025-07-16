import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svgr({
    svgrOptions: {
      plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
      svgoConfig: {
        floatPrecision: 2,
      },
    },
    include: "**/*.svg?react",
    exclude: "",
  }), react()],
  resolve: {
    alias: {
      app: "/src/app",
      assets: "/src/assets",
      entities: "/src/entities",
      helpers: "/src/helpers",
      pages: "/src/pages",
      processes: "/src/processes",
      shared: "/src/shared",
      widgets: "/src/widgets",
      features: "/src/features",
    }
  }
})

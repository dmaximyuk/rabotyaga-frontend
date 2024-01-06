import path from "node:path";
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

import { compilerOptions } from "./tsconfig.json";

export default defineConfig({
  base: "/dev/",
  publicDir: "public",
  esbuild: {
    pure: import.meta?.env?.DEV ? [] : ["console.log"],
  },
  build: {
    outDir: path.join(compilerOptions.outDir, ""),
    minify: "terser",
    rollupOptions: {
      output: {
        chunkFileNames: "js/[hash].js",
        entryFileNames: "js/[hash].js",
        assetFileNames: (opt) => {
          // @ts-ignore
          const [[, ext]] = Array.from(opt.name.matchAll(/.([0-9-a-z]+)$/g));
          return `${ext}/[hash].${ext}`;
        },
      },
    },
  },
  server: {
    port: 3000,
  },
  plugins: [tsconfigPaths(), react(), svgr()],
});

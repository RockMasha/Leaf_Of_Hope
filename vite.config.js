import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";

export default defineConfig({
  root: "src",

  define: {
    "process.env": process.env,
  },
  build: {
    target: ["es2022", "chrome89", "firefox89", "safari15"],
    outDir: "../dist",
    emptyOutDir: true,
  },
  plugins: [injectHTML(), FullReload(["./src//.html"])],
});

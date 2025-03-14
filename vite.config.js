import { defineConfig } from "vite";
import { resolve } from "path";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  root: "src",

  define: {
    'process.env': process.env,
  },
  build: {
    target: ["es2022", "chrome89", "firefox89", "safari15"],
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        nested: resolve(__dirname, "src/search.html"),
        nestedTwo: resolve(__dirname, "src/profile.html"),
        nestedFour: resolve(__dirname, "src/advert.html"),
        nestedFive: resolve(__dirname, "src/formAdvert.html"),
        nestedSix: resolve(__dirname, "src/formProfile.html"),
        nestedSeven: resolve(__dirname, "src/ai-assist.html"),
        nestedEight: resolve(__dirname, "src/criteria.html"),
        nestedNine: resolve(__dirname, "src/authentication.html"),
        nestedTen: resolve(__dirname, "src/metabase.html"),
      },
    },
  },
  plugins: [injectHTML(), FullReload(["./src//.html"])],
});

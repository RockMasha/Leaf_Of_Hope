import { defineConfig } from "vite";
import { resolve } from "path";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";

export default defineConfig({
  root: "src",

  build: {
    target: ['es2022', 'chrome89', 'firefox89', 'safari15'],
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        nested: resolve(__dirname, "src/search.html"),
        nestedTwo: resolve(__dirname, "src/profile.html"),
        nestedThee: resolve(__dirname, "src/redactProfile.html"),
        nestedFour: resolve(__dirname, "src/advert.html"),
        nestedFive: resolve(__dirname, "src/formAdvert.html"),
        nestedSix: resolve(__dirname, "src/createProfile.html"),
      },
    },
    outDir: "../dist",
  },
  plugins: [injectHTML(), FullReload(["./src//.html"])],
});

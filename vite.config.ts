import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";
import wyw from "@wyw-in-js/vite";

const config = defineConfig({
  plugins: [
    devtools(),
    nitro(),
    // 👇 Spread the plugin and force it to 'pre'
    {
      ...wyw({
        include: ["./src/**/*.{ts,tsx}"],
        babelOptions: {
          presets: ["@babel/preset-typescript", "@babel/preset-react"],
        },
      }),
      enforce: "pre",
    },
    viteTsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tanstackStart(),
    viteReact(),
  ],
});

export default config;

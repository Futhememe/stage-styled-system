import { defineConfig } from "@pandacss/dev";
import { stagePreset } from "./src";

export default defineConfig({
  preflight: true,
  jsxFramework: "react",
  presets: [stagePreset],
  jsxFactory: "orch",

  outdir: "dist",
});

import { defineConfig } from "@pandacss/dev";
import {
  colors,
  fonts,
  fontWeights,
  fontSizes,
  radii,
  breakpoints,
} from "@stage-lib/tokens";
import { stagePreset } from "./src";

export default defineConfig({
  preflight: true,
  jsxFramework: "react",
  presets: [stagePreset],
  jsxFactory: "orch",

  theme: {
    extend: {
      breakpoints,
      tokens: {
        colors,
        fontSizes,
        radii,
        fonts: {
          default: {
            value: fonts.default,
          },
          code: {
            value: fonts.code,
          },
        },
        fontWeights: {
          light: { value: fontWeights.light },
          regular: { value: fontWeights.regular },
          medium: { value: fontWeights.medium },
          bold: { value: fontWeights.bold },
          black: { value: fontWeights.black },
        },
      },
    },
  },

  outdir: "dist",
});

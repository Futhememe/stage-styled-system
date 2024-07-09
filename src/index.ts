import { definePreset } from "@pandacss/dev";
import {
  colors,
  fonts,
  fontWeights,
  fontSizes,
  radii,
  breakpoints,
} from "@stage-lib/tokens";

export { styled as orch } from "../dist/jsx";

export const stagePreset = definePreset({
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
});

// node_modules/.pnpm/@pandacss+dev@0.34.3_typescript@4.9.5/node_modules/@pandacss/dev/dist/index.mjs
function definePreset(preset) {
  return preset;
}

// src/index.ts
import {
  colors,
  fonts,
  fontWeights,
  fontSizes,
  radii,
  breakpoints
} from "@stage-lib/tokens";
var stagePreset = definePreset({
  theme: {
    extend: {
      breakpoints,
      tokens: {
        colors,
        fontSizes,
        radii,
        fonts: {
          default: {
            value: fonts.default
          },
          code: {
            value: fonts.code
          }
        },
        fontWeights: {
          light: { value: fontWeights.light },
          regular: { value: fontWeights.regular },
          medium: { value: fontWeights.medium },
          bold: { value: fontWeights.bold },
          black: { value: fontWeights.black }
        }
      }
    }
  }
});
export {
  stagePreset
};

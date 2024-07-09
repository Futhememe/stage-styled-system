"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  stagePreset: () => stagePreset
});
module.exports = __toCommonJS(src_exports);

// node_modules/.pnpm/@pandacss+dev@0.34.3_typescript@4.9.5/node_modules/@pandacss/dev/dist/index.mjs
function definePreset(preset) {
  return preset;
}

// src/index.ts
var import_tokens = require("@stage-lib/tokens");
var stagePreset = definePreset({
  theme: {
    extend: {
      breakpoints: import_tokens.breakpoints,
      tokens: {
        colors: import_tokens.colors,
        fontSizes: import_tokens.fontSizes,
        radii: import_tokens.radii,
        fonts: {
          default: {
            value: import_tokens.fonts.default
          },
          code: {
            value: import_tokens.fonts.code
          }
        },
        fontWeights: {
          light: { value: import_tokens.fontWeights.light },
          regular: { value: import_tokens.fontWeights.regular },
          medium: { value: import_tokens.fontWeights.medium },
          bold: { value: import_tokens.fontWeights.bold },
          black: { value: import_tokens.fontWeights.black }
        }
      }
    }
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  stagePreset
});

import { createStitches } from "@stitches/react";

export const { styled, css, globalCss } = createStitches({
  theme: {
    colors: {
      gray500: "hsl(206,10%,76%)",
      blue500: "hsl(206,100%,50%)",
      purple500: "hsl(252,78%,60%)",
      green500: "hsl(148,60%,60%)",
      red500: "hsl(352,100%,62%)",
    },
    space: {
      1: "4",
      2: "8px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "40px",
    },
    fontSizes: {
      1: "14px",
      2: "16px",
      3: "20px",
    },
    fonts: {
      default: "'Manrope', sans-serif",
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});

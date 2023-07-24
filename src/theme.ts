import { createStitches } from "@stitches/react";

export const { styled, css, globalCss } = createStitches({
    theme: {
        colors: {
            dark: "#14171B",
            light: "#FAFAFA",
            blue: "#2196EA",
            darker: "#0E0F11",
            gray: "#939599",
            red: "#BB4646",
        },
        space: {
            1: "4px",
            2: "8px",
            3: "16px",
            4: "24px",
            5: "32px",
            6: "40px",
        },
        fonts: {
            default: "'Manrope', sans-serif",
        },
    },
});

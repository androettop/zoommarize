import { globalCss } from "../theme";

const isDev = process.env.NODE_ENV === "development";

export const globalStyles = globalCss({
    html: {
        ...(isDev
            ? { height: "100%", width: "100%", background: "#2c2c2c" }
            : {}),
    },
    body: {
        margin: 0,
        fontFamily: "$default",
        width: 300,
        height: 300,
        backgroundColor: "$dark",
        ...(isDev
            ? {
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
              }
            : {}),
    },
    "::-webkit-scrollbar": {
        width: "8px",
        height: "8px",
    },
    "::-webkit-scrollbar-thumb": {
        backgroundColor: "$darker",
        borderRadius: "4px",
    },
    "#root": {
        height: "300px",
        width: "300px",
        overflowX: "hidden",
        overflowY: "scroll",
        padding: "16px",
    },
    "*": {
        boxSizing: "border-box",
    },
});

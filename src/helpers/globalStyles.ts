import { globalCss } from "../theme";

const APP_WIDTH = 300;
const APP_HEIGHT = 310;

export const globalStyles = globalCss({
    body: {
        margin: 0,
        fontFamily: "$default",
        width: APP_WIDTH,
        height: APP_HEIGHT,
        backgroundColor: "$dark"
    },
    "::-webkit-scrollbar": {
        width: "8px",
        height: "8px"
    },
    "::-webkit-scrollbar-thumb": {
        backgroundColor: "$darker",
        borderRadius: "4px"
    },
    "#root": {
        width: APP_WIDTH,
        height: APP_HEIGHT,
        overflowX: "hidden",
        overflowY: "scroll",
        padding: "21px 6px 0 16px"
    },
    "*": {
        boxSizing: "border-box"
    }
});

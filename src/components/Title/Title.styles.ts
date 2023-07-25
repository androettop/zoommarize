import { styled } from "../../theme";

export const StyledTitle = styled("h1", {
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "19px",
    color: "$light",
    variants: {
        align: {
            center: {
                textAlign: "center",
            },
            left: {
                textAlign: "left",
            },
            right: {
                textAlign: "right",
            },
        },
    },
});
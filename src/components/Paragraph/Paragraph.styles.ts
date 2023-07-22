import { styled } from "../../theme";

export const StyledParagraph = styled("p", {
    margin: 0,
    fontSize: "16px",
    lineHeight: "19px",
    fontWeight: 600,
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
    a: {
        color: "$blue",
        textDecoration: "underline",
    },
});

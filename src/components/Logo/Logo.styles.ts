import { styled } from "../../theme";

export const StyledLogo = styled("img", {
    variants: {
        size: {
            small: {
                height: "36px",
            },
            large: {
                height: "48px",
            },
        },
    },
});

import { styled } from "../../theme";

export const StyledButton = styled("button", {
    borderRadius: "8px",
    border: 0,
    color: "$light",
    fontSize: "16px",
    lineHeight: "19px",
    fontWeight: 600,
    fontFamily: "$default",
    padding: "8px 24px",
    cursor: "pointer",
    transition: "opacity 0.1s ease-in-out",
    variants: {
        color: {
            primary: {
                backgroundColor: "$blue"
            },
            secondary: {
                backgroundColor: "$darker"
            },
            danger: {
                backgroundColor: "$red"
            }
        },
        disabled: {
            true: {
                opacity: "0.6",
                cursor: "not-allowed"
            }
        }
    }
});

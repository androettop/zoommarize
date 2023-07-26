import { styled } from "../../theme";

export const StyledAlert = styled("div", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    bottom: "0",
    left: "26px",
    right: "26px",
    zIndex: "9999",
    backgroundColor: "$red",
    borderRadius: "8px",
    padding: "16px",
    opacity: "0",
    visibility: "hidden",
    transition: "none 0.3s ease-in-out",
    transitionProperty: "opacity, visibility, bottom",
    variants: {
        visible: {
            true: {
                opacity: "1",
                visibility: "visible",
                bottom: "22px",
            },
        },
    },
});

export const StyledAlerText = styled("span", {
    color: "$light",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "19px",
    textAlign: "center",
});

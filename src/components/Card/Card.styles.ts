import { styled } from "../../theme";

export const StyledCard = styled("div", {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "$darker",
    padding: "18px",
    borderRadius: "8px",
})

export const StyledCardTitle = styled("h1", {
    fontSize: "20px",
    fontWeight: "700",
    lineWeight: "19px",
    color: "$light",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    margin:"0 0 14px 0",
    width: "100%",
})

export const StyledCardDate = styled("span", {
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "19px",
    color: "$light",
})
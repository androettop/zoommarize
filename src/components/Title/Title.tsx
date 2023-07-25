import React from "react";
import { StyledTitle } from "./Title.styles";

interface TitleProps {
    children: React.ReactNode;
    align?: "left" | "center" | "right";
}

const Title = ({ children, align }: TitleProps) => {
    return <StyledTitle align={align}>{children}</StyledTitle>;
};

export default Title;


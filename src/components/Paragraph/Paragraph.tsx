import React, { FC } from "react";
import { StyledParagraph } from "./Paragraph.styles";

interface ParagraphProps {
    children: React.ReactNode;
    align?: "left" | "center" | "right";
}

const Paragraph: FC<ParagraphProps> = ({ ...props }) => (
    <StyledParagraph {...props} />
);

export default Paragraph;

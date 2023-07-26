import React from "react";
import { StyledAlerText, StyledAlert } from "./Alert.styles";

interface AlertProps {
    visible: boolean;
    text: string;
}

const Alert = ({ visible, text }: AlertProps) => {
    return (
        <StyledAlert visible={visible}>
            <StyledAlerText>{text}</StyledAlerText>
        </StyledAlert>
    );
};

export default Alert;

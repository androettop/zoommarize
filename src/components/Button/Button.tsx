import React from "react";

import { StyledButton } from "./Button.styles";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    color?: "primary" | "secondary" | "danger";
}

const Button = ({
    children,
    onClick = () => {},
    disabled = false,
    color = "primary"
}: ButtonProps) => (
    <StyledButton onClick={disabled ? undefined : onClick} disabled={disabled} color={color}>
        {children}
    </StyledButton>
);

export default Button;

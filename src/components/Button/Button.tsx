import React from "react";

import { StyledButton } from "./Button.styles";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    color?: "primary" | "secondary";
}

const Button = ({
    children,
    onClick = () => {},
    disabled,
    color = "primary",
}: ButtonProps) => (
    <StyledButton onClick={onClick} disabled={disabled} color={color}>
        {children}
    </StyledButton>
);

export default Button;

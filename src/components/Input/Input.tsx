import React from "react";
import { StyledInput } from "./Input.styles";
interface InputProps {
    value?: string;
    onChange: (value: string) => void;
    placeholder?: string;
    type?: string;
}

const Input = ({ value, onChange, placeholder, type = "text" }: InputProps) => (
    <StyledInput
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
    />
);

export default Input;

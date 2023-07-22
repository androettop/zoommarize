import React from "react";
import { StyledInput } from "./Input.styles";
interface InputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

const Input = ({ value, onChange, placeholder }: InputProps) => (
    <StyledInput
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
    />
);

export default Input;

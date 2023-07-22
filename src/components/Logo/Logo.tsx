import { FC } from "react";
import { StyledLogo } from "./Logo.styles";
import logo from "../../assets/logo.svg";

interface LogoProps {
    size?: "small" | "large";
}

const Logo: FC<LogoProps> = ({ size = "small" }) => (
    <StyledLogo src={logo} alt="Logo" size={size} />
);
export default Logo;

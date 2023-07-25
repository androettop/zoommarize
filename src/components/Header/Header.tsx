import React from "react";
import { StyledHeader, StyledImgButton } from "./Header.styles";
import Logo from "../Logo/Logo";
import settingsImg from "../../assets/settings.svg";
import backImg from "../../assets/back.svg";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
    action?: "settings" | "back";
}

const Header = ({ action }: HeaderProps) => {
    const navigate = useNavigate();
    return (
        <StyledHeader>
            <Logo size="small" />
            {action === "settings" ? (
                <StyledImgButton
                    src={settingsImg}
                    alt="Settings"
                    onClick={() => {
                        navigate("/settings");
                    }}
                />
            ) : action === "back" ? (
                <StyledImgButton
                    src={backImg}
                    alt="Back"
                    onClick={() => {
                        navigate(-1);
                    }}
                />
            ) : null}
        </StyledHeader>
    );
};

export default Header;

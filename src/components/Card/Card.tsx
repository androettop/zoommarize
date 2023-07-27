import React from "react";
import { StyledCard, StyledCardDate, StyledCardTitle } from "./Card.styles";
import { useTranslation } from "react-i18next";

interface CardProps {
    title: string;
    date: any;
    onClick: () => void;
}

const Card = ({ title, date, onClick }: CardProps) => {
    const { t } = useTranslation();
    return (
        <StyledCard onClick={onClick}>
            <StyledCardTitle>{title}</StyledCardTitle>
            <StyledCardDate>{`${t("recordedAt")}: ${date}`}</StyledCardDate>
        </StyledCard>
    );
};

export default Card;

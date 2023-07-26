import React from "react";
import { StyledCard, StyledCardDate, StyledCardTitle } from "./Card.styles";

interface CardProps {
    title: string;
    date: any;
    onClick: () => void;
}

const Card = ({ title, date, onClick }: CardProps) => {
    return (
        <StyledCard onClick={onClick}>
            <StyledCardTitle>{title}</StyledCardTitle>
            <StyledCardDate>{`Recorded at: ${date}`}</StyledCardDate>
        </StyledCard>
    );
};

export default Card;

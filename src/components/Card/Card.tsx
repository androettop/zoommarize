import React from "react";
import { StyledCard, StyledCardDate, StyledCardTitle } from "./Card.styles";

interface CardProps {
  title: string;
  date: any;
}

const Card = ({title, date}: CardProps) => {
    return (
        <StyledCard>
            <StyledCardTitle>{title}</StyledCardTitle>
            <StyledCardDate>
                {`Released at ${date}`}
            </StyledCardDate>
        </StyledCard>
    );
};

export default Card;
import React from "react";
import { useStorage } from "../../helpers/storage";
import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";
import { CardsContainer } from "./Meetings.styles";

const Meetings = () => {
    const { state } = useStorage();
    const meetings = state.meetings || {};

    return (
        <div>
            <Title align="left">Last meetings</Title>
            <CardsContainer>
                {Object.keys(meetings).map((key) => (
                    <Card
                        title={meetings[key].meetingTopic}
                        date={meetings[key].createdAt}
                    />
                ))}
            </CardsContainer>
        </div>
    );
};

export default Meetings;

import React from "react";
import { useStorage } from "../../helpers/storage";
import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";

const Meetings = () => {
    const { state, setState } = useStorage();
    const meetings = state.meetings || {};

    return (
        <div>
            <Title align="left">Last meetings</Title>
            {Object.keys(meetings).map((key) => (
                <Card
                    title={meetings[key].meetingTopic}
                    date={meetings[key].createdAt}
                />
            ))}
        </div>
    );
};

export default Meetings;

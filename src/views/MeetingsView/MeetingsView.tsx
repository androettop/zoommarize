import React from "react";
import { useStorage } from "../../helpers/storage";
import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";
import { CardsContainer } from "./MeetingsView.styles";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Paragraph from "../../components/Paragraph/Paragraph";

const MeetingsView = () => {
    const { state } = useStorage();
    const navigate = useNavigate();
    const meetings = state.meetings || {};
    const { t } = useTranslation();

    return (
        <>
            <Header action="settings" />
            <Title align="left">{t("lastMeetings")}</Title>
            <CardsContainer>
                {Object.keys(meetings).length === 0 && (
                    <Paragraph align="center">{t("noMeetings")}</Paragraph>
                )}
                {Object.keys(meetings).map((key) => (
                    <Card
                        onClick={() => {
                            navigate(`/meeting/${key}`);
                        }}
                        title={meetings[key].meetingTopic}
                        date={new Date(
                            meetings[key].createdAt
                        ).toLocaleString()}
                    />
                ))}
            </CardsContainer>
        </>
    );
};

export default MeetingsView;

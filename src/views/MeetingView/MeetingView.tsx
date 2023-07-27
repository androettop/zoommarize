import { useNavigate, useParams } from "react-router-dom";
import kofiImg from "../../assets/kofi.png";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import { downloadFile } from "../../helpers/download";
import { useStorage } from "../../helpers/storage";
import { summarize } from "../../helpers/summarize";
import { messagesToTranscript } from "../../helpers/transcript";
import { getMessagesFromMeeting } from "../../helpers/zoom";
import { ButtonContainer, MeetingContainer } from "./MeetingView.styles";
import Alert from "../../components/Alert/Alert";
import { useState } from "react";
import useAlert from "../../hooks/useAlert";
import { useTranslation } from "react-i18next";

const MeetingView = () => {
    const { state, setState } = useStorage();
    const { meetingId = "" } = useParams();
    const meeting = state.meetings?.[meetingId];
    const [alertVisible, setAlertVisible] = useAlert(false);
    const [loading, setLoading] = useState(false);
    const { t } = useTranslation();
    const navigate = useNavigate();

    const downloadSummary = async () => {
        if (!meeting) return;

        try {
            setLoading(true);

            const messages = getMessagesFromMeeting(meeting);

            const summary = await summarize(messages);

            downloadFile(
                summary,
                `${meeting.meetingTopic
                    .toLocaleLowerCase()
                    .replace(/ /g, "-")}-${t("summary")}.txt`
            );
        } catch (e) {
            setAlertVisible(true);
        }
        setLoading(false);
    };

    const downloadTranscript = () => {
        if (!meeting) return;

        const messages = getMessagesFromMeeting(meeting);

        const transcript = messagesToTranscript(messages);

        downloadFile(
            transcript,
            `${meeting.meetingTopic.toLocaleLowerCase().replace(/ /g, "-")}-${t(
                "summary"
            )}.txt`
        );
    };

    const deleteMeeting = () => {
        if (!meeting) return;
        const meetings = { ...state.meetings };
        delete meetings[meetingId];

        setState({ ...state, meetings });
        navigate(-1);
    };

    return (
        <>
            <Header action="back" />
            <MeetingContainer>
                <Title align="center">{meeting?.meetingTopic}</Title>
                <ButtonContainer>
                    <Button disabled={loading} onClick={downloadSummary}>
                        {loading
                            ? t("summarizing") + "..."
                            : t("downloadSummary")}
                    </Button>
                </ButtonContainer>
                <ButtonContainer>
                    <Button color="secondary" onClick={downloadTranscript}>
                        {t("downloadTranscript")}
                    </Button>
                </ButtonContainer>
                <ButtonContainer>
                    <Button color="danger" onClick={deleteMeeting}>
                        {t("deleteMeeting")}
                    </Button>
                </ButtonContainer>
                <ButtonContainer>
                    <a
                        href="https://ko-fi.com/androettop"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={kofiImg} alt="ko-fi" />
                    </a>
                </ButtonContainer>

                <Alert
                    text={t("errorDownloadingMessage")}
                    visible={alertVisible}
                />
            </MeetingContainer>
        </>
    );
};

export default MeetingView;

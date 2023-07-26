import { useParams } from "react-router-dom";
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

const MeetingView = () => {
    const { state } = useStorage();
    const { meetingId = "" } = useParams();
    const meeting = state.meetings?.[meetingId];

    const downloadSummary = async () => {
        if (!meeting) return;

        const messages = getMessagesFromMeeting(meeting);

        const summary = await summarize(messages);

        downloadFile(
            summary,
            `${meeting.meetingTopic
                .toLocaleLowerCase()
                .replace(/ /g, "-")}-summary.txt`,
        );
    };

    const downloadTranscript = () => {
        if (!meeting) return;

        const messages = getMessagesFromMeeting(meeting);

        const transcript = messagesToTranscript(messages);

        downloadFile(
            transcript,
            `${meeting.meetingTopic
                .toLocaleLowerCase()
                .replace(/ /g, "-")}-transcript.txt`,
        );
    };

    return (
        <>
            <Header action="back" />
            <MeetingContainer>
                <Title align="center">{meeting?.meetingTopic}</Title>
                <ButtonContainer>
                    <Button onClick={downloadSummary}>Download summary</Button>
                </ButtonContainer>
                <ButtonContainer>
                    <Button color="secondary" onClick={downloadTranscript}>
                        Download transcript
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
            </MeetingContainer>
        </>
    );
};

export default MeetingView;

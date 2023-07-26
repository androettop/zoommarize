import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import { useStorage } from "../../helpers/storage";
import { ButtonContainer, MeetingContainer } from "./MeetingView.styles";
import kofiImg from "../../assets/kofi.png";
import { downloadFile } from "../../helpers/download";
import { summarize } from "../../helpers/summarize";
import { getMessagesFromMeeting } from "../../helpers/zoom";

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

    return (
        <>
            <Header action="back" />
            <MeetingContainer>
                <Title align="center">{meeting?.meetingTopic}</Title>
                <ButtonContainer>
                    <Button onClick={downloadSummary}>Download summary</Button>
                </ButtonContainer>
                <ButtonContainer>
                    <Button color="secondary">Download transcript</Button>
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

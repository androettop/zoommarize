import React, { useEffect, useState } from "react";
import { globalCss } from "./theme";
import { summarize } from "./helpers/summarize";
import { getMessagesFromMeeting } from "./helpers/zoom";
import { ZoomMeeting } from "./types/meeting";

const globalStyles = globalCss({
    body: { margin: 0, fontFamily: "$default" },
});

declare const chrome: any;

function App() {
    const [apiKey, _setApiKey] = useState(
        localStorage.getItem("OPENAI_API_KEY") || "",
    );
    const setApiKey = (apiKey: string) => {
        localStorage.setItem("OPENAI_API_KEY", apiKey);
        _setApiKey(apiKey);
    };

    const [summarizedText, setSummarizedText] = useState("");
    const [meetings, setMeetings] = useState<ZoomMeeting | null>(null);

    useEffect(() => {
        chrome.storage.local.get("meetings", (e: any) => {
            setMeetings(e.meetings);
        });
    }, []);

    globalStyles();
    return (
        <div>
            <div>
                <label>
                    openai api key <br />
                    <input
                        type="text"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                    />
                </label>
            </div>
            <div>
                {meetings &&
                    Object.values(meetings).map((meeting: ZoomMeeting) => (
                        <button
                            onClick={async () => {
                                const summary = await summarize(
                                    getMessagesFromMeeting(meeting),
                                );
                                setSummarizedText(summary);
                            }}
                        >
                            {meeting.meetingTopic}
                        </button>
                    ))}
            </div>
            <div>
                <h1>Resumen</h1>
                <textarea value={summarizedText} />
            </div>
        </div>
    );
}

export default App;

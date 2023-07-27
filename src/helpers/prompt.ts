import { ChatCompletionRequestMessage } from "openai";

export const DEFAULT_PROMPT: ChatCompletionRequestMessage[] = [
    {
        role: "system",
        content:
            "Act as a meeting note taker, and summarize this meeting transcript. Highlight to-do lists and important keypoints from each speaker as highly precisely as possible. Make sure not to give any numbering to anything but add a new line after every keypoint. You must respond using markdown. Some of the titles to add to the summary if necessary are: a meeting topic, attendees, agenda, additional discussion, questions and comments. You must respond in the same language as the meeting transcript.",
    },
    {
        role: "user",
        content: "",
    },
    {
        role: "assistant",
        content: "Markdown summary:",
    },
];

import { ChatCompletionRequestMessage } from "openai";

export const DEFAULT_PROMPT: ChatCompletionRequestMessage[] = [
    {
        role: "system",
        content:
            "Act as a meeting note taker, and summarize this meeting transcript. Highlight to-do lists and important keypoints from each speaker as highly precisely as possible. Make sure not to give any numbering to anything but add a new line after every keypoint. Additionally, add curly brackets around each speaker name.",
    },
    {
        role: "user",
        content: "",
    },
    {
        role: "assistant",
        content: "Keypoints:",
    },
];

import { Configuration, OpenAIApi } from "openai";
import { Message } from "../types/message";
import { DEFAULT_PROMPT } from "./prompt";
import { createChunks, messagesToTranscript } from "./transcript";

const MAX_RETRIES = 5;

const configuration = new Configuration({
    apiKey: localStorage.getItem("OPENAI_API_KEY") || "",
});

// Workaround for use in browser
delete configuration.baseOptions.headers["User-Agent"];

const openai = new OpenAIApi(configuration);

export const summarize = async (messages: Message[]): Promise<string> => {
    const transcript = messagesToTranscript(messages);
    const chunks = createChunks(transcript);
    const summaryList = [];
    const totalChunks = chunks.length;

    // TODO: do a better deep copy
    const prompt = JSON.parse(
        JSON.stringify(DEFAULT_PROMPT),
    ) as typeof DEFAULT_PROMPT;

    for (let i = 0; i < totalChunks; i++) {
        const chunk = chunks[i];
        // set user content
        const userPrompt = prompt.find((p) => p.role === "user");
        if (!userPrompt) {
            throw new Error("User prompt not found");
        }
        userPrompt.content = chunk;

        let retries = 0;

        while (retries < MAX_RETRIES) {
            try {
                console.log(
                    `Making summarization request ${i + 1}/${totalChunks}`,
                );
                const response = await openai.createChatCompletion({
                    model: "gpt-3.5-turbo",
                    messages: prompt,
                    max_tokens: 300,
                });
                const summary =
                    response.data.choices[0].message?.content?.trim();
                if (summary) {
                    summaryList.push(summary);
                    break;
                }
            } catch (error) {
                // TODO: handle error properly
                console.error(error);
            }
        }
        if (retries === MAX_RETRIES) {
            throw new Error("Max retries reached");
        }
    }

    return summaryList.join("\n");
};

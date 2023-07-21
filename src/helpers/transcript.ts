import { Message, MessageTime } from "../types/message";

const WORD_LIMIT = 1300;

/**
 * This function sorts a list of messages by time.
 */
export const sortMessages = (messages: Message[]): Message[] => {
    return messages.sort((a, b) => {
        const messageTimeA = messageTimeToString(a.time);
        const messageTimeB = messageTimeToString(b.time);
        if (messageTimeA < messageTimeB) {
            return -1;
        }
        if (messageTimeA > messageTimeB) {
            return 1;
        }
        return 0;
    });
};

/**
 * This function converts a MessageTime object into a string with the format
 * HH:MM:SS.
 */
export const messageTimeToString = (messageTime: MessageTime): string => {
    return `${messageTime.hours}:${messageTime.minutes}:${messageTime.seconds}`;
};

/**
 * This function formats a list of messages into a transcript.
 *
 * e.g.
 *
 * [00:00:13] User 1: Hello
 *
 * [00:00:14] User 2: Hi
 */
export const messagesToTranscript = (messages: Message[]) => {
    const sortedMessages = sortMessages(messages);
    let fullText = "";
    sortedMessages.forEach((message) => {
        fullText += `[${messageTimeToString(message.time)}] ${
            message.user.name
        }: ${message.text}\n`;
    });
    return fullText;
};

/**
 * Splits a given text into chunks of a specific size.
 */
export const createChunks = (
    text: string,
    wordLimit = WORD_LIMIT,
): string[] => {
    const words = text.split(" ");
    const chunksCount = Math.ceil(words.length / wordLimit);
    const chunks = [];
    for (let i = 0; i < chunksCount; i++) {
        const start = i * wordLimit;
        const end = start + wordLimit;
        chunks.push(words.slice(start, end).join(" "));
    }
    return chunks;
};

/**
 * This function transforms a message object from the database into a Message
 */
export const transformMessage = (message: any): Message => {
    const [hours, minutes, seconds] = message.messageTime.split(":");
    return {
        time: {
            hours: parseInt(hours),
            minutes: parseInt(minutes),
            seconds: parseInt(seconds),
        },
        text: message.text,
        user: {
            name: message.user.displayName,
            id: message.user.userId,
        },
    };
}
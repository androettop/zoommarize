import { ZoomMeeting, ZoomMessage } from "../types/meeting";
import { Message } from "../types/message";

/**
 * This function transforms a message object from the database into a Message
 */
export const transformMessage = (message: ZoomMessage): Message => {
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
};

export const getMessagesFromMeeting = (meeting: ZoomMeeting) => {
    return Object.values(meeting.messages).map(transformMessage);
};

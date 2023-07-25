export interface ZoomUser {
    displayName: string;
    userId: string;
}

export interface ZoomMessage {
    messageTime: string; // HH:MM:SS
    user: ZoomUser;
    text: string;
}

export interface ZoomMeeting {
    messages: Record<string, ZoomMessage>;
    meetingTopic: string;
    createdAt: string;
}

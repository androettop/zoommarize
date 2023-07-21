export interface MessageTime {
    hours: number;
    minutes: number;
    seconds: number;
}

export interface MessageUser {
    name: string;
    id: string;
}

export interface Message {
    time: MessageTime;
    text: string;
    user: MessageUser;
}

import React, {
    FC,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import { ZoomMeeting } from "../types/meeting";

interface State {
    apiKey?: string;
    meetings?: Record<string, ZoomMeeting>;
}

const StorageContext = createContext<{
    state: State;
    setState: (state: any) => void;
}>({ state: {}, setState: () => {} });

interface StorageProviderProps {
    children: React.ReactNode;
}

// TODO: use chrome.storage instead of localStorage

export const StorageProvider: FC<StorageProviderProps> = ({ children }) => {
    const [state, setState] = useState(() => {
        const storedState = localStorage.getItem("state");
        return storedState ? JSON.parse(storedState) : {};
    });

    useEffect(() => {
        localStorage.setItem("state", JSON.stringify(state));
    }, [state]);

    return (
        <StorageContext.Provider value={{ state, setState }}>
            {children}
        </StorageContext.Provider>
    );
};

export const useStorage = () => useContext(StorageContext);

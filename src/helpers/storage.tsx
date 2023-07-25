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
    setState: (state: State) => void;
}>({ state: {}, setState: () => {} });

interface StorageProviderProps {
    children: React.ReactNode;
}

export const StorageProvider: FC<StorageProviderProps> = ({ children }) => {
    const [state, _setState] = useState<State>({});

    useEffect(() => {
        chrome.storage.local.get("state").then((result) => {
            _setState(result.state || {});
        });
    }, []);

    const setState = (state: State) => {
        _setState(state);
        chrome.storage.local.set({ state });
    };

    return (
        <StorageContext.Provider value={{ state, setState }}>
            {children}
        </StorageContext.Provider>
    );
};

export const useStorage = () => useContext(StorageContext);

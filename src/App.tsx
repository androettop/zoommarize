import { Route, Routes } from "react-router-dom";
import { globalStyles } from "./helpers/globalStyles";
import { useStorage } from "./helpers/storage";
import ApiKeyView from "./views/ApiKeyView/ApiKeyView";
import MeetingsView from "./views/MeetingsView/MeetingsView";
import SettingsView from "./views/SettingsView/SettingsView";

function App() {
    globalStyles();
    const { state } = useStorage();

    return (
        <div>
            {!state.apiKey ? (
                <ApiKeyView />
            ) : (
                <Routes>
                    <Route path="/" element={<MeetingsView />} />
                    <Route path="/settings" element={<SettingsView />} />
                </Routes>
            )}
        </div>
    );
}

export default App;

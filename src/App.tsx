import { Route, Routes } from "react-router-dom";
import { globalStyles } from "./helpers/globalStyles";
import { useStorage } from "./helpers/storage";
import ApiKey from "./views/ApiKey/ApiKey";
import Meetings from "./views/Meetings/Meetings";

function App() {
    globalStyles();
    const { state, setState } = useStorage();

    return (
        <div>
            {!state.apiKey ? (
                <ApiKey />
            ) : (
                <Routes>
                    <Route path="/" element={<Meetings />} />
                </Routes>
            )}
        </div>
    );
}

export default App;

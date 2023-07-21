import React, { useState } from "react";
import { globalCss } from "./theme";

const globalStyles = globalCss({
    body: { margin: 0, fontFamily: "$default" },
});

declare const chrome: any;

function App() {
    const [apiKey, _setApiKey] = useState(
        localStorage.getItem("OPENAI_API_KEY") || "",
    );
    const setApiKey = (apiKey: string) => {
        localStorage.setItem("OPENAI_API_KEY", apiKey);
        _setApiKey(apiKey);
    };

    globalStyles();
    return (
        <div>
            <label>
                openai api key <br />
                <input
                    type="text"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                />
                <button onClick={() => {
                    chrome.storage.local.get("state").then((e:any) => console.log(e))
                }}> asd</button>
            </label>
        </div>
    );
}

export default App;

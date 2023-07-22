import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StorageProvider } from "./helpers/storage";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);

root.render(
    <React.StrictMode>
        <StorageProvider>
            <App />
        </StorageProvider>
    </React.StrictMode>,
);

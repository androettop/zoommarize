import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StorageProvider } from "./helpers/storage";
import { MemoryRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);

root.render(
    <React.StrictMode>
        <StorageProvider>
            <MemoryRouter>
                <App />
            </MemoryRouter>
        </StorageProvider>
    </React.StrictMode>,
);

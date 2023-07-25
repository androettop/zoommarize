import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StorageProvider } from "./helpers/storage";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);

root.render(
    <React.StrictMode>
        <StorageProvider>
            <BrowserRouter>
                 <App />
            </BrowserRouter>
        </StorageProvider>
    </React.StrictMode>,
);

import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./App";

export function render(url: string) {
    // Simple static hook for SSR — avoids useSyncExternalStore entirely
    const staticHook = () => [url, () => { }] as [string, any];

    const helmetContext: any = {};

    const html = ReactDOMServer.renderToString(
        <App routerHook={staticHook} helmetContext={helmetContext} />
    );

    return { html, helmet: helmetContext };
}

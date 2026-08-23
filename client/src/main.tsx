import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root")!;

// In production (SSG), the root has pre-rendered HTML → hydrate it.
// In development, the root is empty (or has comments) → use createRoot instead.
if (import.meta.env.PROD) {
    hydrateRoot(rootElement, <App />);
} else {
    createRoot(rootElement).render(<App />);
}

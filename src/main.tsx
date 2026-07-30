import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

const container = document.getElementById("root")!;

// Prerendered pages ship real markup inside #root, so hydrate them rather than
// throwing the server HTML away and re-rendering from scratch.
if (container.hasChildNodes()) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}

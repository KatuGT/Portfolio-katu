import App from "./App";
import "./normalize.css";
import "./index.css";
import { createRoot } from "react-dom/client";

import './i18n';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

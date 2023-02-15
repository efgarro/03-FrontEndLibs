import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./css/base.css";
import "./css/layout.css";
import "./css/modules.css";

const root = createRoot(document.getElementById("root"));
root.render(<App />);

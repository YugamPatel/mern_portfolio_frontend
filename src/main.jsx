/*
 * main.jsx — Application Entry Point
 *
 * Mounts the React app into the #root DOM element and wraps it with:
 *   - Redux Provider  — makes the store available to all components
 *   - BrowserRouter   — enables client-side routing via react-router-dom
 *   - React.StrictMode — highlights potential issues during development
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App   from "./App.jsx";
import store from "./store/index.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

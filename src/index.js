import React from "react";
import * as ReactDOMClient from "react-dom/client";
import './css/variables.css'
import App from "./App";

const rootElement =  document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);
root.render(
    <App />
);
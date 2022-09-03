import React from "react"
import ReactDOM from "react-dom"
import $ from "simple-jsx-react"
import { BrowserRouter } from "react-router-dom"
import { hydrate, render } from "react-dom"

import App from "./App.jsx"

const APP = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

const ROOT = $("#root");

if (ROOT.hasChildNodes()) {
    hydrate(APP, ROOT);
} else {
    render(APP, ROOT);
}
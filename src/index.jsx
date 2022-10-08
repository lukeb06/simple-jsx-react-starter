import React from "react"
import ReactDOM from "react-dom"
import $ from "simple-jsx-react"
import { BrowserRouter } from "react-router-dom"
import { hydrate, render } from "react-dom"

import Routes from "./Routes.jsx"

const APP = (
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
);

const ROOT = $("#root");

if (ROOT.hasChildNodes()) {
    hydrate(APP, ROOT);
} else {
    render(APP, ROOT);
}
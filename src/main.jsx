import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.scss';

import App from './Pages/App.jsx';

const ROOT = document.getElementById('root');

const ROUTER = (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
        </Routes>
    </BrowserRouter>
);

if (ROOT.hasChildNodes()) {
    ReactDOM.hydrateRoot(ROUTER, ROOT);
} else {
    ReactDOM.createRoot(ROOT).render(ROUTER);
}

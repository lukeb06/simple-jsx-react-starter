import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@/global.css';
import '@/index.scss';

import { ThemeProvider } from '@/components/theme-provider.jsx';
import { StoreProvider } from '@/hooks/use-store.jsx';

import App from '@/Pages/App.jsx';

import Navbar from '@/components/Navbar.jsx';

const ROOT = document.getElementById('root');

const ROUTER = (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <StoreProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<App />} />
                </Routes>
            </BrowserRouter>
        </StoreProvider>
    </ThemeProvider>
);

if (ROOT.hasChildNodes()) {
    ReactDOM.hydrateRoot(ROUTER, ROOT);
} else {
    ReactDOM.createRoot(ROOT).render(ROUTER);
}

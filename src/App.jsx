import React, { useState, useEffect } from 'react'
import "./app.scss"

import Register from "./Register.jsx"
import Home from "./Home.jsx"

import Cookies from "js-cookie"

const App = () => {
    const [authed, setAuthed] = useState(false);
    const [auth, updateAuth] = useState(0);

    const [authChecked, setAuthChecked] = useState(false);

    const checkAuth = async () => {
        if (!Cookies.get("email") || !Cookies.get("password")) return setAuthed(false);

        let rawData = await fetch("/auth");
        let parsedData = await rawData.json();
        let { valid } = parsedData;

        if (valid) setAuthed(true);
    }

    const uAuth = () => {
        updateAuth(auth => auth + 1);
    }

    useEffect(() => {
        setTimeout(() => setAuthChecked(true),250);
    }, [authed]);

    useEffect(checkAuth, []);

    useEffect(checkAuth, [auth]);

    return (
        <>
            {authed ? <Home updateAuth={uAuth}></Home> : (authChecked ? <Register updateAuth={uAuth}></Register> : <></>)}
        </>
    )
}

export default App

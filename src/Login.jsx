import React, { useState, useEffect, useRef } from 'react'

import Cookies from "js-cookie"

const Login = ({ setDoLogin, updateAuth }) => {
    const [error, setError] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();

    const submitForm = async e => {
        e.preventDefault();

        let email = encodeURIComponent(emailRef.current.value);
        let password = encodeURIComponent(passwordRef.current.value);

        if (!decodeURIComponent(email).match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/g)) {
            setError("Invalid email address.");
            return;
        }

        if (!decodeURIComponent(password).match(/[A-Za-z0-9]{6,32}/g)) {
            setError("Password must be between 6 and 32 characters and contain only letters, numbers, and symbols.");
            return;
        }

        let rawData = await fetch(`/doLogin?email=${email}&password=${password}`);
        let parsedData = await rawData.json();
        let { error } = parsedData;

        if (error) {
            setError(error);
            return;
        }

        Cookies.set("email", decodeURIComponent(email));
        Cookies.set("password", decodeURIComponent(password));

        updateAuth();
    }

    return (
        <div id="login">
            <div className="register-box">
                <form id="loginForm" onSubmit={e => submitForm(e)}>
                    <input ref={emailRef} placeholder="Email" type="email" name="email" id="emailInput" />
                    <input ref={passwordRef} placeholder="Password" type="password" name="password" id="passwordInput" />
                    <div id="errorText"><b>{error}</b></div>
                    <input type="submit" value="Login" />
                    <div id="signupText"><div>Don't have an account? <a onClick={() => setDoLogin(false)}>Signup now</a></div></div>
                </form>
            </div>
        </div>
    )
}

export default Login
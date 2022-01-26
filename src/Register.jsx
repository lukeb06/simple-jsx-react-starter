import React, { useState, useEffect, useRef } from 'react'

import Login from "./Login.jsx"

import Cookies from "js-cookie"

const Register = ({ updateAuth }) => {
    const [error, setError] = useState("");
    const [doLogin, setDoLogin] = useState(true);

    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();

    const submitForm = async e => {
        e.preventDefault();

        let email = encodeURIComponent(emailRef.current.value);
        let password = encodeURIComponent(passwordRef.current.value);
        let confirm = encodeURIComponent(confirmRef.current.value);
        let firstName = encodeURIComponent(firstNameRef.current.value);
        let lastName = encodeURIComponent(lastNameRef.current.value);

        if (!decodeURIComponent(firstName).match(/[A-Za-z-]+/g) || !decodeURIComponent(lastName).match(/[A-Za-z-]+/g)) {
            setError("Please enter a vaild name");
            return;
        }

        if (password != confirm) {
            setError("Passwords do not match.");
            return;
        }

        if (!decodeURIComponent(email).match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/g)) {
            setError("Invalid email address.");
            return;
        }

        if (!decodeURIComponent(password).match(/[A-Za-z0-9]{6,32}/g)) {
            setError("Password must be between 6 and 32 characters and contain only letters, numbers, and symbols.");
            return;
        }

        let rawData = await fetch(`/doSignup?email=${email}&password=${password}&first=${firstName}&last=${lastName}`);
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
        <>
            {!doLogin ? (<div id="register">
                <div className="register-box">
                    <form id="registerForm" onSubmit={e => submitForm(e)}>
                        <input ref={firstNameRef} placeholder="First Name" id="firstNameInput"/>
                        <input ref={lastNameRef} placeholder="Last Name" id="lastNameInput"/>
                        <input ref={emailRef} placeholder="Email" type="email" name="email" id="emailInput" />
                        <input ref={passwordRef} placeholder="Password" type="password" name="password" id="passwordInput" />
                        <input ref={confirmRef} placeholder="Confirm password" type="password" name="passwordConfirm" id="passwordConfirmInput" />
                        <div id="errorText"><b>{error}</b></div>
                        <input type="submit" value="Signup" />
                        <div id="loginText"><div>Already have an account? <a onClick={() => setDoLogin(true)}>Login now</a></div></div>
                    </form>
                </div>
            </div>) : <Login updateAuth={updateAuth} setDoLogin={setDoLogin}/>}
        </>
    )
}

export default Register
import React, { useState, useEffect } from 'react'
import "./app.scss"

import Login from "./Login.jsx"
import Signup from "./Signup.jsx"
import Home from "./Home.jsx"

const App = () => {
    // React state for showing the login page
    const [showLogin, setShowLogin] = useState(true);

    // React state for showing the home page
    const [showHome, setShowHome] = useState(false);

    const showLoginPage = () => {
        setShowLogin(true);
    }

    const showSignupPage = () => {
        setShowLogin(false);
    }

    const doShowHomePage = async () => {
        const rawData = fetch("/validateUser");
        const valid = await rawData.json();
        if (valid) {
            setShowHome(true);
        }
    }

    return (
        <>
            {/* login/signup div */}
            {!showHome ? (<div className="login-signup">
                <form className="login-signup-form" action="">
                    <div className="login-signup-form-container">
                        <input onClick={showLoginPage} className="login-signup-form-input" type="radio" name="loginSignupRadio" id="loginRadio" value="Login" defaultChecked />
                        <label className="login-signup-form-label" htmlFor="loginRadio">Login</label>
                    </div>
                    <div className="login-signup-form-container">
                        <input onClick={showSignupPage} className="login-signup-form-input" type="radio" name="loginSignupRadio" id="signupRadio" value="Signup" />
                        <label className="login-signup-form-label" htmlFor="signupRadio">Signup</label>
                    </div>
                </form>
                {/* login div */}
                {showLogin && <Login doShowHomePage={doShowHomePage} />}
                {/* signup div */}
                {!showLogin && <Signup doShowHomePage={doShowHomePage} />}
            </div>) : <Home />}
        </>
    )
}

export default App
import React, { useState, useEffect } from 'react'

import Cookies from "js-cookie"

const Signup = ({ doShowHomePage }) => {
    const handleButtonEvent = e => {
        e.preventDefault();
    }

    return (
        <div className="login-signup-dialog" id="signup">
            <form className="form" action="/">
                <label className="form-label" htmlFor="email">Email</label>
                <input className="form-input" type="email" name="email" id="email" />

                <label className="form-label" htmlFor="password">Password</label>
                <input className="form-input" type="password" name="password" id="password" />

                <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                <input className="form-input" type="password" name="confirmPassword" id="confirmPassword" />

                <button onClick={e => handleButtonEvent(e)} className="form-button" type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Signup
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>Hello, React!</h1>
            <h2>
                <Link to="/info">View more</Link>
            </h2>
        </>
    )
}

export default Home;
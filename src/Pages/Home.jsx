import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { BsArrowRight } from "react-icons/bs";

const Home = () => {
    return (
        <div className="home-body center-wrapper">
            <main>
                <div className="home-wrapper center-wrapper">
                    <h1>Hello, React!</h1>
                    <h2>
                        <Link to="/info">View more <BsArrowRight /></Link>
                    </h2>
                </div>
            </main>
        </div>
    )
}

export default Home;
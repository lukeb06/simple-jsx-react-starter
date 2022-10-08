import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Info = () => {
    return (
        <>
            <section>
                <h1>React</h1>
                <h2>A JavaScript library for building user interfaces</h2>
            </section>
            <main>
                <section>
                    <h3>What is React?</h3>
                    <p>
                        React is a JavaScript library for building user interfaces.
                        It is maintained by Facebook and a community of individual developers and companies.
                    </p>

                    <h3>Why use React?</h3>
                    <p>
                        React is a popular JavaScript library among engineers.
                        It was open-sourced in 2013 and is maintained by Facebook.
                        React can be used as a base in the development of single-page or mobile applications.
                    </p>

                    <h3>How does React work?</h3>
                    <p>
                        React creates a Virtual DOM, where the changes in application data are reflected.
                        This allows the app to update only the changed parts without reloading the page.
                        This increases the performance of applications and makes them more responsive.
                    </p>

                    <h3>Where can I learn more?</h3>
                    <p>
                        You can learn more in the <a href="https://reactjs.org/docs/getting-started.html">official documentation</a>.
                    </p>

                    <h3>Back to <Link to="/">Home</Link></h3>
                </section>
            </main>
        </>
    )
}

export default Info;
import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import "./app.scss"

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={
                    <>
                        <center id="title"><Link to="/example">Hello, React!</Link></center>
                    </>
                }></Route>
                <Route path="/example" element={
                    <>
                        <center id="title"><Link to="/">Hello, Router!</Link></center>
                    </>
                }></Route>
            </Routes>
        </>
    )
}

export default App

import React, { useState, useEffect } from 'react';

import APIStatus from '../Components/APIStatus.jsx';

const App = () => {
    return (
        <>
            <center className="grid place-items-center h-full my-4">
                <h1 className="font-bold text-4xl">
                    <APIStatus />
                </h1>
            </center>
        </>
    );
};

export default App;

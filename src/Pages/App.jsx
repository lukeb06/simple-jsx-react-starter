import React, { useState, useEffect } from 'react';

import APIStatus from '../Components/APIStatus.jsx';

const App = () => {
    return (
        <center>
            <h1>
                <APIStatus />
            </h1>
        </center>
    );
};

export default App;

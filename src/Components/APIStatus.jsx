import React, { useState, useEffect } from 'react';

import fetcher from '../Utils/fetcher.js';

const APIStatus = () => {
    const [header, setHeader] = useState('Loading...');

    useEffect(() => {
        fetcher('status').then(({ status }) => setHeader(status));
    }, []);

    return <>{header}</>;
};

export default APIStatus;

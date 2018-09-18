import React from 'react';
import { CircularProgress } from '@material-ui/core';

const Loader = () => {
    return (
        <div style={{ textAlign: 'center', margin: 8 }}>
            <CircularProgress />
        </div>
    );
};

export default Loader;
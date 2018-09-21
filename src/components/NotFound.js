import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';

const NotFound = ({ title, children }) => {
    return (
        <Fragment>
            <Typography variant="display1" align="center">It's a trap!</Typography>
            <Typography variant="subheading" align="center">{title}</Typography>
            {children}
        </Fragment>
    );
};

export default NotFound;
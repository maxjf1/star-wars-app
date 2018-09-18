import React, { Component, Fragment } from 'react';
import Header from '../Header';
import { Typography } from '@material-ui/core';

class About extends Component {
    render() {
        return (
            <Fragment>
                <Header title="About" backButton />
                <main>
                    <Typography gutterBottom>
                        This is an example page
                    </Typography>
                </main>
            </Fragment>
        );
    }
}

export default About;
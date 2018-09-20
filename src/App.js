import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import 'typeface-roboto'

import { theme } from './settings'
import UpdateHandler from './components/UpdateHandler'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
import People from './components/views/People';
import PeopleSingle from './components/views/PeopleSingle';
import PlanetSingle from './components/views/PlanetSingle';

class App extends Component {
    render() {
        return (
            <Router>
                <MuiThemeProvider theme={theme}>
                    <UpdateHandler appServiceWorker={this.props.appServiceWorker}>
                        <Route exact path="/" render={() => <Redirect to="/people" />} />
                        <Route exact path="/people" component={People} />
                        <Route path="/people/:id" component={PeopleSingle} />
                        <Route path="/planets/:id" component={PlanetSingle} />
                    </UpdateHandler>
                </MuiThemeProvider>
            </Router>
        );
    }
}

export default App;

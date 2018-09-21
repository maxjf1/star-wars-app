import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import 'typeface-roboto'

import { theme } from './settings'
import UpdateHandler from './components/UpdateHandler'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
import People from './components/views/People';
import PeopleSingle from './components/views/PeopleSingle';
import PlanetSingle from './components/views/PlanetSingle';
import MovieSingle from './components/views/MovieSingle/MovieSingle';

class App extends Component {

    welcomeNotification() {
        if (!("Notification" in window))
            return console.warn('No notifications support!')
            
        if (localStorage.getItem('welcomeNotification')) return
        Notification
            .requestPermission()
            .then(result => {
                console.log(result)
                if (result === 'granted') {
                    new Notification("May the force be with you!", {
                        body: "Welcome to the Star Wars WebApp!",
                        icon: './icons/favicon-96x96.png'
                    })
                    localStorage.setItem('welcomeNotification', 'true')
                }
            });
    }

    componentDidMount() {
        this.welcomeNotification()
    }

    render() {
        return (
            <Router>
                <MuiThemeProvider theme={theme}>
                    <UpdateHandler appServiceWorker={this.props.appServiceWorker}>
                        <Route exact path="/" render={() => <Redirect to="/people" />} />
                        <Route exact path="/people" component={People} />
                        <Route path="/people/:id" component={PeopleSingle} />
                        <Route path="/planets/:id" component={PlanetSingle} />
                        <Route path="/movies/:id" component={MovieSingle} />
                    </UpdateHandler>
                </MuiThemeProvider>
            </Router>
        );
    }
}

export default App;

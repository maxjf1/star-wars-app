import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import 'typeface-roboto'

import { theme } from './settings'
import UpdateHandler from './components/UpdateHandler'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import People from './components/views/People';
import PeopleSingle from './components/views/PeopleSingle';
import PlanetSingle from './components/views/PlanetSingle';
import MovieSingle from './components/views/MovieSingle/MovieSingle';

const notificationKey = 'welcomeNotification'
class App extends Component {

    welcomeNotification(force = false) {
        "Notification" in window &&
            (force || !localStorage.getItem(notificationKey)) &&
            Notification
                .requestPermission()
                .then(result => result === 'granted' ? navigator.serviceWorker.ready : Promise.reject(result))
                .then(registration => registration.showNotification('May the force be with you!', {
                    body: 'Welcome to the Star Wars WebApp!',
                    badge: './icons/android-icon-72x72.png',
                    icon: './icons/favicon-96x96.png',
                    sound: './notification.mp3',
                    tag: 'welcome',
                    renotify: true, 
                    vibrate: [500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 450, 110, 200, 110, 170, 40, 500],
                }))
                .then(() => localStorage.setItem(notificationKey, '1'))
    }

    componentDidMount() {
        this.welcomeNotification()
    }

    render() {
        return (
            <Router>
                <MuiThemeProvider theme={theme}>
                    <UpdateHandler appServiceWorker={this.props.appServiceWorker}>
                        <Switch>
                            <Redirect exact from="/" to="/people" />
                            <Route exact path="/people" component={People} />
                            <Route path="/people/:id" component={PeopleSingle} />
                            <Route path="/planets/:id" component={PlanetSingle} />
                            <Route path="/movies/:id" component={MovieSingle} />
                            <Route exact path="/notification" render={() => this.welcomeNotification(true) || <Redirect to="/people" />} />
                        </Switch>
                    </UpdateHandler>
                </MuiThemeProvider>
            </Router>
        );
    }
}

export default App;

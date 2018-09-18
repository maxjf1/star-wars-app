import React, { Component, Fragment } from 'react';
import { Snackbar, Button } from '@material-ui/core'

class UpdateHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showInstalledMessage: false,
            showUpdateMessage: false,
            showUpdateOnRestartMessage: false,
        }
    }

    componentDidMount() {
        const { appServiceWorker } = this.props
        if (appServiceWorker) {
            appServiceWorker.onInstalled(() => this.setState({ showInstalledMessage: true }))
            appServiceWorker.onUpdateFound(() => this.setState({ showUpdateMessage: true }))
        }
    }

    render() {
        return (
            <Fragment>
                {this.props.children}
                <Snackbar
                    open={this.state.showInstalledMessage}
                    autoHideDuration={6000}
                    onClose={() => this.setState({ showInstalledMessage: false })}
                    message="The APP is ready to  work offline."
                />
                <Snackbar
                    open={this.state.showUpdateMessage}
                    onClose={() => this.setState({ showUpdateMessage: false, showUpdateOnRestartMessage: true })}
                    message="A new version is available."
                    action={[
                        <Button key="undo" color="secondary" size="small" onClick={() => window.location.reload()}>
                            UPDATE
                        </Button>
                    ]}
                />
                <Snackbar
                    open={this.state.showUpdateOnRestartMessage}
                    autoHideDuration={6000}
                    onClose={() => this.setState({ showUpdateOnRestartMessage: false })}
                    message="The APP will be updated on the next restart."
                />
            </Fragment>
        );
    }
}

export default UpdateHandler;
import React, { Component } from 'react';
import { withStyles, IconButton, Typography, Toolbar, AppBar } from '@material-ui/core'
import {
    ArrowBack as ArrowBackIcon,
} from '@material-ui/icons'


const styles = {
    root: {
        // paddingTop: 64
    },
    flex: {
        flex: 1,
    },
    menuButtonWrapper: {
        marginLeft: -12,
        marginRight: 20,
    },
}

class Header extends Component {
    
    goBack = () => window.history.back()

    render() {
        const { children, classes, title, backButton = false, rightAction, centerAction, appBarProps, ...props } = this.props

        return (
            <AppBar position="sticky" {...appBarProps} {...props}>
                <Toolbar>
                    <div className={classes.menuButtonWrapper}>
                        {backButton &&
                            <IconButton color="inherit" aria-label="Menu" onClick={this.goBack}>
                                <ArrowBackIcon />
                            </IconButton>}
                    </div>

                    <div className={classes.flex}>
                        {centerAction || (title &&
                            <Typography variant="title" color="inherit">
                                {title}
                            </Typography>
                        )}
                    </div>

                    {rightAction && <div>{rightAction}</div>}
                </Toolbar>
                {children}
            </AppBar>
        )
    }

}

export default withStyles(styles)(Header);

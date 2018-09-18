import React, { Fragment } from 'react';
import { List, ListItem, ListItemText, Avatar, Typography } from '@material-ui/core';
import Loader from './Loader';


function getInitials(name) {
    name = name.toUpperCase().replace('-', '').split(' ')
    if (name.length >= 2)
        return name[0][0] + name[1][0]
    return name[0][0] + name[0][1]
}

function getId(url) {
    url = url.split('/')
    return Number(url[url.length - 2])
}

const PeopleList = ({ items, loading, nextPageButton, onNextPage }) => (
    <Fragment>
        {items.length !== 0 &&
            <List component="nav">
                {items.map(({ name, mass, height, url }) =>
                    <ListItem key={getId(url)} button>
                        <Avatar>{getInitials(name)}</Avatar>
                        <ListItemText primary={name} secondary={`Weight: ${mass}, Height: ${height}CM, `} />
                    </ListItem>
                )}
                {nextPageButton &&
                    <ListItem button onClick={onNextPage}>
                        <ListItemText primary="Carregar mais..." />
                    </ListItem>
                }
            </List>
        }
        {loading && <Loader />}

        {!items.length && !loading &&
            <Typography variant="subheading" align="center">This search didn't return any results. Try again.</Typography>
        }

    </Fragment>
)


export default PeopleList;
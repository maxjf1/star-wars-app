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
        {!items.length && !loading &&
            <Fragment>
                <Typography variant="display1" align="center">It's a trap!</Typography>
                <Typography variant="subheading" align="center">No match found. Try to change the filter and the search terms.</Typography>
                {nextPageButton && <Typography variant="subheading" align="center">You can also...</Typography>}
            </Fragment>
        }
        <List component="nav">
            {items.length !== 0 &&
                items.map(({ name, mass, height, url }) =>
                    <ListItem key={getId(url)} button>
                        <Avatar>{getInitials(name)}</Avatar>
                        <ListItemText primary={name} secondary={`Weight: ${mass}, Height: ${height}CM, `} />
                    </ListItem>
                )
            }
            {nextPageButton &&
                <ListItem button onClick={onNextPage}>
                    <ListItemText primary="Load more..." />
                </ListItem>
            }
        </List>
        {loading && <Loader />}

    </Fragment>
)


export default PeopleList;
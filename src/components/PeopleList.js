import React, { Fragment } from 'react';
import { List, ListItem, ListItemText, Avatar, Typography, Divider } from '@material-ui/core';
import Loader from './Loader';
import { Link } from 'react-router-dom'
import { getId, getInitials } from '../Utils';


const PeopleList = ({ items, loading, nextPageButton, onNextPage, divider }) => (
    <Fragment>
        {!items.length && !loading &&
            <Fragment>
                <Typography variant="display1" align="center">It's a trap!</Typography>
                <Typography variant="subheading" align="center">No match found. Try to change the filter and the search terms.</Typography>
                {nextPageButton && <Typography variant="subheading" align="center">You can also...</Typography>}
            </Fragment>
        }
        <List component="nav" disablePadding={divider}>
            {items.length !== 0 &&
                items.map(({ name, mass, height, url }) =>
                    <Fragment key={getId(url)}>
                        {divider && <Divider />}
                        <ListItem button component={Link} to={`/people/${getId(url)}`} >
                            <Avatar>{getInitials(name)}</Avatar>
                            <ListItemText primary={name} secondary={`Weight: ${mass}, Height: ${height}CM, `} />
                        </ListItem>
                    </Fragment>
                )
            }
            {nextPageButton &&
                <ListItem button onClick={onNextPage} >
                    <ListItemText primary="Load more..." />
                </ListItem>
            }
        </List>
        {loading && <Loader />}

    </Fragment>
)


export default PeopleList;
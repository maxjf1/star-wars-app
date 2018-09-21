import React, { Fragment } from 'react';
import { List, ListItem, ListItemText, Avatar, Divider } from '@material-ui/core';
import Loader from './Loader';
import { Link } from 'react-router-dom'
import { getId, getInitials } from '../Utils';


const PeopleList = ({ items, loading, nextPageButton, onNextPage, divider }) => (
    <Fragment>
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
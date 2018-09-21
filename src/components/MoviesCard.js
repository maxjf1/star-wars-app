import React, { Fragment } from 'react';
import { Typography, Card, CardContent, Grow, List, ListItem, ListItemText, Divider, Avatar, ListItemAvatar } from '@material-ui/core';
import { Link } from 'react-router-dom'

const MoviesCard = ({ movies }) => {
    return (
        <Grow in>
            <Card style={{ margin: 10 }} >
                <CardContent>
                    <Typography variant="headline" component="h2">Episodes</Typography>
                    <Typography color="textSecondary" >Movie appearances</Typography>
                </CardContent>
                <List component="nav" disablePadding>
                    {movies.map(({ episode_id, title, director, producer }) => {
                        return (
                            <Fragment key={episode_id}>
                                <Divider />
                                <ListItem button component={Link} to={`/movies/${episode_id}`} >
                                    <ListItemAvatar>
                                        <Avatar>EP{episode_id}</Avatar>
                                    </ListItemAvatar>                                                    <ListItemText
                                        primary={`Episode ${episode_id}: ${title}`}
                                        secondary={`Directed by ${director}. Produced by ${producer}`} />
                                </ListItem>
                            </Fragment>
                        )
                    })}
                </List>
            </Card>
        </Grow>
    );
};

export default MoviesCard;
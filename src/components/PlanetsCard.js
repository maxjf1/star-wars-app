import React, { Fragment } from 'react';
import { Typography, Card, CardContent, Grow, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { getId } from '../Utils';

const PlanetsCard = ({ planet, planets = [planet], title = 'Planets', description = 'Featured planets' }) => {
    return (
        <Grow in>
            <Card style={{ margin: 10 }} >
                <CardContent>
                    <Typography variant="headline" component="h2">{title}</Typography>
                    <Typography color="textSecondary" >{description}</Typography>
                </CardContent>
                <List disablePadding>
                    {planets.map(({ url, name, terrain, population }) =>
                        <Fragment key={getId(url)}>
                            <Divider />
                            <ListItem button component={Link} to={`/planets/${getId(url)}`} >
                                <ListItemText
                                    primary={name}
                                    secondary={`${terrain}, population:${population}`} />
                            </ListItem>
                        </Fragment>
                    )}
                </List>
            </Card>
        </Grow>
    );
};

export default PlanetsCard;
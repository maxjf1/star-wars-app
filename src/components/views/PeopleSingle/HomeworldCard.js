import React from 'react';
import { Typography, Card, CardContent, Grow, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { getId } from '../../../Utils';

const HomeworldCard = ({ homeworld }) => {
    return (
        <Grow in>
            <Card style={{ margin: 10 }} >
                <CardContent>
                    <Typography variant="headline" component="h2">Homeworld</Typography>
                    <Typography color="textSecondary" >Planet that this person was born on or inhabits.</Typography>
                </CardContent>
                <Divider />
                <List disablePadding>
                    <ListItem button component={Link} to={`/planets/${getId(homeworld.url)}`} >
                        <ListItemText
                            primary={homeworld.name}
                            secondary={`${homeworld.terrain}, population:${homeworld.population}`} />
                    </ListItem>
                </List>
            </Card>
        </Grow>
    );
};

export default HomeworldCard;
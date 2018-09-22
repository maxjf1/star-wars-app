import React, { Fragment } from 'react';
import { Typography, Card, CardContent, Grow, List, ListItem, ListItemText, Divider, Avatar, ListItemAvatar } from '@material-ui/core';
import { getId, getInitials } from '../Utils';

const StarshipsCard = ({ starships, description = 'Featured starships' }) => {
    return (
        <Grow in>
            <Card style={{ margin: 10 }} >
                <CardContent>
                    <Typography variant="headline" component="h2">Starships</Typography>
                    <Typography color="textSecondary" >{description}</Typography>
                </CardContent>
                <List disablePadding>
                    {starships.map(({ url, name, starship_class, model }) => {
                        return (
                            <Fragment key={getId(url)}>
                                <Divider />
                                <ListItem  >
                                    <ListItemAvatar>
                                        <Avatar>{getInitials(name)}</Avatar>
                                    </ListItemAvatar>                                                    <ListItemText
                                        primary={name}
                                        secondary={`${starship_class}, model ${model}`} />
                                </ListItem>
                            </Fragment>
                        )
                    })}
                </List>
            </Card>
        </Grow>
    );
};

export default StarshipsCard;
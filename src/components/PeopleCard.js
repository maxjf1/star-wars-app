import React from 'react';
import { Typography, Card, CardContent, Grow } from '@material-ui/core';
import PeopleList from './PeopleList';

const PeopleCard = ({ people, title = 'People', description = 'Featured People' }) => {
    return (
        <Grow in>
            <Card style={{ margin: 10 }} >
                <CardContent>
                    <Typography variant="headline" component="h2">{title}</Typography>
                    <Typography color="textSecondary" >{description}</Typography>
                </CardContent>
                <PeopleList items={people} divider />
            </Card>
        </Grow>
    );
};

export default PeopleCard;
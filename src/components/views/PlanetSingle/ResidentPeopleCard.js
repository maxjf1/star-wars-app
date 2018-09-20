import React from 'react';
import { Typography, Card, CardContent, Grow } from '@material-ui/core';
import PeopleList from '../../PeopleList';

const ResidentPeopleCard = ({ people }) => {
    return (
        <Grow in>
            <Card style={{ margin: 10 }} >
                <CardContent>
                    <Typography variant="headline" component="h2">Resident People</Typography>
                    <Typography color="textSecondary" >People that live on this planet.</Typography>
                </CardContent>
                <PeopleList items={people} divider />
            </Card>
        </Grow>
    );
};

export default ResidentPeopleCard;
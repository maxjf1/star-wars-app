import React from 'react';
import { Typography, Card, CardContent, Grow, Divider } from '@material-ui/core';

const PeopleSingleCard = ({ people }) => {
    return (
        <Grow in>
            <Card style={{ margin: 10 }} >
                <CardContent>
                    <Typography variant="headline" component="h2">{people.name}</Typography>
                    <Typography color="textSecondary" gutterBottom>{people.gender}, born in {people.birth_year}</Typography>
                </CardContent>
                <Divider />
                <CardContent>
                    <Typography component="dl">
                        <dt>Hair Color: </dt>
                        <dd>{people.hair_color}</dd>
                        <dt>Eye Color: </dt>
                        <dd>{people.eye_color}</dd>
                        <dt>Skin Color: </dt>
                        <dd>{people.skin_color}</dd>
                        <dt>Height: </dt>
                        <dd>{people.height}{people.height !== 'unknown' && 'cm'}</dd>
                        <dt>Mass: </dt>
                        <dd>{people.mass}{people.mass !== 'unknown' && 'Kg'}</dd>
                    </Typography>
                </CardContent>
            </Card>
        </Grow>

    );
};

export default PeopleSingleCard;
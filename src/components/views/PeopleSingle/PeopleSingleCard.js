import React from 'react';
import { Typography, Card, CardContent, Grow, Divider } from '@material-ui/core';

const PeopleSingleCard = ({ people }) => {
    const { name, gender, birth_year, hair_color, eye_color, skin_color, height, mass } = people
    return (
        <Grow in>
            <Card style={{ margin: 10 }} >
                <CardContent>
                    <Typography variant="headline" component="h2">{name}</Typography>
                    <Typography color="textSecondary">Gender {gender}, born in {birth_year}</Typography>
                </CardContent>
                <Divider />
                <CardContent>
                    <Typography component="dl">
                        <dt>Hair Color: </dt>
                        <dd>{hair_color}</dd>
                        <dt>Eye Color: </dt>
                        <dd>{eye_color}</dd>
                        <dt>Skin Color: </dt>
                        <dd>{skin_color}</dd>
                        <dt>Height: </dt>
                        <dd>{height}{height !== 'unknown' && 'cm'}</dd>
                        <dt>Mass: </dt>
                        <dd>{mass}{mass !== 'unknown' && 'Kg'}</dd>
                    </Typography>
                </CardContent>
            </Card>
        </Grow>

    );
};

export default PeopleSingleCard;
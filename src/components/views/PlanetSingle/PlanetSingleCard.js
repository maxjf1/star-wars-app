import React from 'react';
import { Typography, Card, CardContent, Grow, Divider } from '@material-ui/core';

const PeopleSingleCard = ({ planet }) => {
    const { name, orbital_period, population, rotation_period, surface_water, terrain, climate, diameter, gravity, } = planet
    return (
        <Grow in>
            <Card style={{ margin: 10 }} >
                <CardContent>
                    <Typography variant="headline" component="h2">{name}</Typography>
                    <Typography color="textSecondary">{terrain}</Typography>
                </CardContent>
                <Divider />
                <CardContent>
                    <Typography component="dl">
                        <dt>Population: </dt>
                        <dd>{population}</dd>

                        <dt>Climate: </dt>
                        <dd>{climate}</dd>

                        <dt>Orbital Period: </dt>
                        <dd>{orbital_period} days</dd>

                        <dt>Rotation Period: </dt>
                        <dd>{rotation_period} hours</dd>

                        <dt>Surface Water: </dt>
                        <dd>{surface_water}%</dd>

                        <dt>Diameter: </dt>
                        <dd>{diameter}Km</dd>

                        <dt>Gravity: </dt>
                        <dd>{gravity}</dd>
                    </Typography>
                </CardContent>
            </Card>
        </Grow>

    );
};

export default PeopleSingleCard;
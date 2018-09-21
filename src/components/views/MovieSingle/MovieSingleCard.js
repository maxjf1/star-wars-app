import React from 'react';
import { Typography, Card, CardContent, Grow, Divider } from '@material-ui/core';

const MovieSingleCard = ({ movie }) => {
    const { episode_id, title, opening_crawl, director, producer, release_date } = movie
    const [y, m, d] = release_date.split('-')
    return (
        <Grow in>
            <Card style={{ margin: 10 }} >
                <CardContent>
                    <Typography color="textSecondary">Episode {episode_id}</Typography>
                    <Typography variant="headline" component="h2" gutterBottom>{title}</Typography>
                    <Typography color="textSecondary">{`Released in ${y}/${m}/${d}`}</Typography>
                    <Typography color="textSecondary">{`Directed by ${director}`}</Typography>
                    <Typography color="textSecondary">{`Produced by ${producer}`}</Typography>
                </CardContent>
                <Divider />
                <CardContent>
                    {opening_crawl.split("\r\n\r\n").map((p, i) =>
                        <Typography key={`${episode_id}-p${i}`} component="p" gutterBottom>{p}</Typography>
                    )}
                </CardContent>
            </Card>
        </Grow>
    );
};

export default MovieSingleCard;
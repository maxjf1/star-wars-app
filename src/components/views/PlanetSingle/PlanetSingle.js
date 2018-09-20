import React, { Component, Fragment } from 'react';
import Header from '../../Header';
import { apiUrl } from '../../../settings';
import { Typography } from '@material-ui/core';
import Loader from '../../Loader';
import MoviesCard from '../PeopleSingle/MoviesCard';
import ResidentPeopleCard from './ResidentPeopleCard';


class PlanetSingle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planet: null,
            movies: null,
            people: null,
            loading: true,
        }
    }

    getContent() {
        this.setState({ loading: true })
        this
            .getPlanet()
            .then(this.getMovies)
            .then(this.getPeople)
            .then(() => console.log(this.state))
            .then(() => this.setState({ loading: false }))
            .catch(error => console.error(error) || this.setState({ loading: false }))
    }

    getPlanet = () =>
        fetch(`${apiUrl}/planets/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(planet => this.setState({ planet }))

    getMovies = () =>
        Promise.all(
            this.state.planet.films.map(
                url => fetch(url).then(response => response.json())
            ))
            .then(movies => movies.sort(({ episode_id: a }, { episode_id: b }) => a - b))
            .then(movies => this.setState({ movies }))

    getPeople = () =>
        Promise.all(
            this.state.planet.residents.map(
                url => fetch(url).then(response => response.json())
            ))
            .then(people => this.setState({ people }))

    componentDidMount() {
        this.getContent()
    }

    render() {
        const { loading, planet, people, movies } = this.state
        return (
            <Fragment>
                <Header title="People" backButton />
                <main style={{ maxWidth: 900, margin: '0 auto' }}>

                    {movies && Boolean(movies.length) && <MoviesCard movies={movies} />}
                    {people && Boolean(people.length) && <ResidentPeopleCard people={people} />}

                    {loading && <Loader />}
                </main>
                {!people && !loading &&
                    <Fragment>
                        <Typography variant="display1" align="center">It's a trap!</Typography>
                        <Typography variant="subheading" align="center">No planet found with this ID.</Typography>
                    </Fragment>
                }
            </Fragment>
        );
    }
}

export default PlanetSingle;
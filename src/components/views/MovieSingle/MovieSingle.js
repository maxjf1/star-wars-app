import React, { Component, Fragment } from 'react';
import Header from '../../Header';
import { apiUrl } from '../../../settings';
import Loader from '../../Loader';
import NotFound from '../../NotFound';
import MovieSingleCard from './MovieSingleCard';
import PeopleCard from '../../PeopleCard';
import PlanetsCard from '../../PlanetsCard';
import StarshipsCard from '../../StarshipsCard';
import VehiclesCard from '../../VehiclesCard';
import SpeciesCard from '../../SpeciesCard';

class MovieSingle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: null,
            planets: null,
            species: null,
            starships: null,
            vehicles: null,
            people: null,
            loading: true,
        }
    }

    getContent() {
        this.setState({ loading: true })
        this
            .getMovie()
            .then(this.getPlanets)
            .then(this.getSpecies)
            .then(this.getStarships)
            .then(this.getVehicles)
            .then(this.getPeople)
            .then(() => this.setState({ loading: false }))
            .catch(error => console.error(error) || this.setState({ loading: false }))
    }

    getMovie = () =>
        fetch(`${apiUrl}/films/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(movie => this.setState({ movie }))

    getPeople = () =>
        Promise.all(
            this.state.movie.characters.map(
                url => fetch(url).then(response => response.json())
            ))
            .then(people => this.setState({ people }))

    getPlanets = () =>
        Promise.all(
            this.state.movie.planets.map(
                url => fetch(url).then(response => response.json())
            ))
            .then(planets => this.setState({ planets }))

    getStarships = () =>
        Promise.all(
            this.state.movie.starships.map(
                url => fetch(url).then(response => response.json())
            ))
            .then(starships => this.setState({ starships }))

    getVehicles = () =>
        Promise.all(
            this.state.movie.vehicles.map(
                url => fetch(url).then(response => response.json())
            ))
            .then(vehicles => this.setState({ vehicles }))

    getSpecies = () =>
        Promise.all(
            this.state.movie.species.map(
                url => fetch(url).then(response => response.json())
            ))
            .then(species => this.setState({ species }))

    componentDidMount() {
        this.getContent()
    }

    render() {
        const { loading, movie, people, planets, starships, vehicles, species } = this.state
        return (
            <Fragment>
                <Header title="Movies" backButton />
                <main style={{ maxWidth: 900, margin: '0 auto' }}>

                    {movie && <MovieSingleCard movie={movie} />}

                    {planets && Boolean(planets.length) && <PlanetsCard planets={planets} />}

                    {species && Boolean(species.length) && <SpeciesCard species={species} />}

                    {starships && Boolean(starships.length) && <StarshipsCard starships={starships} />}

                    {vehicles && Boolean(vehicles.length) && <VehiclesCard vehicles={vehicles} />}

                    {people && Boolean(people.length) && <PeopleCard
                        people={people}
                        title="Characters"
                        description="People that are on this film."
                    />}

                    {loading && <Loader />}
                </main>
                {!movie && !loading &&
                    <NotFound title="No Movie found with this ID." />
                }
            </Fragment>
        );
    }
}

export default MovieSingle;
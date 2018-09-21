import React, { Component, Fragment } from 'react';
import Header from '../../Header';
import { apiUrl } from '../../../settings';
import Loader from '../../Loader';
import MoviesCard from '../../MoviesCard';
import PeopleSingleCard from './PeopleSingleCard';
import SpeciesCard from '../../SpeciesCard';
import VehiclesCard from '../../VehiclesCard';
import PlanetsCard from '../../PlanetsCard';
import NotFound from '../../NotFound';
import StarshipsCard from '../../StarshipsCard';

class PeopleSingle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: null,
            movies: null,
            starships: null,
            species: null,
            vehicles: null,
            homeworld: null,
            loading: true,
        }
    }

    getContent() {
        this.setState({ loading: true })
        this
            .getPeople()
            .then(this.getHomeworld)
            .then(this.getMovies)
            .then(this.getSpecies)
            .then(this.getStarships)
            .then(this.getVehicles)
            .then(() => this.setState({ loading: false }))
            .catch(error => console.error(error) || this.setState({ loading: false }))
    }

    getPeople = () =>
        fetch(`${apiUrl}/people/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(people => this.setState({ people }))

    getMovies = () =>
        Promise.all(
            this.state.people.films.map(
                url => fetch(url).then(response => response.json())
            ))
            .then(movies => movies.sort(({ episode_id: a }, { episode_id: b }) => a - b))
            .then(movies => this.setState({ movies }))


    getStarships = () =>
        Promise.all(
            this.state.people.starships.map(
                url => fetch(url).then(response => response.json())
            ))
            .then(starships => this.setState({ starships }))


    getSpecies = () =>
        Promise.all(
            this.state.people.species.map(
                url => fetch(url).then(response => response.json())
            ))
            .then(species => this.setState({ species }))


    getVehicles = () =>
        Promise.all(
            this.state.people.vehicles.map(
                url => fetch(url).then(response => response.json())
            ))
            .then(vehicles => this.setState({ vehicles }))

    getHomeworld = () =>
        fetch(this.state.people.homeworld)
            .then(response => response.json())
            .then(homeworld => this.setState({ homeworld }))


    componentDidMount() {
        this.getContent()
    }

    render() {
        const { loading, people, movies, starships, species, vehicles, homeworld } = this.state
        return (
            <Fragment>
                <Header title="People" backButton />
                <main style={{ maxWidth: 900, margin: '0 auto' }}>
                    {people && <PeopleSingleCard people={people} />}

                    {homeworld && <PlanetsCard planet={homeworld}
                        title="Homeworld"
                        description="Planet that this person was born on or inhabits." />}

                    {movies && Boolean(movies.length) && <MoviesCard movies={movies} />}

                    {species && Boolean(species.length) && <SpeciesCard species={species} description="Species that this person belongs to" />}

                    {starships && Boolean(starships.length) && <StarshipsCard starships={starships} description="Piloted starships" />}

                    {vehicles && Boolean(vehicles.length) && <VehiclesCard vehicles={vehicles} description="Vehicles that this person has piloted" />}

                    {loading && <Loader />}
                </main>
                {!people && !loading &&
                    <NotFound title="No people found with this ID." />
                }
            </Fragment>
        );
    }
}

export default PeopleSingle;
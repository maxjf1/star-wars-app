import React, { Component, Fragment } from 'react';
import { apiUrl } from '../../settings';
import PeopleHeader from '../PeopleHeader';
import PeopleFilter from '../PeopleFilter';
import PeopleList from '../PeopleList';
import { Typography } from '@material-ui/core';
import NotFound from '../NotFound';

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            loading: true,
            search: '',
            page: 1,
            results: 0,
            hasNextPage: false,
            filter: {},
            filterOpen: false,
        }
    }

    getContent = () => {
        this.setState({ loading: true })
        const { search, page } = this.state
        const url = new URL(`${apiUrl}/people`)
        const params = {
            search, page
        }
        for (let key in params)
            if (params[key])
                url.searchParams.append(key, params[key])

        fetch(url)
            .then(response => response.json())
            .then(({ count, next, results }) =>
                this.setState({
                    loading: false,
                    results: count,
                    hasNextPage: Boolean(next),
                    items: this.state.page > 1 ? [...this.state.items, ...results] : results
                })
            )
    }

    handleSearch = search => {
        if (search === this.state.search) return
        this.setState({ search, items: [], page: 1 }, this.getContent)
    }
    handleNextPage = () => {
        if (!this.state.hasNextPage) return
        this.setState({ page: this.state.page + 1 }, this.getContent)
    }

    componentDidMount() {
        this.getContent()
    }

    getInitials(name) {
        name = name.toUpperCase().replace('-', '').split(' ')
        if (name.length >= 2)
            return name[0][0] + name[1][0]
        return name[0][0] + name[0][1]
    }

    getId(url) {
        url = url.split('/')
        return Number(url[url.length - 2])
    }

    handleFilterChange = (field, value) => this.setState({ filter: { ...this.state.filter, [field]: value } })

    toggleFilter = () => this.setState({ filterOpen: !this.state.filterOpen })

    getFilteredList() {
        const { filter, items } = this.state
        return items.filter(
            item => !Object.keys(filter).find(
                filterKey => filter[filterKey] && item[filterKey] !== filter[filterKey]
            )
        )
    }

    render() {
        const { hasNextPage, loading, filter, filterOpen } = this.state
        const items = this.getFilteredList()
        return (
            <Fragment>
                <PeopleHeader onSearch={this.handleSearch} onFilterOpen={this.toggleFilter} onNextPage={this.handleNextPage} />
                <main>
                    {!items.length && !loading &&
                        <NotFound title="No match found. Try to change the filter and the search terms.">
                            {hasNextPage && !loading &&
                                <Typography variant="subheading" align="center">You can also...</Typography>
                            }
                        </NotFound>
                    }
                    <PeopleList
                        loading={loading}
                        items={items}
                        nextPageButton={hasNextPage && !loading}
                        onNextPage={this.handleNextPage}
                    />
                </main>
                <aside>
                    <PeopleFilter
                        filters={filter}
                        open={filterOpen}
                        onChange={this.handleFilterChange}
                        onClose={this.toggleFilter} />
                </aside>
            </Fragment>
        );
    }
}

export default People;
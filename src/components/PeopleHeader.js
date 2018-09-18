import React, { Component, Fragment } from 'react';
import Header from './Header';
import { IconButton, Typography } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase'
import { Search as SearchIcon, FilterList as FilterIcon, Cancel as CacelIcon } from '@material-ui/icons'

class PeopleHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchOpen: false,
            search: '',
        }
    }
    handleSearch = e => {
        e && e.preventDefault()
        this.props.onSearch && this.props.onSearch(this.state.search)
        this.toggleSearch(false)
    }

    clearSearch = () => {
        this.setState({ search: '' }, this.handleSearch)
    }

    toggleSearch = () => this.setState({ searchOpen: !this.state.searchOpen })

    render() {
        return (
            <Header title={this.state.search || 'People'} color={this.state.searchOpen ? 'default' : 'primary'} style={{ transition: 'all 200ms ease-out' }}
                centerAction={
                    this.state.searchOpen &&
                    <form onSubmit={this.handleSearch}>
                        <Typography variant="title" color="inherit">
                            <InputBase name="search" value={this.state.search} onChange={e => this.setState({ search: e.target.value })} placeholder="Search..." autoFocus style={{ fontSize: 'inherit' }} />
                        </Typography>
                    </form>
                }
                rightAction={
                    this.state.searchOpen ?
                        <Fragment>
                            <IconButton color="inherit" aria-label="Clear Search" onClick={this.clearSearch} >
                                <CacelIcon />
                            </IconButton>
                            <IconButton color="inherit" aria-label="Search" onClick={this.handleSearch}>
                                <SearchIcon />
                            </IconButton>
                        </Fragment> :
                        <Fragment>
                            <IconButton color="inherit" aria-label="Filter" onClick={this.props.onFilterOpen}>
                                <FilterIcon />
                            </IconButton>
                            <IconButton color="inherit" aria-label="Search" onClick={this.toggleSearch} >
                                <SearchIcon />
                            </IconButton>
                        </Fragment>
                }
            />
        );
    }
}

export default PeopleHeader;
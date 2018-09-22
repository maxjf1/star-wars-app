import React from 'react';
import { Drawer, TextField, MenuItem, List, ListItem, InputAdornment, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons'
import Header from './Header'

const defaultFilters = {
    gender: ['male', 'female', 'n/a'],
    eye_color: ['n/a', 'yellow', 'blue', 'red', 'brown']

}

const PeopleFilter = ({ filters = {}, open, onClose, onChange }) => {
    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <div style={{ width: 380, maxWidth: '100vw' }} >
                <Header title="Filter" rightAction={
                    <IconButton onClick={onClose}>
                        <Close />
                    </IconButton>
                } />
                <List disablePadding>
                    {Object.keys(defaultFilters).map(filter =>
                        <ListItem key={filter}>
                            <TextField
                                select
                                fullWidth
                                label={filter.replace('_', ' ')}
                                value={filters[filter] || ''}
                                onChange={e => onChange(filter, e.target.value)}
                                InputProps={{ startAdornment: !filters[filter] && <InputAdornment position="start">All</InputAdornment> }}
                            >
                                <MenuItem value="">All</MenuItem>
                                {defaultFilters[filter].map(value => <MenuItem key={value} value={value}>{value}</MenuItem>)}
                            </TextField>
                        </ListItem>
                    )}

                </List>
            </div>
        </Drawer>
    );
};

export default PeopleFilter;
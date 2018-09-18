import React from 'react';
import { Typography, Drawer, TextField, MenuItem, List, ListItem, Toolbar, InputAdornment } from '@material-ui/core';

const defaultFilters = {
    gender: ['male', 'female', 'n/a']
}

const PeopleFilter = ({ filters = {}, open, onClose, onChange }) => {
    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <div style={{ width: 320, maxWidth: '100vw' }} >
                <Toolbar>
                    <Typography variant="title" color="inherit">Filter</Typography>
                </Toolbar>
                <List disablePadding>
                    {Object.keys(defaultFilters).map(filter =>
                        <ListItem key={filter}>
                            <TextField
                                select
                                fullWidth
                                label={filter}
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
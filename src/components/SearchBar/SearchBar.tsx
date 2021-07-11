import React from 'react';
import TextField from '@material-ui/core/TextField';

export const SearchBar= () => {
        return (
                <TextField
                    fullWidth
                    id="standard-basic"
                    label="Search..."
                    placeholder='Search...'
                />
        );
    };
import React from 'react';
import TextField from '@material-ui/core/TextField';



export const SearchBar= () => {

  const filterCards = () => {
    console.log('pepe')
}

        return (
                <TextField
                    fullWidth
                    id="standard-basic"
                    label="Search..."
                    placeholder='Search...'
                    onChange={filterCards}
                />
        );
    };
import React from 'react';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import { useStyles } from './search.styles';

const SearchBar = () => {
  const { search, searchIcon, inputRoot, inputInput } = useStyles();

  return (
    <div className={search}>
      <div className={searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder='Search…'
        classes={{
          root: inputRoot,
          input: inputInput
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
};

export default SearchBar;

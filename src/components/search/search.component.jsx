import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import { useStyles } from './search.styles';

const SearchBar = props => {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.history.push(`/search/${input}`);
    setInput('');
  };

  const { search, searchIcon, inputRoot, inputInput } = useStyles();

  return (
    <form className={search} onSubmit={handleSubmit}>
      <div className={searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        value={input}
        onChange={handleChange}
        placeholder='Search…'
        classes={{
          root: inputRoot,
          input: inputInput
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </form>
  );
};

export default withRouter(SearchBar);

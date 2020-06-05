import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { useStyles } from './search.styles';
import { ResultsContext } from '../../contexts/results/results.context';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const [data, setData] = useState();
  const { setContext } = useContext(ResultsContext);

  let history = useHistory();

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=bada949f4005b48da2fb91c2ba013808&query=${input}&page=1`
      );
      setData(response.data.results);
    } catch (err) {
      console.log('Something went wrong.');
    }
  }, [input]);

  useEffect(() => {
    fetchData();
  }, [input]);

  useEffect(() => {
    setContext({ current: data, title: input });
  }, [data]);

  const handleChange = e => {
    if (input === '') {
      history.push('/search');
    }
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    history.push(`/search/${input}`);
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

export default SearchBar;

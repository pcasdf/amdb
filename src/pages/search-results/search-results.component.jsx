import React, { useState, useEffect, useCallback, useContext } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';

import { Grid, Typography } from '@material-ui/core';

import { ThemeContext } from '../../contexts/theme/theme.context';
import { ResultsContext } from '../../contexts/results/results.context';
import Card from '../../components/card/card.component';

const SearchResults = ({ match }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { setContext } = useContext(ResultsContext);
  const { theme } = useContext(ThemeContext);
  const title = match.params.title;

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=bada949f4005b48da2fb91c2ba013808&query=${title}&page=1`
      );
      setData(response.data.results);
    } catch (err) {
      console.log('Something went wrong.');
    }
    setIsLoading(false);
  }, [title]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    setContext({ current: data });
  }, [data, setContext]);

  return (
    <div className='search-results' style={{ textAlign: 'center' }}>
      {isLoading && (
        <Loader
          type='ThreeDots'
          color='#00BFFF'
          height={100}
          width={100}
          timeout={3000}
        />
      )}
      <Grid container spacing={3}>
        <Grid item md={12}>
          <Typography variant='h5'>Search results for "{title}" </Typography>
        </Grid>
        {data &&
          data.map(item => <Card key={item.id} theme={theme} {...item} />)}
      </Grid>
    </div>
  );
};

export default SearchResults;

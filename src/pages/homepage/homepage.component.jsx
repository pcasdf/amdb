import React, { useState, useEffect, useCallback, useContext } from 'react';
import axios from 'axios';

import { Grid, Typography } from '@material-ui/core';

import { useStyles } from './homepage.styles';
import { ResultsContext } from '../../contexts/results/results.context';
import Carousel from '../../components/carousel/carousel.component';

const HomePage = () => {
  const [movies, setMovies] = useState();
  const [tvSeries, setTvSeries] = useState();
  const { context, setContext } = useContext(ResultsContext);

  const fetchData = useCallback(async () => {
    try {
      const moviesResponse = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=bada949f4005b48da2fb91c2ba013808&page=1`
      );
      const tvSeriesResponse = await axios.get(
        `https://api.themoviedb.org/3/trending/tv/week?api_key=bada949f4005b48da2fb91c2ba013808&page=1`
      );
      setMovies(moviesResponse.data.results);
      setTvSeries(tvSeriesResponse.data.results);
    } catch (err) {
      console.log('Something went wrong.');
    }
  }, []);

  useEffect(() => {
    fetchData();
    setContext({
      current: null,
      movies: movies,
      tv: tvSeries
    });
  }, []);

  const { title, subject, titleContainer, sliderContainer } = useStyles();

  return (
    <div className='homepage'>
      <Grid container className={subject}>
        <Grid item xs={12} className={titleContainer}>
          <Typography variant='h5' className={title}>
            Trending Movies
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          className={sliderContainer}
          onClick={() => setContext({ ...context, current: movies })}
        >
          <Carousel list={movies} details />
        </Grid>
      </Grid>
      <Grid container className={subject}>
        <Grid item xs={12} className={titleContainer}>
          <Typography variant='h5' className={title}>
            Trending TV Series
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          className={sliderContainer}
          onClick={() => setContext({ ...context, current: tvSeries })}
        >
          <Carousel list={tvSeries} details />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;

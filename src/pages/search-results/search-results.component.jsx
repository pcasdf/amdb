import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import Loader from 'react-loader-spinner';

import { Grid, Hidden } from '@material-ui/core';

import { useStyles } from './search-results.styles';
import { ThemeContext } from '../../contexts/theme/theme.context';
import { ResultsContext } from '../../contexts/results/results.context';
import Card from '../../components/card/card.component';
import Sidebar from '../../components/sidebar/sidebar.component';

const SearchResults = ({ match }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {
    context: { current, title: input },
    setContext
  } = useContext(ResultsContext);
  const { theme } = useContext(ThemeContext);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState(match.params.title);
  const { push } = useHistory();

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=bada949f4005b48da2fb91c2ba013808&query=${input}&page=1`
      );
      setData(response.data.results);
    } catch (err) {
      console.log('Something went wrong.');
    }
    setIsLoading(false);
  }, [location]);

  useEffect(() => {
    fetchData();
  }, [location]);

  useEffect(() => {
    setContext({ current: data });
  }, [data]);

  useEffect(() => {
    setTitle(input);
  }, [input]);

  const { body, head, content } = useStyles();

  return (
    <div className={body}>
      {isLoading && (
        <Loader
          type='ThreeDots'
          color='#00BFFF'
          height={100}
          width={100}
          timeout={3000}
        />
      )}
      <Grid container>
        <Hidden smDown>
          <Grid item md={2}>
            <Sidebar />
          </Grid>
        </Hidden>
        <Grid container item xs={10} md={9} spacing={3} className={content}>
          <Grid item xs={12}>
            <span className={head}>Search results for "{title}"</span>
          </Grid>
          {current &&
            current.map(item => <Card key={item.id} theme={theme} {...item} />)}
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchResults;

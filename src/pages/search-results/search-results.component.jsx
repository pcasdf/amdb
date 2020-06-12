import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

import { Grid, Hidden } from '@material-ui/core';

import { useStyles } from './search-results.styles';
import { ThemeContext } from '../../contexts/theme/theme.context';
import { ResultsContext } from '../../contexts/results/results.context';
import Card from '../../components/card/card.component';
import Sidebar from '../../components/sidebar/sidebar.component';

const SearchResults = ({ match }) => {
  const KEY = `${process.env.REACT_APP_KEY}`;

  const [data, setData] = useState([]);
  const {
    context: { current, input },
    setContext
  } = useContext(ResultsContext);
  const { theme } = useContext(ThemeContext);
  const { title } = useParams();
  const { push } = useHistory();

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=${KEY}&query=${input}&page=1`
      );
      setData(response.data.results);
    } catch (err) {
      console.log('Something went wrong.');
    }
  }, [input]);

  useEffect(() => {
    if (input === '' || !input) {
      push('/');
    } else {
      fetchData();
    }
    // eslint-disable-next-line
  }, [input]);

  useEffect(() => {
    setContext({ current: data, input: input });
    // eslint-disable-next-line
  }, [data, input]);

  const { body, head, content } = useStyles();

  return (
    <div className={body}>
      <Grid container>
        <Hidden smDown>
          <Grid item md={2}>
            <Sidebar />
          </Grid>
        </Hidden>
        <Grid container item xs={10} md={9} spacing={3} className={content}>
          <Grid item xs={12}>
            <span className={head}>Search results for "{input || title}"</span>
          </Grid>
          {current &&
            current.map(
              item =>
                item.poster_path && (
                  <Card key={item.id} theme={theme} {...item} />
                )
            )}
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchResults;

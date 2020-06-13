import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { Grid, Hidden } from '@material-ui/core';

import { fetchSearch } from '../../utils/fetchData';
import { useStyles } from './search-results.styles';
import { ThemeContext } from '../../contexts/theme/theme.context';
import { ResultsContext } from '../../contexts/results/results.context';
import Card from '../../components/card/card.component';
import Sidebar from '../../components/sidebar/sidebar.component';

const SearchResults = () => {
  const [data, setData] = useState([]);
  const {
    context: { current, input },
    setContext
  } = useContext(ResultsContext);
  const { theme } = useContext(ThemeContext);
  const { title } = useParams();
  const { push } = useHistory();

  const fetchData = async () => {
    const response = await fetchSearch(input);
    setData(response.data.results);
  };

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

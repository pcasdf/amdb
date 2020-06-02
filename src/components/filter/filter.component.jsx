import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './filter.styles';
import Dropdown from '../dropdown/dropdown.component';

const Filter = () => {
  const [message, setMessage] = useState(['Movies and TV Series', 'Weekly']);
  const { category = 'all', time = 'week' } = useParams();
  const history = useHistory();
  const { dropdown } = useStyles();

  const updateParams = () => {
    if (category === 'all') {
      setMessage(prev => ['Movies and TV Series', prev[1]]);
    } else if (category === 'movie') {
      setMessage(prev => ['Movies', prev[1]]);
    } else {
      setMessage(prev => ['TV Series', prev[1]]);
    }

    if (time === 'week') {
      setMessage(prev => [prev[0], 'Weekly']);
    } else {
      setMessage(prev => [prev[0], 'Daily']);
    }
  };

  const handleCategoryChange = value => {
    let target;
    if (value === 'All') {
      target = 'all';
    } else if (value === 'Movies') {
      target = 'movie';
    } else {
      target = 'tv';
    }
    history.push(`/trending/${target}/${time}`);
  };

  const handleTimeChange = value => {
    let target;
    if (value === 'Weekly') {
      target = 'week';
    } else {
      target = 'day';
    }
    history.push(`/trending/${category}/${target}`);
  };

  useEffect(() => {
    updateParams();
  }, [category, time]);

  return (
    <Grid
      item
      md={12}
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <Typography variant='h6' style={{ margin: 'auto 5px', fontWeight: 400 }}>
        Trending {message[0]}, {message[1]}
      </Typography>
      <div className='options'>
        <Dropdown
          options={['All', 'Movies', 'TV Series']}
          defaultValue='All'
          onChange={handleCategoryChange}
          className={dropdown}
        />
        <Dropdown
          options={['Weekly', 'Daily']}
          defaultValue='Weekly'
          onChange={handleTimeChange}
          className={dropdown}
        />
      </div>
    </Grid>
  );
};

export default Filter;

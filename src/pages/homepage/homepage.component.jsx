import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ImageCard from '../../components/image-card/image-card.component';
import Dropdown from '../../components/dropdown/dropdown.component';

const HomePage = ({ setContext }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('All');
  const [timeframe, setTimeframe] = useState('Weekly');

  const fetchData = useCallback(async () => {
    let option, time;
    switch (filter) {
      case 'All':
        option = 'all';
        break;
      case 'Movies':
        option = 'movie';
        break;
      case 'TV Series':
        option = 'tv';
        break;
      default:
        console.log('Something went wrong.');
    }
    switch (timeframe) {
      case 'Weekly':
        time = 'week';
        break;
      case 'Daily':
        time = 'day';
        break;
      default:
        console.log('Something went wrong.');
    }
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/${option}/${time}?api_key=bada949f4005b48da2fb91c2ba013808`
    );
    setData(response.data.results);
    console.log(response.data.results);
  }, [filter, timeframe]);

  useEffect(() => {
    fetchData();
  }, [filter, timeframe, fetchData]);

  useEffect(() => {
    setContext(data);
  }, [data, setContext]);

  const handleFilterChange = value => {
    setFilter(value);
  };

  const handleTimeChange = value => {
    setTimeframe(value);
  };

  return (
    <div className='homepage'>
      <Grid container spacing={3}>
        <Grid
          item
          md={12}
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Typography
            variant='h6'
            style={{ margin: 'auto 5px', fontWeight: 400 }}
          >
            Trending {filter === 'All' ? 'Movies and TV Series' : filter},{' '}
            {timeframe}
          </Typography>
          <div className='options'>
            <Dropdown
              options={['All', 'Movies', 'TV Series']}
              defaultValue='All'
              onChange={handleFilterChange}
            />
            <Dropdown
              options={['Weekly', 'Daily']}
              defaultValue='Weekly'
              onChange={handleTimeChange}
            />
          </div>
        </Grid>
        {data.map(({ id, poster_path, title, original_name }) => (
          <Grid item md={3} sm={4} key={id}>
            <Link to={`/${id}`}>
              <ImageCard img={poster_path} />
              <Typography style={{ fontSize: '1.2rem', textAlign: 'center' }}>
                {title || original_name}
              </Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;

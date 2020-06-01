import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';

import TrendingCard from '../../components/trending/trending.component';
import Typography from '@material-ui/core/Typography';

const HomePage = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/all/week?api_key=bada949f4005b48da2fb91c2ba013808'
    );
    setData(response.data.results);
    console.log(response.data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='homepage'>
      <Grid container spacing={3}>
        <Grid item md={12}>
          <Typography variant='h5'>Trending</Typography>
        </Grid>
        {data.map(item => (
          <Grid item md={3} sm={4} key={item.id}>
            <Link to={`/${item.id}`}>
              <TrendingCard {...item} />
              <Typography style={{ fontSize: '1.2rem', textAlign: 'center' }}>
                {item.title || item.original_name}
              </Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;

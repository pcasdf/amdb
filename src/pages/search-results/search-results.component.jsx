import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ImageCard from '../../components/image-card/image-card.component';

const SearchResults = ({ match, setContext }) => {
  const [data, setData] = useState([]);
  const title = match.params.title;

  const fetchData = useCallback(async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=bada949f4005b48da2fb91c2ba013808&query=${title}&page=1`
    );
    setData(response.data.results);
  }, [title]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    setContext(data);
    console.log(data);
  }, [data, setContext]);

  return (
    <div className='search-results'>
      <Grid container spacing={3}>
        <Grid item md={12}>
          <Typography variant='h5'>Search results for "{title}" </Typography>
        </Grid>
        {data &&
          data.map(
            ({ title, id, original_title, poster_path, original_name }) => (
              <Grid item md={3} sm={4} key={id}>
                <Link to={`../${id}`}>
                  <ImageCard img={poster_path} />
                  <Typography
                    style={{ fontSize: '1.2rem', textAlign: 'center' }}
                  >
                    {title || original_title || original_name}
                  </Typography>
                </Link>
              </Grid>
            )
          )}
      </Grid>
    </div>
  );
};

export default SearchResults;

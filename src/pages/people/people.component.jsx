import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Grid, Button } from '@material-ui/core';

import { useStyles } from './people.styles';
import Profile from '../../components/profile/profile.component';
import Personal from '../../components/personal/personal.component';
import Photos from '../../components/photos/photos.component';

const People = () => {
  const KEY = `bada949f4005b48da2fb91c2ba013808`;

  const [data, setData] = useState();
  const [otherData, setOtherData] = useState();
  const [images, setImages] = useState();
  const [index, setIndex] = useState(9);
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const details = await axios.get(
        `https://api.themoviedb.org/3/person/${id}?api_key=${KEY}&language=en-US`
      );
      const otherDetails = await axios.get(
        `https://api.themoviedb.org/3/search/person?api_key=${KEY}&language=en-US&query=${details.data.name}&page=1&include_adult=false`
      );
      const imageData = await axios.get(
        `https://api.themoviedb.org/3/person/${id}/images?api_key=${KEY}`
      );
      setData(details.data);
      setOtherData(otherDetails.data.results[0]);
      setImages(imageData.data.profiles);
    } catch (err) {
      console.log('Something went wrong.');
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [id]);

  const { body, button } = useStyles();

  return (
    <div className={body}>
      {data && images && otherData && (
        <Grid container>
          <Profile {...{ images, data }} />
          <Grid container item xs={8}>
            <Personal {...{ data, otherData }} />
            <Photos {...{ images, index }} />
            {index < images.length && (
              <Button
                onClick={() => setIndex(prev => prev + 8)}
                className={button}
                variant='outlined'
                size='large'
                color='primary'
              >
                Show More
              </Button>
            )}
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default People;

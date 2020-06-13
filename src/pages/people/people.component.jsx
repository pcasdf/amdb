import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Grid, Button } from '@material-ui/core';

import { fetchPeople } from '../../utils/fetchData';
import { useStyles } from './people.styles';
import Profile from '../../components/profile/profile.component';
import Personal from '../../components/personal/personal.component';
import Photos from '../../components/photos/photos.component';

const People = () => {
  const [data, setData] = useState();
  const [otherData, setOtherData] = useState();
  const [images, setImages] = useState();
  const [index, setIndex] = useState(9);
  const { id } = useParams();

  const fetchData = async () => {
    const { details, otherDetails, imageData } = await fetchPeople(id);
    setData(details.data);
    setOtherData(otherDetails.data.results[0]);
    setImages(imageData.data.profiles);
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

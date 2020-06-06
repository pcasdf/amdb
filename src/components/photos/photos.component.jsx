import React from 'react';

import { Grid, Grow } from '@material-ui/core';

import { useStyles } from './photos.styles';
import ImageCard from '../image-card/image-card.component';

const Photos = ({ images, index }) => {
  const { label, profiles } = useStyles();
  return (
    <>
      <Grid item xs={12} style={{ marginBottom: '20px' }}>
        <span className={label}>Photos</span>
      </Grid>
      <Grid container item xs={12} spacing={3}>
        {images &&
          images.map(
            ({ file_path }, idx) =>
              idx > 0 &&
              idx < index && (
                <Grow
                  in={index}
                  style={{ transformOrigin: '0 0 0' }}
                  {...(index ? { timeout: 150 * (idx % 9) } : {})}
                >
                  <Grid item xs={3} key={idx} className={profiles}>
                    <ImageCard cursor='default' img={file_path} />
                  </Grid>
                </Grow>
              )
          )}
      </Grid>
    </>
  );
};

export default Photos;

import React from 'react';

import { Grid } from '@material-ui/core';

import { useStyles } from './image-list.styles';

const ImageList = ({ images }) => {
  const { image, imageGrid } = useStyles();
  return (
    <Grid container spacing={4} className={imageGrid}>
      {images &&
        images.map(({ file_path }, idx) => (
          <Grid key={idx} item md={4}>
            <img
              alt='backdrop'
              className={image}
              src={`https://image.tmdb.org/t/p/w500${file_path}`}
            />
          </Grid>
        ))}
    </Grid>
  );
};

export default ImageList;

import React, { useState } from 'react';

import { Grid, Button, Grow } from '@material-ui/core';

import { useStyles } from './image-list.styles';

const ImageList = ({ images }) => {
  const { image, imageGrid, button } = useStyles();
  const [index, setIndex] = useState(6);
  return (
    <Grid container spacing={4} className={imageGrid}>
      {images &&
        images.map(
          ({ file_path }, idx) =>
            idx < index && (
              <Grow
                in={index}
                style={{ transformOrigin: '0 0 0' }}
                {...(index ? { timeout: 150 * (idx % 6) } : {})}
              >
                <Grid key={idx} item xs={4}>
                  <img
                    alt='backdrop'
                    className={image}
                    src={`https://image.tmdb.org/t/p/w500${file_path}`}
                  />
                </Grid>
              </Grow>
            )
        )}
      {index < images.length && (
        <Button
          onClick={() => setIndex(prev => prev + 6)}
          className={button}
          variant='outlined'
          size='large'
          color='primary'
        >
          Show More
        </Button>
      )}
    </Grid>
  );
};

export default ImageList;

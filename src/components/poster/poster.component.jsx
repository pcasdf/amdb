import React from 'react';

import { Card, CardActionArea, CardMedia } from '@material-ui/core';

import { useStyles } from './poster.styles';

const Poster = ({ img }) => {
  const { root, media } = useStyles();
  return (
    <Card elevation={6} className={root}>
      <CardActionArea>
        <CardMedia
          className={media}
          component='img'
          image={`https://image.tmdb.org/t/p/w500${img}`}
        />
      </CardActionArea>
    </Card>
  );
};

export default Poster;

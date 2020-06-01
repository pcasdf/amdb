import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import { useStyles } from './trending.styles';

const TrendingCard = props => {
  const { root, media } = useStyles();

  return (
    <Card elevation={6} className={root}>
      <CardActionArea>
        <CardMedia
          className={media}
          component='img'
          image={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
        />
      </CardActionArea>
    </Card>
  );
};

export default TrendingCard;

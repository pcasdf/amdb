import React from 'react';

import { Grid, Typography } from '@material-ui/core';

import { useStyles } from './detail-content.styles';
import Poster from '../../components/poster/poster.component';
import Text from '../text/text.component';
import Ratings from '../ratings/ratings.component';

const DetailContent = ({ data, detail, images }) => {
  let bg = '';
  if (images && images[0]) {
    bg = `https://image.tmdb.org/t/p/w500${images[0].file_path}`;
  }

  console.log(data);
  console.log(detail);

  const {
    content,
    title,
    description,
    details,
    grid,
    poster,
    bgImage,
    rating
  } = useStyles();
  return (
    <div className={content}>
      <img src={bg} className={bgImage} />
      {data && detail && (
        <Grid container spacing={3} className={grid}>
          <Grid item md={4} xs={12} className={poster}>
            <Poster img={data.poster_path} />
          </Grid>
          <Grid item md={7} xs={12} className={description}>
            <Typography variant='h4' className={title}>
              {detail.Title} ({detail.Year})
            </Typography>
            <Typography className={details}>
              <span className={rating}>{detail.Rated}</span> {detail.Genre}
            </Typography>
            <Typography className={details}>
              {detail.Runtime} | Released {detail.Released}
            </Typography>
            <Ratings Ratings={detail.Ratings} />
            <Text title='Summary' content={detail.Plot} lg />
            <Text title='Actors' content={detail.Actors} />
            <Text title='Director' content={detail.Director} />
            <Text title='Writers' content={detail.Writer} />
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default DetailContent;

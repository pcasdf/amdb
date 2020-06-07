import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

import { useStyles } from './detail-content.styles';
import Poster from '../../components/poster/poster.component';
import Text from '../text/text.component';

const DetailContent = ({ data, detail, images }) => {
  let bg = '';
  if (images && images[0]) {
    bg = `https://image.tmdb.org/t/p/w500${images[0].file_path}`;
  }
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
      <img src={bg} className={bgImage} alt='cover' />
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
            <Rating
              name='read-only'
              value={detail.Ratings[0].Value.split('/')[0] / 2}
              precision={0.5}
              style={{ marginBottom: '12px' }}
              readOnly
            />
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

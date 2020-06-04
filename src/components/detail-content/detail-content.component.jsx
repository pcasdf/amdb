import React from 'react';

import { Grid, Typography } from '@material-ui/core';

import { useStyles } from './detail-content.styles';
import Poster from '../../components/poster/poster.component';
import Text from '../text/text.component';
import Ratings from '../ratings/ratings.component';

const DetailContent = ({ data, detail }) => {
  const { content, title, description, details, grid } = useStyles();

  return (
    <div className={content}>
      {data && detail && (
        <Grid container spacing={3} className={grid}>
          <Grid item md={6} xs={12}>
            <Poster img={data.poster_path} />
          </Grid>
          <Grid item md={5} xs={12} className={description}>
            <Typography variant='h4' className={title}>
              {detail.Title}
            </Typography>
            <Typography className={details}>
              {detail.Rated} | {detail.Genre}
            </Typography>
            <Typography className={details}>
              {detail.Runtime} | Released {detail.Released}
            </Typography>
            <Ratings Ratings={detail.Ratings} />
            <Text title='Actors' content={detail.Actors} />
            <Text title='Director' content={detail.Director} />
            <Text title='Writers' content={detail.Writer} />
            <Text title='Summary' content={detail.Plot} />
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default DetailContent;

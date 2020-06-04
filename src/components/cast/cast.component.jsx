import React from 'react';

import { Grid } from '@material-ui/core';

import { useStyles } from './cast.styles';
import Poster from '../poster/poster.component';

const Cast = ({ actors }) => {
  const { container, profile, label } = useStyles();
  return (
    <div>
      <Grid container spacing={2} className={container}>
        {actors &&
          actors.map(({ name, id, profile_path }) => (
            <Grid item xs={3} key={id} className={profile}>
              <Poster img={profile_path} style={{ margin: '0 auto' }} />
              <span className={label}>{name}</span>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Cast;

import React from 'react';
import { Link } from 'react-router-dom';

import { Grid } from '@material-ui/core';

import { useStyles } from './cast.styles';
import Poster from '../poster/poster.component';

const Cast = ({ cast }) => {
  const { container, profile, label } = useStyles();

  return (
    <div>
      <Grid container spacing={2} className={container}>
        {cast &&
          cast
            .filter(each => each)
            .map(
              ({ name, id, profile_path }) =>
                profile_path && (
                  <Grid item xs={4} md={3} key={id} className={profile}>
                    <Link to={`/people/${id}`}>
                      <Poster img={profile_path} style={{ margin: '0 auto' }} />
                      <span className={label}>{name}</span>
                    </Link>
                  </Grid>
                )
            )}
      </Grid>
    </div>
  );
};

export default Cast;

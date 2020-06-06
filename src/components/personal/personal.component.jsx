import React from 'react';
import { useHistory } from 'react-router-dom';

import { Grid } from '@material-ui/core';

import { useStyles } from './personal.styles';

const Personal = ({ data, otherData }) => {
  const { title, bio, knownFor, poster, label } = useStyles();
  const { push } = useHistory();
  return (
    <Grid item xs={12}>
      <div className={title}>{data.name}</div>
      <div className={bio}>
        <div className={label}>Biography</div>
        {data.biography.split('.').slice(0, 5).join('')}.
      </div>
      <Grid container className={knownFor}>
        <Grid item xs={12} className={label}>
          <span>Known For</span>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          {otherData.known_for.map(({ poster_path, id }, idx) => (
            <Grid item sm={1} md={3} key={idx}>
              <img
                alt='profile'
                className={poster}
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                onClick={() => push(`/info/${id}`)}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Personal;

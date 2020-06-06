import React from 'react';

import { Grid } from '@material-ui/core';

import { useStyles } from './profile.styles';
import Poster from '../../components/poster/poster.component';

const Profile = ({ images, data }) => {
  const { profile, info, label, sublabel } = useStyles();
  return (
    <Grid container item md={4} className={profile}>
      <Grid item xs={12} md={12}>
        <Poster img={images[0].file_path} />
      </Grid>
      <Grid item xs={12} className={info}>
        <div className={label}>Personal Info</div>
        <div className={sublabel}>Gender</div>
        <div>{data.gender % 2 ? 'Female' : 'Male'}</div>
        <div className={sublabel}>Hometown</div>
        <div>{data.place_of_birth}</div>
        <div className={sublabel}>Birthday</div>
        <div>{data.birthday}</div>
        {data.deathday && (
          <>
            <div className={sublabel}>Died on</div>
            <div>{data.deathday}</div>
          </>
        )}
        <div className={sublabel}>Known For</div>
        <div>{data.known_for_department}</div>
      </Grid>
    </Grid>
  );
};

export default Profile;

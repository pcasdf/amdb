import React from 'react';

import Grid from '@material-ui/core/Grid';

import { useStyles } from './footer.styles';

const Footer = () => {
  const { footer, text } = useStyles();
  return (
    <div className={footer}>
      <Grid container className={text}>
        <Grid item xs={2}>
          OMDB API
        </Grid>
        <Grid item xs={2}>
          The Movie DB API
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

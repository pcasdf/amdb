import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import ImageCard from '../../components/image-card/image-card.component';

const Slider = ({ list, index }) => (
  <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
    {list &&
      list.map(
        ({ id, poster_path }, idx) =>
          idx >= index[0] &&
          idx < index[1] && (
            <Grid item sm={2} xs={1} key={id}>
              <Link to={`/${id}`}>
                <ImageCard img={poster_path} />
              </Link>
            </Grid>
          )
      )}
  </div>
);

export default Slider;

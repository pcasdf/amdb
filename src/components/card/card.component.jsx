import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import { useStyles } from './card.styles';
import ImageCard from '../../components/image-card/image-card.component';
import RatingIcon from '../../components/rating-icon/rating-icon.component';

const Card = ({
  id,
  poster_path,
  theme,
  title,
  original_name,
  vote_average
}) => {
  const { grid, label, rating, vote } = useStyles();
  return (
    <Grid item className={grid} md={3} sm={4} key={id}>
      <Link to={`/${id}`}>
        <ImageCard img={poster_path} />
        <div className={label}>
          <span style={{ color: theme.font }}>{title || original_name}</span>
          <div className={rating}>
            <RatingIcon />
            <span style={{ color: theme.font }} className={vote}>
              {vote_average}
            </span>
          </div>
        </div>
      </Link>
    </Grid>
  );
};

export default Card;

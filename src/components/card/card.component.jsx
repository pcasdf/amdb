import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Grid } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

import { useStyles } from './card.styles';
import { ThemeContext } from '../../contexts/theme/theme.context';
import ImageCard from '../../components/image-card/image-card.component';

const Card = ({ id, poster_path, title, original_name, vote_average }) => {
  const { theme } = useContext(ThemeContext);
  const { grid, label, rating, vote, icon } = useStyles();
  return (
    <Grid item className={grid} md={2} sm={3} xs={4} key={id}>
      <Link to={`/info/${id}`}>
        <ImageCard img={poster_path} />
        <div className={label}>
          <span style={{ color: theme.font }}>{title || original_name}</span>
          <div className={rating}>
            <StarIcon className={icon} />
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

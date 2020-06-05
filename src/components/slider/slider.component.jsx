import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Grid } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

import { useStyles } from './slider.styles';
import { ThemeContext } from '../../contexts/theme/theme.context';
import ImageCard from '../../components/image-card/image-card.component';

const Slider = ({ list, index, details }) => {
  const { theme } = useContext(ThemeContext);
  const { rating, vote, label, icon } = useStyles();

  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      {list &&
        list.map(
          ({ id, poster_path, title, original_name, vote_average }, idx) =>
            idx >= index[0] &&
            idx < index[1] && (
              <Grid item sm={2} xs={1} key={id}>
                <Link to={`/info/${id}`}>
                  <ImageCard img={poster_path} />
                  {details && (
                    <div className={label}>
                      <span style={{ color: theme.font }}>
                        {title || original_name}
                      </span>
                      <div className={rating}>
                        <StarIcon className={icon} />
                        <span style={{ color: theme.font }} className={vote}>
                          {vote_average}
                        </span>
                      </div>
                    </div>
                  )}
                </Link>
              </Grid>
            )
        )}
    </div>
  );
};

export default Slider;

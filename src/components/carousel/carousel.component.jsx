import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';

import { useStyles } from './carousel.styles';
import ResultsContext from '../../contexts/results/results.context';
import ImageCard from '../../components/image-card/image-card.component';

const Carousel = () => {
  const [index, setIndex] = useState([0, 5]);
  const list = useContext(ResultsContext);

  const handleChange = direction => {
    if (direction) {
      if (index[0] < 15) {
        setIndex(prev => [prev[0] + 5, prev[1] + 5]);
      }
    } else {
      if (index[0] > 0) {
        setIndex(prev => [prev[0] - 5, prev[1] - 5]);
      }
    }
  };

  const { overhead, icon } = useStyles();

  return (
    <Grid container spacing={2} className={overhead}>
      <ChevronLeftRoundedIcon
        className={icon}
        onClick={() => handleChange(0)}
      />
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
      <ChevronRightRoundedIcon
        className={icon}
        onClick={() => handleChange(1)}
      />
    </Grid>
  );
};

export default Carousel;

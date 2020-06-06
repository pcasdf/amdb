import React, { useState } from 'react';
import SimpleViewSlider from 'react-view-slider/simple';
import ViewSlider from 'react-view-slider';

import { Grid, Hidden } from '@material-ui/core';
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';

import { useStyles } from './carousel.styles';
import Slider from '../slider/slider.component';

const Carousel = ({ list, details }) => {
  const [index, setIndex] = useState([0, 5]);

  const handleChange = direction => {
    if (direction) {
      setIndex(prev => [prev[0] + 5, prev[1] + 5]);
    } else {
      if (index[0] > 0) {
        setIndex(prev => [prev[0] - 5, prev[1] - 5]);
      }
    }
  };

  const { overhead, icon, arrow, slider, hidden } = useStyles();

  return (
    <Grid container className={overhead}>
      <Grid
        item
        sm={1}
        className={arrow}
        style={{ display: 'flex', justifyContent: 'flex-end' }}
      >
        {index[0] > 0 && (
          <ChevronLeftRoundedIcon
            className={icon}
            onClick={() => handleChange(0)}
            style={{ marginRight: '10px' }}
          />
        )}
      </Grid>
      <Grid item sm={10} className={slider}>
        <SimpleViewSlider
          transitionDuration={600}
          spacing={0.3}
          transitionTimingFunction={'ease-in-out'}
        >
          <Slider key={index[0]} list={list} index={index} details={details} />
        </SimpleViewSlider>
      </Grid>
      <Grid item sm={1} className={arrow}>
        {list && index[0] < 15 && (
          <ChevronRightRoundedIcon
            className={icon}
            onClick={() => handleChange(1)}
          />
        )}
      </Grid>
      {list &&
        list.map(each => (
          <img
            className={hidden}
            src={`https://image.tmdb.org/t/p/w500${each.poster_path}`}
          />
        ))}
    </Grid>
  );
};

export default Carousel;

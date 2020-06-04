import React, { useState } from 'react';
import SimpleViewSlider from 'react-view-slider/simple';

import { Grid } from '@material-ui/core';
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

  const { overhead, icon, arrow, slider } = useStyles();

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
        <SimpleViewSlider>
          <Slider key={index[0]} list={list} index={index} details={details} />
        </SimpleViewSlider>
      </Grid>
      <Grid item sm={1} className={arrow}>
        {list && (
          <ChevronRightRoundedIcon
            className={icon}
            onClick={() => handleChange(1)}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default Carousel;

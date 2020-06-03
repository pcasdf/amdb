import React, { useState, useContext } from 'react';
import SimpleViewSlider from 'react-view-slider/simple';

import Grid from '@material-ui/core/Grid';
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';

import { useStyles } from './carousel.styles';
import ResultsContext from '../../contexts/results/results.context';
import Slider from '../slider/slider.component';

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

  const { overhead, icon, arrow } = useStyles();

  return (
    <Grid container spacing={1} className={overhead}>
      <Grid item sm={1} className={arrow}>
        <ChevronLeftRoundedIcon
          className={icon}
          onClick={() => handleChange(0)}
        />
      </Grid>
      <Grid item sm={10}>
        <SimpleViewSlider>
          <Slider key={index[0]} list={list} index={index} />
        </SimpleViewSlider>
      </Grid>
      <Grid item sm={1} className={arrow}>
        <ChevronRightRoundedIcon
          className={icon}
          onClick={() => handleChange(1)}
        />
      </Grid>
    </Grid>
  );
};

export default Carousel;

import React, { useContext } from 'react';

import { Typography, Grid, Fade } from '@material-ui/core';

import { useStyles } from './detail-tabs.styles';
import { ThemeContext } from '../../contexts/theme/theme.context';
import { ResultsContext } from '../../contexts/results/results.context';
import { StyledTabs, StyledTab, TabPanel } from '../tabs/tabs.component';
import Video from '../video/video.component';
import Carousel from '../carousel/carousel.component';
import Cast from '../cast/cast.component';

const DetailTabs = ({ images, recs, trailer, actorsData }) => {
  const { image, tabs, padding, video, carousel, imageGrid } = useStyles();
  const {
    theme: { bg, font }
  } = useContext(ThemeContext);
  const {
    context: { current }
  } = useContext(ResultsContext);
  const [value, setValue] = React.useState(0);
  const [checked, setChecked] = React.useState({
    cast: true,
    images: false,
    similar: false,
    trailer: false,
    browse: false
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const text = event.target.innerText;
    if (text === 'Trailer') {
      setChecked({
        trailer: true,
        images: false,
        similar: false,
        cast: false,
        browse: false
      });
    } else if (text === 'Images') {
      setChecked({
        trailer: false,
        images: true,
        similar: false,
        cast: false,
        browse: false
      });
    } else if (text === 'Similar Titles') {
      setChecked({
        trailer: false,
        images: false,
        similar: true,
        cast: false,
        browse: false
      });
    } else if (text === 'Cast') {
      setChecked({
        trailer: false,
        images: false,
        similar: false,
        cast: true,
        browse: false
      });
    } else {
      setChecked({
        trailer: false,
        images: false,
        similar: false,
        cast: false,
        browse: true
      });
    }
  };

  return (
    <div className={tabs} style={{ backgroundColor: bg }}>
      <StyledTabs centered value={value} onChange={handleChange}>
        <StyledTab style={{ color: font }} label='Cast' />
        <StyledTab style={{ color: font }} label='Trailer' />
        <StyledTab style={{ color: font }} label='Images' />
        <StyledTab style={{ color: font }} label='Similar Titles' />
        <StyledTab style={{ color: font }} label='Recently Browsed' />
      </StyledTabs>
      <Fade in={checked.cast}>
        <TabPanel className={video} value={value} index={0}>
          <Cast actors={actorsData} />
        </TabPanel>
      </Fade>
      <Fade in={checked.trailer}>
        <TabPanel className={video} value={value} index={1}>
          <Video id={trailer} />
        </TabPanel>
      </Fade>
      <Fade in={checked.images}>
        <TabPanel value={value} index={2}>
          <Grid container spacing={4} className={imageGrid}>
            {images &&
              images.map(({ file_path }, idx) => (
                <Grid key={idx} item md={4}>
                  <img
                    alt='backdrop'
                    className={image}
                    src={`https://image.tmdb.org/t/p/w500${file_path}`}
                  />
                </Grid>
              ))}
          </Grid>
        </TabPanel>
      </Fade>
      <Fade in={checked.similar}>
        <TabPanel className={carousel} value={value} index={3}>
          <Carousel list={recs} details={false} />
        </TabPanel>
      </Fade>
      <Fade in={checked.browse}>
        <TabPanel className={carousel} value={value} index={4}>
          <Carousel list={current} details={false} />
        </TabPanel>
      </Fade>
      <Typography className={padding} />
    </div>
  );
};

export default DetailTabs;

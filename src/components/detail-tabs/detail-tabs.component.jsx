import React, { useContext } from 'react';

import { Typography, Grid, Fade } from '@material-ui/core';

import { useStyles } from './detail-tabs.styles';
import { ThemeContext } from '../../contexts/theme/theme.context';
import { StyledTabs, StyledTab, TabPanel } from '../tabs/tabs.component';
import Video from '../video/video.component';
import Carousel from '../carousel/carousel.component';

const DetailTabs = ({ images, recs, trailer }) => {
  const { image, tabs, padding, video, carousel, imageGrid } = useStyles();
  const {
    theme: { bg, font }
  } = useContext(ThemeContext);
  const [value, setValue] = React.useState(0);
  const [checked, setChecked] = React.useState({
    trailer: true,
    images: false,
    similar: false
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const text = event.target.innerText;
    if (text === 'Trailer') {
      setChecked({
        trailer: true,
        images: false,
        similar: false
      });
    } else if (text === 'Images') {
      setChecked({
        trailer: false,
        images: true,
        similar: false
      });
    } else {
      setChecked({
        trailer: false,
        images: false,
        similar: true
      });
    }
  };

  return (
    <div className={tabs} style={{ backgroundColor: bg }}>
      <StyledTabs centered value={value} onChange={handleChange}>
        <StyledTab style={{ color: font }} label='Trailer' />
        <StyledTab style={{ color: font }} label='Images' />
        <StyledTab style={{ color: font }} label='Similar Titles' />
      </StyledTabs>
      <Fade in={checked.trailer}>
        <TabPanel className={video} value={value} index={0}>
          <Video id={trailer} />
        </TabPanel>
      </Fade>
      <Fade in={checked.images}>
        <TabPanel value={value} index={1}>
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
        <TabPanel className={carousel} value={value} index={2}>
          <Carousel list={recs} details={false} />
        </TabPanel>
      </Fade>
      <Typography className={padding} />
    </div>
  );
};

export default DetailTabs;

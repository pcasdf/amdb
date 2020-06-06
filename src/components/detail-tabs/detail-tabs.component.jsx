import React, { useContext } from 'react';

import { Typography, Fade } from '@material-ui/core';

import { useStyles } from './detail-tabs.styles';
import { ThemeContext } from '../../contexts/theme/theme.context';
import { ResultsContext } from '../../contexts/results/results.context';
import { StyledTabs, StyledTab, TabPanel } from '../tabs/tabs.component';
import ImageList from '../image-list/image-list.component';
import Video from '../video/video.component';
import Carousel from '../carousel/carousel.component';
import Cast from '../cast/cast.component';

const DetailTabs = ({ images, recs, trailer, castData }) => {
  const { tabs, padding, video, carousel } = useStyles();
  const {
    theme: { bg, font }
  } = useContext(ThemeContext);
  const {
    context: { current }
  } = useContext(ResultsContext);
  const [value, setValue] = React.useState(0);
  const [checked, setChecked] = React.useState({
    Cast: true,
    Images: false,
    'Similar Titles': false,
    Trailer: false,
    'Recently Browsed': false
  });
  const [lastChecked, setLastChecked] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const target = event.target.innerText;
    if (lastChecked === '') {
      setChecked({
        ...checked,
        [target]: true
      });
    } else {
      setChecked({
        ...checked,
        [lastChecked]: false,
        [target]: true
      });
    }
    setLastChecked(target);
    window.scroll(0, document.body.scrollHeight - 1000);
  };

  return (
    <div className={tabs} style={{ backgroundColor: bg }}>
      <StyledTabs centered value={value} onChange={handleChange}>
        <StyledTab style={{ color: '#248' }} label='Cast' />
        <StyledTab style={{ color: '#248' }} label='Trailer' />
        <StyledTab style={{ color: '#248' }} label='Images' />
        <StyledTab style={{ color: '#248' }} label='Similar Titles' />
        <StyledTab style={{ color: '#248' }} label='Recently Browsed' />
      </StyledTabs>
      <Fade in={checked.Cast}>
        <TabPanel className={video} value={value} index={0}>
          <Cast cast={castData} />
        </TabPanel>
      </Fade>
      <Fade in={checked.Trailer}>
        <TabPanel className={video} value={value} index={1}>
          <Video id={trailer} />
        </TabPanel>
      </Fade>
      <Fade in={checked.Images}>
        <TabPanel value={value} index={2}>
          <ImageList images={images} />
        </TabPanel>
      </Fade>
      <Fade in={checked['Similar Titles']}>
        <TabPanel className={carousel} value={value} index={3}>
          <Carousel list={recs} details={false} />
        </TabPanel>
      </Fade>
      <Fade in={checked['Recently Browsed']}>
        <TabPanel className={carousel} value={value} index={4}>
          <Carousel list={current} details={false} />
        </TabPanel>
      </Fade>
      <Typography className={padding} />
    </div>
  );
};

export default DetailTabs;

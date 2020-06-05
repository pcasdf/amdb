import React from 'react';
import { Link } from 'react-router-dom';

import { Grid } from '@material-ui/core';

import { useStyles } from './cast.styles';
import Poster from '../poster/poster.component';

const Cast = ({ actors }) => {
  const { container, profile, label } = useStyles();
  // const [images, setImages] = useState();

  // const fetchImages = async id => {
  //   const response = await axios.get(
  //     `https://api.themoviedb.org/3/person/${id}/images?api_key=bada949f4005b48da2fb91c2ba013808`
  //   );
  //   setImages(response.data.profiles);
  // };

  return (
    <div>
      <Grid container spacing={2} className={container}>
        {actors &&
          actors.map(({ name, id, profile_path }) => (
            <Grid item xs={4} md={3} key={id} className={profile}>
              <Link to={`/people/${id}`}>
                <Poster img={profile_path} style={{ margin: '0 auto' }} />
                <span className={label}>{name}</span>
              </Link>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Cast;

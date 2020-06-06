import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

import { Grid, Button, Grow } from '@material-ui/core';

import { useStyles } from './people.styles';
import ImageCard from '../../components/image-card/image-card.component';
import Poster from '../../components/poster/poster.component';

const People = () => {
  const [data, setData] = useState();
  const [otherData, setOtherData] = useState();
  const [images, setImages] = useState();
  const [index, setIndex] = useState(9);
  const { id } = useParams();
  const { push } = useHistory();

  const fetchData = async () => {
    try {
      const details = await axios.get(
        `https://api.themoviedb.org/3/person/${id}?api_key=bada949f4005b48da2fb91c2ba013808&language=en-US`
      );
      const otherDetails = await axios.get(
        `https://api.themoviedb.org/3/search/person?api_key=bada949f4005b48da2fb91c2ba013808&language=en-US&query=${details.data.name}&page=1&include_adult=false`
      );
      const imageData = await axios.get(
        `https://api.themoviedb.org/3/person/${id}/images?api_key=bada949f4005b48da2fb91c2ba013808`
      );
      setData(details.data);
      setOtherData(otherDetails.data.results[0]);
      setImages(imageData.data.profiles);
    } catch (err) {
      console.log('Something went wrong.');
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const {
    body,
    title,
    bio,
    label,
    knownFor,
    poster,
    profile,
    profiles,
    info,
    sublabel,
    button
  } = useStyles();

  return (
    <div className={body}>
      {data && images && otherData && (
        <Grid container>
          <Grid container item md={4} className={profile}>
            <Grid item xs={12} md={12}>
              <Poster img={images[0].file_path} />
            </Grid>
            <Grid item xs={12} className={info}>
              <div className={label}>Personal Info</div>
              <div className={sublabel}>Gender</div>
              <div>{data.gender % 2 ? 'Female' : 'Male'}</div>
              <div className={sublabel}>Hometown</div>
              <div>{data.place_of_birth}</div>
              <div className={sublabel}>Birthday</div>
              <div>{data.birthday}</div>
              {data.deathday && (
                <>
                  <div className={sublabel}>Died on</div>
                  <div>{data.deathday}</div>
                </>
              )}
              <div className={sublabel}>Known For</div>
              <div>{data.known_for_department}</div>
            </Grid>
          </Grid>
          <Grid container item xs={8}>
            <Grid item xs={12}>
              <div className={title}>{data.name}</div>
              <div className={bio}>
                <div className={label}>Biography</div>
                {data.biography.split('.').slice(0, 5).join('')}.
              </div>
              <Grid container className={knownFor}>
                <Grid item xs={12} className={label}>
                  <span>Known For</span>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                  {otherData.known_for.map(({ poster_path, id }, idx) => (
                    <Grid item sm={1} md={3} key={idx}>
                      <img
                        alt='profile'
                        className={poster}
                        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        onClick={() => push(`/info/${id}`)}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} style={{ marginBottom: '20px' }}>
              <span className={label}>Photos</span>
            </Grid>
            <Grid container item xs={12} spacing={3}>
              {images &&
                images.map(
                  ({ file_path }, idx) =>
                    idx > 0 &&
                    idx < index && (
                      <Grow
                        in={index}
                        style={{ transformOrigin: '0 0 0' }}
                        {...(index ? { timeout: 150 * (idx % 9) } : {})}
                      >
                        <Grid item xs={3} key={idx} className={profiles}>
                          <ImageCard cursor='default' img={file_path} />
                        </Grid>
                      </Grow>
                    )
                )}
            </Grid>
            {index < images.length && (
              <Button
                onClick={() => setIndex(prev => prev + 8)}
                className={button}
                variant='outlined'
                size='large'
                color='primary'
              >
                Show More
              </Button>
            )}
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default People;

import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import { useStyles } from './trending-detail.styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Detail = ({ match }) => {
  const [data, setData] = useState();
  const [detail, setDetail] = useState();

  const id = match.params.titleId;

  const fetchDetails = useCallback(async () => {
    const movie = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=bada949f4005b48da2fb91c2ba013808`
    );
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=fdbaa0a9&i=${movie.data.imdb_id}`
    );
    setData(movie.data);
    setDetail(response.data);
    console.log(movie.data);
    console.log(response.data);
  }, [id]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  const {
    root,
    media,
    content,
    title,
    label,
    description,
    details,
    ratings,
    ratingText,
    icon
  } = useStyles();

  return (
    <div className={content}>
      {data && detail && (
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <Card elevation={6} className={root}>
              <CardActionArea>
                <CardMedia
                  className={media}
                  component='img'
                  image={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={5} xs={12} className={description}>
            <Typography variant='h4' className={title}>
              {detail.Title}
            </Typography>
            <Typography className={details}>
              {detail.Rated} | {detail.Runtime} | {detail.Genre}
            </Typography>
            <Typography className={details}>
              <div>
                <div className={ratings}>
                  <img
                    className={icon}
                    alt='iMDB'
                    src={require('../../assets/imdb.png')}
                  />
                  <span className={ratingText}>
                    {detail.Ratings[0] && detail.Ratings[0].Value}
                  </span>
                  <img
                    className={icon}
                    alt='Rotten Tomatoes'
                    src={require('../../assets/tomato.ico')}
                  />
                  <span className={ratingText}>
                    {detail.Ratings[1] && detail.Ratings[1].Value}
                  </span>
                  <img
                    className={icon}
                    alt='Metacritic'
                    src={require('../../assets/metacritic.png')}
                  />
                  <span className={ratingText}>
                    {detail.Ratings[2] && detail.Ratings[2].Value}
                  </span>
                </div>
              </div>
            </Typography>
            <Typography className={label}>Actors</Typography>
            <div className={details}>{detail.Actors}</div>
            <Typography className={label}>Summary</Typography>
            <div className={details}>{detail.Plot}</div>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default Detail;

import React, { useEffect, useState, useCallback, useContext } from 'react';
import axios from 'axios';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { useStyles } from './detail.styles';
import { ResultsContext } from '../../contexts/results/results.context';
import Poster from '../../components/poster/poster.component';
import Ratings from '../../components/ratings/ratings.component';
import Text from '../../components/text/text.component';
import Carousel from '../../components/carousel/carousel.component';
import Video from '../../components/video/video.component';

const Detail = ({ match }) => {
  const [data, setData] = useState();
  const [detail, setDetail] = useState();
  const {
    context: { current }
  } = useContext(ResultsContext);

  const id = match.params.titleId;

  const fetchDetails = useCallback(async () => {
    const movie = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=bada949f4005b48da2fb91c2ba013808`
    );
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=fdbaa0a9&i=${movie.data.imdb_id}`
    );
    const videos = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=bada949f4005b48da2fb91c2ba013808`
    );
    setData(movie.data);
    setDetail(response.data);
    console.log(movie.data);
    console.log(videos);
  }, [id]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  const { content, title, description, details, grid } = useStyles();

  return (
    <div>
      <Carousel list={current} details={false} />
      <div className={content}>
        {data && detail && (
          <Grid container spacing={3} className={grid}>
            <Grid item md={6} xs={12}>
              <Poster img={data.poster_path} />
            </Grid>
            <Grid item md={5} xs={12} className={description}>
              <Typography variant='h4' className={title}>
                {detail.Title}
              </Typography>
              <Typography className={details}>
                {detail.Rated} | {detail.Genre}
              </Typography>
              <Typography className={details}>
                {detail.Runtime} | Released {detail.Released}
              </Typography>
              <Ratings Ratings={detail.Ratings} />
              <Text title='Actors' content={detail.Actors} />
              <Text title='Director' content={detail.Director} />
              <Text title='Writers' content={detail.Writer} />
              <Text title='Summary' content={detail.Plot} />
            </Grid>
            <Grid item>
              <Video />
            </Grid>
          </Grid>
        )}
      </div>
    </div>
  );
};

export default Detail;

import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from 'react-loader-spinner';

import { Grid, Hidden } from '@material-ui/core';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { useStyles } from './genre.styles';
import { ResultsContext } from '../../contexts/results/results.context';
import Card from '../../components/card/card.component';
import Sidebar from '../../components/sidebar/sidebar.component';

const GenrePage = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const { setContext } = useContext(ResultsContext);
  const { genre, id } = useParams();
  const [title, setTitle] = useState('');

  const fetchData = useCallback(
    async page => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=bada949f4005b48da2fb91c2ba013808&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${id}`
        );
        setData(prev => [...prev, ...response.data.results]);
        setPage(prev => prev + 1);
      } catch (err) {
        console.log('Something went wrong.');
      }
    },
    [id]
  );

  useEffect(() => {
    if (genre === 'scifi') {
      setTitle('Science Fiction');
    } else {
      setTitle(genre[0].toUpperCase() + genre.slice(1));
    }
    setPage(1);
    setData([]);
    fetchData();
  }, [genre, id, fetchData]);

  useEffect(() => {
    setContext({ current: data, movies: null, tv: null });
  }, [data, setContext]);

  const { body, label, content } = useStyles();
  return (
    <div className={body}>
      <Grid container>
        <Hidden smDown>
          <Grid item md={2}>
            <Sidebar />
          </Grid>
        </Hidden>
        <Grid item xs={10} md={9} className={content}>
          <span className={label}>{title}</span>
          <InfiniteScroll
            style={{ margin: '0 auto', textAlign: 'center' }}
            dataLength={data.length}
            next={() => fetchData(page)}
            hasMore={true}
            threshold={0}
            loader={
              <Loader
                type='ThreeDots'
                color='#00BFFF'
                height={100}
                width={100}
                timeout={3000}
              />
            }
          >
            <Grid container spacing={3} style={{ marginTop: '10px' }}>
              {data.map(item => (
                <Card key={item.id} {...item} />
              ))}
            </Grid>
          </InfiniteScroll>
        </Grid>
      </Grid>
    </div>
  );
};

export default GenrePage;

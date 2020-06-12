import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { useStyles } from './genre.styles';
import { ResultsContext } from '../../contexts/results/results.context';
import List from '../../components/list/list.component';

const GenrePage = () => {
  const KEY = `bada949f4005b48da2fb91c2ba013808`;

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const { setContext } = useContext(ResultsContext);
  const { genre, id } = useParams();
  const [title, setTitle] = useState('');

  const fetchData = useCallback(
    async page => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${id}`
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

  const { body } = useStyles();
  return (
    <div className={body}>
      <List params={page} {...{ data, fetchData, title }} />
    </div>
  );
};

export default GenrePage;

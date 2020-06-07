import React, { useState, useContext, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { useStyles } from './top.styles';
import { ResultsContext } from '../../contexts/results/results.context';
import List from '../../components/list/list.component';

const TopRated = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState('');
  const { setContext } = useContext(ResultsContext);
  const { category } = useParams();

  const fetchData = useCallback(
    async page => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${category}/top_rated?api_key=bada949f4005b48da2fb91c2ba013808&language=en-US&page=${page}`
        );
        setData(prev => [...prev, ...response.data.results]);
        setPage(prev => prev + 1);
      } catch (err) {
        console.log('Something went wrong.');
      }
    },
    [category]
  );

  useEffect(() => {
    if (category === 'movie') {
      setTitle('Top Rated Movies');
    } else {
      setTitle('Top Rated TV Series');
    }
    setPage(1);
    setData([]);
    fetchData();
    // eslint-disable-next-line
  }, [category]);

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

export default TopRated;

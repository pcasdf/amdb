import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { useStyles } from './trending.styles';
import { ResultsContext } from '../../contexts/results/results.context';
import List from '../../components/list/list.component';

const Trending = () => {
  const KEY = `${process.env.REACT_APP_KEY}`;

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const { setContext } = useContext(ResultsContext);
  const { category, time } = useParams();

  const fetchData = useCallback(async (category, time, page) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/${category}/${time}?api_key=${KEY}&page=${page}`
      );
      setData(prev => [...prev, ...response.data.results]);
      setPage(prev => prev + 1);
    } catch (err) {
      console.log('Something went wrong.');
    }
  }, []);

  useEffect(() => {
    setPage(1);
    setData([]);
    fetchData(category, time, 1);
  }, [category, time, fetchData]);

  useEffect(() => {
    setContext({ current: data, movies: null, tv: null });
  }, [data, setContext]);

  const { body } = useStyles();

  return (
    <div className={body}>
      <List filter params={(category, time, page)} {...{ data, fetchData }} />
    </div>
  );
};

export default Trending;

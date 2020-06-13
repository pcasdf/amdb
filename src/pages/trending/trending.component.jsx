import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { fetchTrending } from '../../utils/fetchData';
import { useStyles } from './trending.styles';
import { ResultsContext } from '../../contexts/results/results.context';
import List from '../../components/list/list.component';

const Trending = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const { setContext } = useContext(ResultsContext);
  const { category, time } = useParams();

  const fetchData = async () => {
    const response = await fetchTrending(category, time, page);
    setData(prev => [...prev, ...response.data.results]);
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    setPage(1);
    setData([]);
    fetchData(category, time, 1);
    // eslint-disable-next-line
  }, [category, time]);

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

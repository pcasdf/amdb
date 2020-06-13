import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchTop } from '../../utils/fetchData';
import { useStyles } from './top.styles';
import { ResultsContext } from '../../contexts/results/results.context';
import List from '../../components/list/list.component';

const TopRated = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState('');
  const { setContext } = useContext(ResultsContext);
  const { category } = useParams();

  const fetchData = async () => {
    const response = await fetchTop(category, page);
    setData(prev => [...prev, ...response.data.results]);
    setPage(prev => prev + 1);
  };

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

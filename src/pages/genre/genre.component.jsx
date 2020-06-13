import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { fetchGenres } from '../../utils/fetchData';
import { useStyles } from './genre.styles';
import { ResultsContext } from '../../contexts/results/results.context';
import List from '../../components/list/list.component';

const GenrePage = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const { setContext } = useContext(ResultsContext);
  const { genre, id } = useParams();
  const [title, setTitle] = useState('');

  const fetchData = async (page, id) => {
    const response = await fetchGenres(page, id);
    setData(prev => [...prev, ...response.data.results]);
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    if (genre === 'scifi') {
      setTitle('Science Fiction');
    } else {
      setTitle(genre[0].toUpperCase() + genre.slice(1));
    }
    setPage(1);
    setData([]);
    fetchData(page, id);
    // eslint-disable-next-line
  }, [genre, id]);

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

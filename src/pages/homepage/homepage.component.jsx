import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

import Grid from '@material-ui/core/Grid';

import ThemeContext from '../../contexts/theme/theme.context';
import Card from '../../components/card/card.component';
import Filter from '../../components/filter/filter.component';

const HomePage = ({ setContext }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const themeContext = useContext(ThemeContext);
  const { category = 'all', time = 'week' } = useParams();

  let theme;
  if (themeContext) {
    theme = {
      bg: 'gray',
      font: 'white'
    };
  } else {
    theme = {
      bg: 'white',
      font: 'black'
    };
  }

  const fetchData = useCallback(async (category, time, page) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/${category}/${time}?api_key=bada949f4005b48da2fb91c2ba013808&page=${page}`
    );
    setData(prev => [...prev, ...response.data.results]);
    setPage(prev => prev + 1);
  }, []);

  useEffect(() => {
    setPage(1);
    setData([]);
    fetchData(category, time, 1);
  }, [category, time, fetchData]);

  useEffect(() => {
    setContext(data);
  }, [data, setContext]);

  return (
    <div className='homepage'>
      <InfiniteScroll
        dataLength={data.length}
        next={() => fetchData(category, time, page)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        threshold={0}
      >
        <Grid container spacing={3}>
          <Filter />
          {data.map(item => (
            <Card key={item.id} theme={theme} {...item} />
          ))}
        </Grid>
      </InfiniteScroll>
    </div>
  );
};

export default HomePage;

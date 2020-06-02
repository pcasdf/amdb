import React, { useState, useEffect, useCallback, useContext } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './homepage.styles';
import ImageCard from '../../components/image-card/image-card.component';
import Dropdown from '../../components/dropdown/dropdown.component';
import ThemeContext from '../../contexts/theme/theme.context';

const HomePage = ({ setContext }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [message, setMessage] = useState(['Movies and TV Series', 'Weekly']);
  const themeContext = useContext(ThemeContext);
  const history = useHistory();
  let { category, time } = useParams();

  if (!category || !time) {
    category = 'all';
    time = 'week';
    if (page !== 1) {
      setPage(1);
    }
  }

  const updateParams = () => {
    if (category === 'all') {
      setMessage(prev => ['Movies and TV Series', prev[1]]);
    } else if (category === 'movie') {
      setMessage(prev => ['Movies', prev[1]]);
    } else {
      setMessage(prev => ['TV Series', prev[1]]);
    }

    if (time === 'week') {
      setMessage(prev => [prev[0], 'Weekly']);
    } else {
      setMessage(prev => [prev[0], 'Daily']);
    }
  };

  useEffect(() => {
    updateParams();
  }, [category, time]);

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
    setData([]);
    fetchData(category, time, page);
  }, [category, time, fetchData]);

  useEffect(() => {
    setContext(data);
  }, [data, setContext]);

  const handleCategoryChange = value => {
    let target;
    if (value === 'All') {
      target = 'all';
    } else if (value === 'Movies') {
      target = 'movie';
    } else {
      target = 'tv';
    }
    setPage(1);
    history.push(`/trending/${target}/${time}`);
  };

  const handleTimeChange = value => {
    let target;
    if (value === 'Weekly') {
      target = 'week';
    } else {
      target = 'day';
    }
    setPage(1);
    history.push(`/trending/${category}/${target}`);
  };

  const { grid, label, star, rating, vote, svg, dropdown } = useStyles();

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
          <Grid
            item
            md={12}
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Typography
              variant='h6'
              style={{ margin: 'auto 5px', fontWeight: 400 }}
            >
              Trending {message[0]}, {message[1]}
            </Typography>
            <div className='options'>
              <Dropdown
                options={['All', 'Movies', 'TV Series']}
                defaultValue='All'
                onChange={handleCategoryChange}
                className={dropdown}
              />
              <Dropdown
                options={['Weekly', 'Daily']}
                defaultValue='Weekly'
                onChange={handleTimeChange}
                className={dropdown}
              />
            </div>
          </Grid>
          {data.map(
            ({ id, poster_path, title, original_name, vote_average }) => (
              <Grid item className={grid} md={3} sm={4} key={id}>
                <Link to={`/${id}`}>
                  <ImageCard img={poster_path} />
                  <div className={label}>
                    <span style={{ color: theme.font }}>
                      {title || original_name}
                    </span>
                    <div className={rating}>
                      <svg
                        className={svg}
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                      >
                        <path
                          className={star}
                          d='M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z'
                        ></path>
                      </svg>
                      <span style={{ color: theme.font }} className={vote}>
                        {vote_average}
                      </span>
                    </div>
                  </div>
                </Link>
              </Grid>
            )
          )}
        </Grid>
      </InfiniteScroll>
    </div>
  );
};

export default HomePage;

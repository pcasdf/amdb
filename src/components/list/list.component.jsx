import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from 'react-loader-spinner';

import { Grid, Hidden } from '@material-ui/core';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { useStyles } from './list.styles';
import Card from '../../components/card/card.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import Filter from '../../components/filter/filter.component';

const List = ({ data, fetchData, params, title, filter }) => {
  const { content, label } = useStyles();
  return (
    <Grid container>
      <Hidden smDown>
        <Grid item md={2}>
          <Sidebar />
        </Grid>
      </Hidden>
      <Grid item xs={10} md={9} className={content}>
        {filter ? <Filter /> : <span className={label}>{title}</span>}
        <InfiniteScroll
          style={{ margin: '0 auto', textAlign: 'center' }}
          dataLength={data.length}
          next={() => fetchData(params)}
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
            {data.map(
              item => item.poster_path && <Card key={item.id} {...item} />
            )}
          </Grid>
        </InfiniteScroll>
      </Grid>
    </Grid>
  );
};

export default List;

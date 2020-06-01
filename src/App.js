import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import TrendingDetail from './pages/trending-detail/trending-detail.component';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <div className='body'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/:titleId' component={TrendingDetail} />
        </Switch>
      </div>
    </div>
  );
};

export default App;

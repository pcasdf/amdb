import React, { useState } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import './App.css';

import ResultsContextProvider from './contexts/results/results.context';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Trending from './pages/trending/trending.component';
import GenrePage from './pages/genre/genre.component';
import Detail from './pages/detail/detail.component';
import SearchResults from './pages/search-results/search-results.component';

const App = () => (
  <ResultsContextProvider className='app'>
    <Header />
    <div className='body'>
      <Switch>
        <Route exact path='/' render={props => <HomePage {...props} />} />
        <Route exact path='/:titleId' component={Detail} />
        <Route
          exact
          path='/search/:title'
          render={props => <SearchResults {...props} />}
        />
        <Route
          exact
          path='/trending'
          render={props => <Trending {...props} />}
        />
        <Route
          exact
          path='/trending/:category/:time'
          render={props => <Trending {...props} />}
        />
        <Route
          exact
          path='/genre/:genre/:id'
          render={props => <GenrePage {...props} />}
        />
        <Redirect to='/' />
      </Switch>
    </div>
  </ResultsContextProvider>
);

export default App;

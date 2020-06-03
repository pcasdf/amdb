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
import Footer from './components/footer/footer.component';

const App = () => (
  <ResultsContextProvider className='app'>
    <Header />
    <div className='body'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/:titleId' component={Detail} />
        <Route exact path='/search/:title' component={SearchResults} />
        <Route exact path='/trending' component={Trending} />
        <Route exact path='/trending/:category/:time' component={Trending} />
        <Route exact path='/genre/:genre/:id' component={GenrePage} />
        <Redirect to='/' />
      </Switch>
    </div>
    <Footer />
  </ResultsContextProvider>
);

export default App;

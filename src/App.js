import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

import './App.css';

import ResultsContext from './contexts/results/results.context';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Detail from './pages/detail/detail.component';
import SearchResults from './pages/search-results/search-results.component';

const App = ({ setTheme }) => {
  const [context, setContext] = useState(null);

  return (
    <ResultsContext.Provider value={context} className='app'>
      <Header setTheme={setTheme} />
      <div className='body'>
        <Route
          exact
          path='/'
          render={props => <HomePage setContext={setContext} {...props} />}
        />
        <Route exact path='/:titleId' component={Detail} />
        <Route
          exact
          path='/search/:title'
          render={props => <SearchResults setContext={setContext} {...props} />}
        />
        <Route
          exact
          path='/trending/:category/:time'
          render={props => <HomePage setContext={setContext} {...props} />}
        />
        <Redirect to='/' />
      </div>
    </ResultsContext.Provider>
  );
};

export default App;

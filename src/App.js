import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import ResultsContext from './contexts/results/results.context';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Detail from './pages/detail/detail.component';
import SearchResults from './pages/search-results/search-results.component';

const App = () => {
  const [context, setContext] = useState(null);

  return (
    <ResultsContext.Provider value={context} className='app'>
      <Header />
      <div className='body'>
        <Switch>
          <Route exact path='/'>
            <HomePage setContext={setContext} />
          </Route>
          <Route exact path='/:titleId' component={Detail} />
          <Route exact path='/search/:title'>
            <SearchResults setContext={setContext} />
          </Route>
        </Switch>
      </div>
    </ResultsContext.Provider>
  );
};

export default App;

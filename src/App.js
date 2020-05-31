import React from 'react';
import logo from './logo.svg';
import './App.css';

// http://www.omdbapi.com/?apikey=fdbaa0a9&s=&y=2020
// https://api.themoviedb.org/3/trending/all/week?api_key=bada949f4005b48da2fb91c2ba013808

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import { makeStyles } from '@material-ui/core/styles';
import ThemeContext from './contexts/theme/theme.context';
import * as serviceWorker from './serviceWorker';

const Body = () => {
  const context = useContext(ThemeContext);
  const [theme, setTheme] = useState(context);

  const useStyles = makeStyles({
    body: {
      backgroundColor: theme.bg,
      color: theme.font
    }
  });

  const classes = useStyles();

  return (
    <div className={classes.body}>
      <ThemeContext.Provider value={theme}>
        <App setTheme={setTheme} />
      </ThemeContext.Provider>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <Body />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import { makeStyles } from '@material-ui/core/styles';
import ThemeContextProvider, {
  ThemeContext
} from './contexts/theme/theme.context';
import * as serviceWorker from './serviceWorker';

const Body = () => {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles({
    body: {
      backgroundColor: theme.bg,
      color: theme.font
    }
  });

  const classes = useStyles();

  return (
    <div className={classes.body}>
      <App />
    </div>
  );
};

ReactDOM.render(
  <Router>
    <ThemeContextProvider>
      <Body />
    </ThemeContextProvider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import { createContext } from 'react';

const ThemeContext = createContext({
  bg: 'white',
  font: 'black'
});

export default ThemeContext;

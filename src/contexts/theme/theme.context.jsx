import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({
  theme: {
    bg: 'white',
    font: 'black'
  },
  toggle: () => {}
});

const ThemeContextProvider = props => {
  const [theme, setTheme] = useState({
    bg: 'white',
    font: 'black'
  });

  const toggleTheme = () => {
    if (theme.bg === 'white') {
      setTheme({
        bg: 'gray',
        font: 'white'
      });
    } else {
      setTheme({
        bg: 'white',
        font: 'black'
      });
    }
  };

  return (
    <ThemeContext.Provider value={{ toggle: toggleTheme, theme: theme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

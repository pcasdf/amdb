import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({
  theme: {
    bg: 'white',
    font: 'black'
  },
  toggle: () => {}
});

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    bg: 'white',
    font: 'black'
  });

  const toggleTheme = () => {
    if (theme.bg === 'white') {
      setTheme({
        bg: '#111',
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
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

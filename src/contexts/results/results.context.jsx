import React, { createContext, useState } from 'react';

export const ResultsContext = createContext({
  context: {
    current: null
  },
  setContext: () => {}
});

const ResultsContextProvider = ({ children }) => {
  const [context, setContext] = useState({
    current: null
  });

  return (
    <ResultsContext.Provider value={{ context, setContext }}>
      {children}
    </ResultsContext.Provider>
  );
};

export default ResultsContextProvider;

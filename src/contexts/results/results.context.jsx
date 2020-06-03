import React, { createContext, useState } from 'react';

export const ResultsContext = createContext({
  context: {
    current: null
  },
  setContext: () => {}
});

const ResultsContextProvider = props => {
  const [context, setContext] = useState({
    current: null
  });

  return (
    <ResultsContext.Provider value={{ context, setContext }}>
      {props.children}
    </ResultsContext.Provider>
  );
};

export default ResultsContextProvider;

import { createContext, useState } from 'react';

const IntervalContext = createContext();

const IntervalProvider = ({ children }) => {
  const [intervalValue, setIntervalValue] = useState(1000);

  return (
    <IntervalContext.Provider value={{ intervalValue, setIntervalValue }}>
      {children}
    </IntervalContext.Provider>
  );
};

export { IntervalProvider, IntervalContext };
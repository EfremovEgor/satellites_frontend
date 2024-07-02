// context/DatePickerContext.js
import { createContext, useState } from 'react';

const DatePickerContext = createContext();

const DatePickerProvider = ({ children }) => {
  const [pickedDate, setPickedDate] = useState(null);

  return (
    <DatePickerContext.Provider value={{ pickedDate, setPickedDate }}>
      {children}
    </DatePickerContext.Provider>
  );
};

export { DatePickerProvider, DatePickerContext };
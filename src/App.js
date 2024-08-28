import React, { useState } from "react";
import CustomEarth from "./components/CustomEarth";
import Search from "./components/Search2";
import Clock from  "./components/TimeControls";
import Dashboard from "./components/Dashboard";

import jsonData from "./components/res.json"
import DatePicker from "./components/DatePicker";
import { DatePickerProvider } from './components/DatePickerContext';
import { IntervalProvider } from "./components/IntervalContext";


// const {extractCoordinates} = require('./components/pointsData')

const data = jsonData
const flatData = Array.from(new Set(data.flat(2)))
const keys = Array.from(new Set(data.flat(2).map(item => Object.keys(item)[0])));


function App() {

  const [dashboardData, setDashboardData] = useState(null);

  return (
    // <div className="App">
    //   <DatePicker/>
    //   <Search />
    //   <CustomEarth />
    //   <Clock />
    // </div>
    <DatePickerProvider>
      <div className="App">
        <div className="grid grid-flow-col gap-4">
          <DatePicker/>
          <Search/>
        </div>
        {/* <DatePicker/> */}
        {/* <Search /> */}
        <IntervalProvider>

          <CustomEarth setDashboardData={setDashboardData} />
          <Clock />

        </IntervalProvider>
        
        <Dashboard data={dashboardData} />
      </div>
    </DatePickerProvider>

  );
}

export default App;

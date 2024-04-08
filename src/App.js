import React from "react";
import CustomEarth from "./components/CustomEarth";
import Search from "./components/Search2";

import extractCoordinates from './components/pointsData';
import jsonData from "./components/res.json"


// const {extractCoordinates} = require('./components/pointsData')

const data = jsonData
const flatData = Array.from(new Set(data.flat(2)))
const keys = Array.from(new Set(data.flat(2).map(item => Object.keys(item)[0])));


function App() {
  return (
    <div className="App">
      {console.log(keys)}
      <Search />
      <CustomEarth />
    </div>
  );
}

export default App;

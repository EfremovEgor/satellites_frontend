import { useEffect, useState } from 'react';
import * as THREE from 'three';
import jsonData from "./res.json"



const data = jsonData
const flatData = Array.from(new Set(data.flat(2)))

const extractCoordinates = (flatData, id) => {
    const threeVectors = flatData
      .filter(item => Object.keys(item)[0] === id)
      .map(item => {
        const [x, y, z] = item[id];
        return new THREE.Vector3(x*7, y*7, z*7);
        // return [x, y, z];
      });

    //   console.log(threeVectors.keys()[0])
  
    return threeVectors;
  }


// const id = "53433";
// const threeVectors = extractCoordinates(flatData, id);
// console.log(threeVectors);

export default extractCoordinates
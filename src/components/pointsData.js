import { useEffect, useState } from 'react';
import * as THREE from 'three';
import jsonData from "./res.json"
import coords from "./satellite_coords.json"



const data = jsonData
const flatData = Array.from(new Set(data.flat(2)))

const data2 = coords

// console.log(coords[0].id)
// console.log(coords[0].loc[0])


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


const extractNewCoordinates = (Data, id) => {
  const Vectors = Data
    .filter(item => item.id === id)
    .flatMap(item => item.loc.map((position, index) => {
      const [deltatime, x, y, z] = position;
      return { vector: new THREE.Vector3(x * 7, y * 7, z * 7), deltatime };
    }));
  
  return Vectors;
}


console.log(extractNewCoordinates(coords, 53433)[0].deltatime)

// const id = "53433";
// const threeVectors = extractCoordinates(flatData, id);
// console.log(threeVectors);

export default extractCoordinates
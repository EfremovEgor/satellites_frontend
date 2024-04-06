import { useEffect, useState } from 'react';

let pointsData;

const fetchData = async () => {
  const response = await fetch('points.json');
  const data = await response.json();
  const satellites = {};

  data.forEach((point) => {
    const satelliteId = Object.keys(point)[0];
    if (!satellites[satelliteId]) {
      satellites[satelliteId] = [];
    }
    satellites[satelliteId].push(point[satelliteId]);
  });

  pointsData = Object.values(satellites);
};


useEffect(() => {
  fetchData();
}, []);

export default pointsData;
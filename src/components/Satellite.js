// TODO: Смотреть TODO в CustomEarth.
// TODO: Добавить ускорение спутников при ускорении времени.

import React, { useRef, useState, useContext } from "react";
import { useFrame } from "@react-three/fiber";
import Dashboard from "./Dashboard";

import * as THREE from "three";

const OrbitingSatellite = ({ points, id, name, setDashboardData, delay }) => {
  const satelliteRef = useRef();
  const satelliteGeo = new THREE.SphereGeometry(0.1,33,32);
  // const delay = 1000
  const satelliteMat = new THREE.MeshBasicMaterial({ color: "#ff6a6a" });
  // const [satelliteColor, setSatelliteColor] = useState(satelliteMat);
  const satellite = new THREE.Mesh(satelliteGeo, satelliteMat);
  const currentIndex = useRef(0); 
  const [isActive, setIsActive] = useState(false);
  const [selectedSatellite, setSelectedSatellite] = useState(null)
  const [delayTimeout, setDelayTimeout] = useState(null);
 

  useFrame(() => {
    if (delayTimeout) return;

    // Calculate the position of the satellite along the circular orbit
    if (currentIndex.current < points.length - 1) {
      satelliteRef.current.position.lerp(points[currentIndex.current + 1], 0.01);
      if (satelliteRef.current.position.distanceTo(points[currentIndex.current + 1]) < 0.01) {
        currentIndex.current++;
        setDelayTimeout(setTimeout(() => {
          setDelayTimeout(null);
        }, delay))
      }
    } else {
      satelliteRef.current.position.lerp(points[0], 0.01);
      if (satelliteRef.current.position.distanceTo(points[0]) < 0.01) {
        currentIndex.current = 0;
        setDelayTimeout(setTimeout(() => {
          setDelayTimeout(null);
        }, delay))
      }
    }
    });    


    const handleClick = (satellitePosition) => {
      setIsActive(true);
      setSelectedSatellite(satellitePosition);
      console.log(satellitePosition);
      setDashboardData({ id, name, position: satellitePosition });
    };


    const handleMouseEnter = () => {
      satelliteMat.color.set("#ffffff");
    };

    const handleMouseLeave = () => {
      satelliteMat.color.set("#ff6a6a");
    };

  return (
    <>
    <mesh 
      ref={satelliteRef} 
      position={[4, 4, 4]}
      onClick={() => handleClick(satelliteRef.current.position)}
      onPointerEnter={handleMouseEnter}
      onPointerLeave={handleMouseLeave}
    >
      <primitive object={satellite} scale={0.7} />
      
    </mesh>
    </>
  );
};



export default OrbitingSatellite;
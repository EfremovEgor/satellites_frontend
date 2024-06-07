import React, { useRef, useState, useContext } from "react";
import { useFrame } from "@react-three/fiber";
import InfoBar from "./SatelliteInfo";

import * as THREE from "three";

const OrbitingSatellite = ({ points }) => {
  const satelliteRef = useRef();
  const satelliteGeo = new THREE.SphereGeometry(0.1,33,32);
  const satelliteMat = new THREE.MeshBasicMaterial({ color: "#ff6a6a" });
  const [satelliteColor, setSatelliteColor] = useState(satelliteMat);
  const satellite = new THREE.Mesh(satelliteGeo, satelliteMat);
  const currentIndex = useRef(0); 
  const [isActive, setIsActive] = useState(false);
  const [selectedSatellite, setSelectedSatellite] = useState(null)
 

  useFrame(() => {

    // Calculate the position of the satellite along the circular orbit
    if (currentIndex.current < points.length - 1) {
      satelliteRef.current.position.lerp(points[currentIndex.current + 1], 0.01);
      if (satelliteRef.current.position.distanceTo(points[currentIndex.current + 1]) < 0.01) {
        currentIndex.current++;
      }
    } else {
      satelliteRef.current.position.lerp(points[0], 0.01);
      if (satelliteRef.current.position.distanceTo(points[0]) < 0.01) {
        currentIndex.current = 0;
      }
    }
    });    

    // const handleClick = () => {
    //   setIsActive(true);
    //   console.log("click");
    // };


    const handleClick = (satellitePosition) => {
      setIsActive(true);
      setSelectedSatellite(satellitePosition);
      console.log(satellitePosition)
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
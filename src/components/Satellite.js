import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const OrbitingSatellite = ({ points }) => {
  const satelliteRef = useRef();
  const satelliteGeo = new THREE.SphereGeometry(0.1,33,32);
  const satelliteMat = new THREE.MeshBasicMaterial({ color: "#ff6a6a" });
  const satellite = new THREE.Mesh(satelliteGeo, satelliteMat);
  const currentIndex = useRef(0); 


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

//   useFrame(({ clock }) => {
//     const elapsedTime = clock.getElapsedTime() % 10; // To keep the animation smooth when the timer resets
//     const angle = -elapsedTime * speed * 2 * Math.PI;

//     // Calculate the position of the satellite along the circular orbit

//     satelliteRef.current.position.x = orbitRadius * Math.cos(angle);
//     satelliteRef.current.position.y = orbitRadius * Math.sin(angle);
//     satelliteRef.current.position.z = orbitRadius * Math.sin(angle);
//     satelliteRef.current.position.moveToNextPoint
//     satelliteRef.current.position.


//     satelliteRef.current.rotation.y += 0.01;
//   });

  return (
    <mesh ref={satelliteRef} position={[4, 4, 4]}>
      <primitive object={satellite} scale={0.7} />
    </mesh>
  );
};



export default OrbitingSatellite;
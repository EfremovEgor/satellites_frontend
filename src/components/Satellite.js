import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const OrbitingSatellite = ({ height, speed, orbitRadius }) => {
  const satelliteRef = useRef();
  const satelliteGeo = new THREE.SphereGeometry(0.1,33,32);
  const satelliteMat = new THREE.MeshBasicMaterial({ color: "#ff6a6a" });
  const satellite = new THREE.Mesh(satelliteGeo, satelliteMat);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime() % 10; // To keep the animation smooth when the timer resets
    const angle = -elapsedTime * speed * 2 * Math.PI;

    // Calculate the position of the satellite along the circular orbit

    satelliteRef.current.position.x = orbitRadius * Math.cos(angle);
    satelliteRef.current.position.y = orbitRadius * Math.sin(angle);
    satelliteRef.current.position.z = orbitRadius * Math.sin(angle);

    // satelliteRef.current.position.set(
    //   orbitRadius * Math.cos(angle),
    //   height,
    //   orbitRadius * Math.sin(angle)
    // );

    // Add rotation to the satellite
    satelliteRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={satelliteRef} position={[0, height, 0]}>
      <primitive object={satellite} scale={1} />
    </mesh>
  );
};

export default OrbitingSatellite;
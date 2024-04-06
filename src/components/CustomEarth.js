import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import Satellite from './Satellite';
import * as THREE from 'three';

const rotateModel = (model) => {
  model.rotation.y = Math.PI;
  return model;
};

const ExtendedCanvas = ({ children, ...props }) => {
  return <Canvas {...props}>{children}</Canvas>;
};

var points = [
  new THREE.Vector3( 1, 2, 3 ),
  new THREE.Vector3( 2, 3, 4 ),
  new THREE.Vector3( 3, 4, 5 ),
  // add more points as needed
];



const CustomEarth = () => {
  // const satellites = [
  //   { height: 10, speed: 1 },
  //   { height: 1.5, speed: 3 },
  //   { height: 3, speed: 5 },
  // ];
  const customModel = useGLTF("/models/earth/scene.gltf");
  const earthModel = rotateModel(customModel.scene);
  // const earthPosition = new THREE.Vector3().fromArray(earthModel.position);

  // const satellite = <Satellite height={10} speed={1} orbitRadius={5} />

  // const satelliteGeo = new THREE.SphereGeometry(0.1,33,32);
  // const satelliteMat = new THREE.MeshBasicMaterial({ color: "#ff6a6a" });
  // const satellite = new THREE.Mesh(satelliteGeo, satelliteMat);

  // earthModel.add(satellite);

  // satellite.position.x = 5;
  // satellite.position.y = 5;



  return (
    <div style={{width:"100vw", height:"100vh"}}>
    <ExtendedCanvas
      className="cursor-pointer"
      frameloop="demand"
      camera={{ position: [0, 10, 20], fov: 45, near: 0.1, far: 200 }}
    >
      <color args={["#1e1e1e"]} attach="background" />
      <Environment preset="sunset"/>
      <OrbitControls autoRotate enableZoom={true} enablePan={true} />
      <primitive object={earthModel} scale={5} />
      {/* <Satellite height={10} speed={0.1} orbitRadius={10} /> */}
      <Satellite x={0} y={2} z={1} points={points}></Satellite>
      {/* <Satellite height={5} speed={0.1} orbitRadius={15} /> */}
      {/* Satellites */}

      {/* {satellites.map((satellite, index) => {
          return (
            <Satellite height={satellite.height} speed={satellite.speed} key={index} />
          );
      })} */}
    </ExtendedCanvas>
    </div>
  );
};

export default CustomEarth;
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import Satellite from './Satellite';
import extractCoordinates from './pointsData';
import jsonData from "./res.json"
import * as THREE from 'three';

const data = jsonData
const flatData = Array.from(new Set(data.flat(2)))
const IDs = Array.from(new Set(data.flat(2).map(item => Object.keys(item)[0])));

// const rotateModel = (model) => {
//   model.rotation.y = Math.PI;
//   return model;
// };

const ExtendedCanvas = ({ children, ...props }) => {
  return <Canvas {...props}>{children}</Canvas>;
};

const CustomEarth = () => {
  
  const customModel = useGLTF("/models/earth/scene.gltf");
  const earthModel = customModel.scene;



  return (
    <div style={{width:"100vw", height:"100vh"}}>
    <ExtendedCanvas
      className="cursor-pointer"
      frameloop="demand"
      camera={{ position: [0, 10, 20], fov: 45, near: 0.1, far: 200 }}
    >
      <color args={["#1e1e1e"]} attach="background" />
      <Environment preset="sunset"/>
      <OrbitControls autoRotate autoRotateSpeed={0.05} enableZoom={true} enablePan={true} />
      <primitive object={earthModel} scale={5} />

      {IDs.map((id, index) => (
        <Satellite key={index} points={extractCoordinates(flatData, id)} />
      ))}
      
    </ExtendedCanvas>
    </div>
  );
};

export default CustomEarth;
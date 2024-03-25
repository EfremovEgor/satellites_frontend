import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const rotateModel = (model) => {
  model.rotation.y = Math.PI;
  return model;
};

const CustomEarth = () => {
  const customModel = useGLTF("/models/earth/scene.gltf");
  const earthModel = rotateModel(customModel.scene);

  return (
    <Canvas
      className="cursor-pointer"
      frameloop="demand"
      camera={{ position: [0, 10, 20], fov: 45, near: 0.1, far: 200 }}
    >
      <OrbitControls autoRotate enableZoom={true} enablePan={true} />
      <primitive object={earthModel} scale={5} />
    </Canvas>
  );
};

export default CustomEarth;
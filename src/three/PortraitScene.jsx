import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

function PortraitModel() {
  const { scene } = useGLTF("src/assets/models/portrait.glb"); // custom 3D-models should be .glb
  const modelRef = useRef();

  // Rotate the model on its y-axis
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Adjust rotation speed here
    }
  });

  return <primitive ref={modelRef} object={scene}/>; // primtive is for external 3D-modelss
}

function PortraitScene() {
  return (
    <Canvas>

      {/* Lighting */}
      <ambientLight intensity={0.5}/>
      <directionalLight position={[-5, 0, 1]} color={"red"} intensity={10}/>
      <directionalLight position={[5, 0, 1]} color={"blue"} intensity={10}/>

      {/* 3D Model */}
      <PortraitModel/>
      <OrbitControls enableRotate={true} enableZoom={false} enablePan={false}/>

    </Canvas>
  );
}

export default PortraitScene;

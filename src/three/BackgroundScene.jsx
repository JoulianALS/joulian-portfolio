import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function MovingParticles() {
  const particlesRef = useRef();
  const [geometry, setGeometry] = useState();

  useEffect(() => {
    const particleCount = 15000;
    const positions = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);

    // Generate random positions and color variations for the particles
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100; // X position
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100; // Y position
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100; // Z position

      // Assign a color gradient (purple to blue)
      const colorValue = Math.random();
      colorArray[i * 3] = 0.5 + colorValue * 0.5; // Red (purple tone)
      colorArray[i * 3 + 1] = 0.2 + colorValue * 0.3; // Green (low)
      colorArray[i * 3 + 2] = 0.7 + colorValue * 0.3; // Blue (dominant)
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colorArray, 3));

    setGeometry(geometry);
  }, []);

  // Create a wave-like effect using sine functions
  useFrame(() => {
    if (particlesRef.current) {
      const time = performance.now() * 0.001; // Smooth animation
      const positions = particlesRef.current.geometry.attributes.position.array;
      
      // Animate positions in a wave-like manner for the particles
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(time + positions[i] * 0.03) * 0.05;
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true;
      particlesRef.current.rotation.y += 0.001;
    }
  });

  return (
    geometry && (
      <points ref={particlesRef}>
        <bufferGeometry attach="geometry" {...geometry}/>
        <pointsMaterial
          attach="material"
          size={0.1}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.9}
        />
      </points>
    )
  );
}

function BackgroundScene() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        background: "linear-gradient(0deg, #2a2a3d, #000000)",
      }}
      camera={{ position: [0, 0, 3] }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.3}/>
      <directionalLight position={[5, 5, 5]} intensity={1} color="#7f5af0" /> {/* Purple light */}

      {/* Moving Particles */}
      <MovingParticles/>

      {/* Orbit Controls */}
      <OrbitControls enableZoom={false} enablePan={false}/>
    </Canvas>
  );
}

export default BackgroundScene;

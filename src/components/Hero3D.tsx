import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const GeometricShape = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

const Hero3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    
      <Canvas style={{ height: '300px', width: '100%' }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 10]} intensity={1} />
        <GeometricShape />
        <GeometricShape position={[3, 0, 0]} />
        <GeometricShape position={[-3, 0, 0]} />
      </Canvas>
    
  );
};

export default Hero3D;

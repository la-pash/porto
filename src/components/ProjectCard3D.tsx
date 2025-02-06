import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ProjectCard = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((event: MouseEvent) => {
    setMousePosition({
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: -(event.clientY / window.innerHeight) * 2 + 1,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1 + (mousePosition.y * 0.1);
      meshRef.current.rotation.y += delta * 0.1 + (mousePosition.x * 0.1);
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 0.5]} />
      <meshStandardMaterial color="purple" />
    </mesh>
  );
};

const ProjectCard3D = () => {
  return (
    
      <Canvas style={{ height: '300px', width: '100%' }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 10]} intensity={1} />
        <ProjectCard />
      </Canvas>
    
  );
};

export default ProjectCard3D;

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const TimelineEvent = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 0.5, 0.5]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const Timeline3D = () => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(() => {
    groupRef.current.rotation.x += 0.002;
  });

  const events = [
    { year: 2017, position: [-5, 0, 0] },
    { year: 2019, position: [0, 0, 0] },
    { year: 2021, position: [5, 0, 0] },
    { year: 2023, position: [10, 0, 0] },
  ];

  return (
    <group ref={groupRef}>
      {events.map((event, index) => (
        <TimelineEvent key={index} position={event.position} />
      ))}
    </group>
  );
};

export default Timeline3D;

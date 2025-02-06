import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const SkillNode = ({ skill }: { skill: string }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [position] = useState(() => new THREE.Vector3(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5));

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshStandardMaterial color="lightblue" />
    </mesh>
  );
};

const Skills3D = () => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(() => {
    groupRef.current.rotation.y += 0.005;
  });

  const skills = ["React", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "MongoDB"];

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => (
        <SkillNode key={index} skill={skill} />
      ))}
    </group>
  );
};

export default Skills3D;

"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import type { Group, Points } from "three";
import { cn } from "@/lib/utils";

function SkyIslandOrb() {
  const groupRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.15;
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.6}>
        <mesh position={[0, 0.3, 0]}>
          <icosahedronGeometry args={[0.85, 1]} />
          <MeshDistortMaterial
            color="#f97316"
            emissive="#ea580c"
            emissiveIntensity={0.35}
            roughness={0.35}
            metalness={0.2}
            distort={0.28}
            speed={1.8}
          />
        </mesh>
        <mesh position={[0, -0.55, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[1.1, 1.35, 0.35, 32]} />
          <meshStandardMaterial color="#292524" roughness={0.85} metalness={0.05} />
        </mesh>
      </Float>
    </group>
  );
}

function FlyingParticles() {
  const ref = useRef<Points>(null);
  const positions = new Float32Array(48 * 3);
  for (let i = 0; i < 48; i++) {
    const angle = (i / 48) * Math.PI * 2;
    const radius = 2.2 + (i % 5) * 0.12;
    positions[i * 3] = Math.cos(angle) * radius;
    positions[i * 3 + 1] = (i % 7) * 0.18 - 0.4;
    positions[i * 3 + 2] = Math.sin(angle) * radius;
  }

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#fdba74" size={0.04} transparent opacity={0.7} />
    </points>
  );
}

interface SectionSkyDecorProps {
  className?: string;
}

export function SectionSkyDecor({ className }: SectionSkyDecorProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden opacity-70",
        className
      )}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0.5, 4.2], fov: 42 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 6, 3]} intensity={1.1} color="#fff7ed" />
        <pointLight position={[-3, 2, 2]} intensity={0.6} color="#f97316" />
        <SkyIslandOrb />
        <FlyingParticles />
      </Canvas>
    </div>
  );
}

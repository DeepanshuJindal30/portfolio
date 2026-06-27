"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import type { SkillOrbitCategory } from "@/data/skills";
import { useInViewport } from "@/hooks/useInViewport";
import { useVisualPerformance } from "@/hooks/useVisualPerformance";
import { cn } from "@/lib/utils";

interface CategoryOrbProps {
  position: [number, number, number];
  color: string;
  emissive: string;
  active: boolean;
}

function CategoryOrb({ position, color, emissive, active }: CategoryOrbProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetScale = active ? 1.35 : 1;

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    const s = meshRef.current.scale.x;
    const next = THREE.MathUtils.lerp(s, targetScale, delta * 5);
    meshRef.current.scale.setScalar(next);
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.35}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[0.2, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={active ? 0.85 : 0.35}
          metalness={0.35}
          roughness={0.45}
        />
      </mesh>
    </Float>
  );
}

function SkillsScene({
  categories,
  activeId,
}: {
  categories: SkillOrbitCategory[];
  activeId: string;
}) {
  const groupRef = useRef<THREE.Group>(null);

  const nodes = useMemo(
    () =>
      categories.map((cat, i) => {
        const angle = (i / categories.length) * Math.PI * 2;
        const radius = 1.75;
        return {
          ...cat,
          position: [
            Math.cos(angle) * radius,
            Math.sin(i * 1.2) * 0.25,
            Math.sin(angle) * radius,
          ] as [number, number, number],
        };
      }),
    [categories]
  );

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[0.14, 12, 12]} />
        <meshStandardMaterial
          color="#f97316"
          emissive="#ea580c"
          emissiveIntensity={0.7}
          metalness={0.4}
          roughness={0.35}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.75, 0.018, 6, 48]} />
        <meshBasicMaterial color="#f97316" transparent opacity={0.22} />
      </mesh>
      {nodes.map((node) => (
        <CategoryOrb
          key={node.id}
          position={node.position}
          color={node.color}
          emissive={node.emissive}
          active={activeId === node.id}
        />
      ))}
    </group>
  );
}

interface SkillsOrbit3DProps {
  categories: SkillOrbitCategory[];
  activeId: string;
  className?: string;
}

export function SkillsOrbit3D({
  categories,
  activeId,
  className,
}: SkillsOrbit3DProps) {
  const { enable3D, canvasDpr } = useVisualPerformance();
  const { ref, inView } = useInViewport<HTMLDivElement>({ rootMargin: "160px" });

  if (!enable3D) return null;

  return (
    <div
      ref={ref}
      className={cn("relative w-full h-full min-h-[260px]", className)}
      aria-hidden="true"
    >
      {inView && (
        <Canvas
          camera={{ position: [0, 0.8, 4.2], fov: 42 }}
          dpr={canvasDpr}
          gl={{ alpha: true, antialias: false, powerPreference: "default" }}
          frameloop="always"
        >
          <ambientLight intensity={0.45} />
          <pointLight position={[3, 4, 2]} intensity={1.1} color="#fdba74" />
          <pointLight position={[-2, -1, 3]} intensity={0.4} color="#a78bfa" />
          <SkillsScene categories={categories} activeId={activeId} />
        </Canvas>
      )}
    </div>
  );
}

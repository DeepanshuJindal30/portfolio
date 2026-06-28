"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";
import type { SkillOrbitCategory } from "@/data/skills";
import { techIconMap } from "@/data/skills";
import { useInViewport } from "@/hooks/useInViewport";
import { useVisualPerformance } from "@/hooks/useVisualPerformance";
import { cn } from "@/lib/utils";

interface CategoryOrbProps {
  position: [number, number, number];
  color: string;
  emissive: string;
  active: boolean;
  label: string;
}

function CategoryOrb({
  position,
  color,
  emissive,
  active,
  label,
}: CategoryOrbProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetScale = active ? 1.4 : 1;

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    const s = meshRef.current.scale.x;
    meshRef.current.scale.setScalar(
      THREE.MathUtils.lerp(s, targetScale, delta * 5)
    );
  });

  return (
    <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.45}>
      <group position={position}>
        <mesh ref={meshRef}>
          <octahedronGeometry args={[0.18, 0]} />
          <meshStandardMaterial
            color={color}
            emissive={emissive}
            emissiveIntensity={active ? 0.9 : 0.4}
            metalness={0.45}
            roughness={0.35}
          />
        </mesh>
        {active && (
          <Html center distanceFactor={6} style={{ pointerEvents: "none" }}>
            <span className="text-[9px] font-mono uppercase tracking-wider text-white whitespace-nowrap px-2 py-0.5 rounded-full bg-black/60 border border-white/20">
              {label}
            </span>
          </Html>
        )}
      </group>
    </Float>
  );
}

function TechIconOrb({
  skill,
  position,
  index,
}: {
  skill: string;
  position: [number, number, number];
  index: number;
}) {
  const ref = useRef<THREE.Group>(null);
  const meta = techIconMap[skill];

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.position.y =
      position[1] + Math.sin(t * 1.2 + index) * 0.08;
    ref.current.rotation.y = t * 0.3 + index;
  });

  const iconUrl = meta
    ? `https://cdn.simpleicons.org/${meta.slug}/${meta.color}`
    : null;

  return (
    <group ref={ref} position={position}>
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.5}>
        <Html
          transform
          occlude
          distanceFactor={5.5}
          style={{ pointerEvents: "none" }}
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-zinc-950/90 border border-white/15 p-1.5 shadow-lg flex items-center justify-center">
            {iconUrl ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={iconUrl}
                alt={meta?.label ?? skill}
                className="w-full h-full object-contain"
              />
            ) : (
              <span className="text-[8px] font-bold text-white">
                {skill.slice(0, 2).toUpperCase()}
              </span>
            )}
          </div>
        </Html>
      </Float>
    </group>
  );
}

function SkillsScene({
  categories,
  activeId,
  activeSkills,
}: {
  categories: SkillOrbitCategory[];
  activeId: string;
  activeSkills: string[];
}) {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Group>(null);

  const nodes = useMemo(
    () =>
      categories.map((cat, i) => {
        const angle = (i / categories.length) * Math.PI * 2;
        const radius = 1.85;
        return {
          ...cat,
          position: [
            Math.cos(angle) * radius,
            Math.sin(i * 1.2) * 0.28,
            Math.sin(angle) * radius,
          ] as [number, number, number],
        };
      }),
    [categories]
  );

  const techNodes = useMemo(
    () =>
      activeSkills.slice(0, 6).map((skill, i) => {
        const angle = (i / Math.min(activeSkills.length, 6)) * Math.PI * 2;
        const radius = 0.95 + (i % 2) * 0.15;
        return {
          skill,
          position: [
            Math.cos(angle) * radius,
            Math.sin(i * 0.9) * 0.2,
            Math.sin(angle) * radius,
          ] as [number, number, number],
        };
      }),
    [activeSkills]
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) groupRef.current.rotation.y = t * 0.08;
    if (innerRef.current) innerRef.current.rotation.y = -t * 0.15;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[0.16, 1]} />
        <meshStandardMaterial
          color="#f97316"
          emissive="#ea580c"
          emissiveIntensity={0.75}
          metalness={0.5}
          roughness={0.3}
        />
      </mesh>

      {[1.85, 1.15].map((r, ri) => (
        <mesh key={r} rotation={[Math.PI / 2, 0, ri * 0.4]}>
          <torusGeometry args={[r, 0.012, 6, 64]} />
          <meshBasicMaterial
            color={ri === 0 ? "#f97316" : "#a78bfa"}
            transparent
            opacity={0.2}
          />
        </mesh>
      ))}

      {nodes.map((node) => (
        <CategoryOrb
          key={node.id}
          position={node.position}
          color={node.color}
          emissive={node.emissive}
          active={activeId === node.id}
          label={node.label}
        />
      ))}

      <group ref={innerRef}>
        {techNodes.map((node, i) => (
          <TechIconOrb
            key={node.skill}
            skill={node.skill}
            position={node.position}
            index={i}
          />
        ))}
      </group>
    </group>
  );
}

interface SkillsOrbit3DProps {
  categories: SkillOrbitCategory[];
  activeId: string;
  activeSkills: string[];
  className?: string;
}

export function SkillsOrbit3D({
  categories,
  activeId,
  activeSkills,
  className,
}: SkillsOrbit3DProps) {
  const { enableSkills3D, canvasDpr } = useVisualPerformance();
  const { ref, inView } = useInViewport<HTMLDivElement>({ rootMargin: "160px" });

  if (!enableSkills3D) return null;

  return (
    <div
      ref={ref}
      className={cn("relative w-full h-full min-h-[280px]", className)}
      aria-hidden="true"
    >
      {inView && (
        <Canvas
          camera={{ position: [0, 0.6, 4.5], fov: 40 }}
          dpr={canvasDpr}
          gl={{ alpha: true, antialias: false, powerPreference: "default" }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[3, 4, 2]} intensity={1.2} color="#fdba74" />
          <pointLight position={[-2, -1, 3]} intensity={0.5} color="#a78bfa" />
          <SkillsScene
            categories={categories}
            activeId={activeId}
            activeSkills={activeSkills}
          />
        </Canvas>
      )}
    </div>
  );
}

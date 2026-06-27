"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Text } from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion } from "framer-motion";

const nodes = [
  { label: "Next.js / React UI", position: [0, 2.2, 0] as [number, number, number], color: "#818cf8" },
  { label: "Node.js / .NET / FastAPI", position: [0, 0.8, 0] as [number, number, number], color: "#22d3ee" },
  { label: "LLM / RAG / MCP", position: [0, -0.6, 0] as [number, number, number], color: "#a78bfa" },
  { label: "Kafka / Redis", position: [0, -2, 0] as [number, number, number], color: "#f472b6" },
  { label: "SQL / Supabase / Docker", position: [0, -3.4, 0] as [number, number, number], color: "#34d399" },
];

function ArchitectureNode({
  label,
  position,
  color,
}: {
  label: string;
  position: [number, number, number];
  color: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.3 + position[1]) * 0.08;
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <boxGeometry args={[2.8, 0.55, 0.15]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.15}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <mesh>
        <boxGeometry args={[2.82, 0.57, 0.17]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.35} />
      </mesh>
      <Text
        position={[0, 0, 0.1]}
        fontSize={0.18}
        color="#e4e4e7"
        anchorX="center"
        anchorY="middle"
        maxWidth={2.6}
      >
        {label}
      </Text>
    </group>
  );
}

function ConnectionLines() {
  const points = nodes.map((n) => new THREE.Vector3(...n.position));

  return (
    <>
      {points.slice(0, -1).map((start, i) => {
        const end = points[i + 1];
        const midY = (start.y + end.y) / 2;
        const linePoints: [number, number, number][] = [
          [start.x, start.y - 0.3, start.z],
          [start.x, midY, start.z],
          [end.x, midY, end.z],
          [end.x, end.y + 0.3, end.z],
        ];
        return (
          <Line
            key={`line-${i}`}
            points={linePoints}
            color="#6366f1"
            lineWidth={1}
            transparent
            opacity={0.4}
          />
        );
      })}
    </>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#818cf8" />
      <pointLight position={[-5, -5, 3]} intensity={0.4} color="#22d3ee" />
      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.3}>
        <group>
          {nodes.map((node) => (
            <ArchitectureNode key={node.label} {...node} />
          ))}
          <ConnectionLines />
        </group>
      </Float>
    </>
  );
}

export function ArchitectureDiagram() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div
        className="w-full h-full flex flex-col items-center justify-center gap-3 p-6"
        aria-label="System architecture diagram"
      >
        {nodes.map((node, i) => (
          <div key={node.label} className="flex flex-col items-center gap-2">
            <div
              className="px-4 py-2 rounded-lg text-xs font-mono text-zinc-300 border border-white/10 bg-white/5"
              style={{ borderColor: `${node.color}40` }}
            >
              {node.label}
            </div>
            {i < nodes.length - 1 && (
              <span className="text-zinc-600" aria-hidden="true">
                ↓
              </span>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] md:h-[480px]" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

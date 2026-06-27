"use client";

import {
  motion,
  useSpring,
  useReducedMotion,
  type MotionStyle,
} from "framer-motion";
import { useRef, type ReactNode, type PointerEvent } from "react";
import { cn } from "@/lib/utils";

interface Tilt3DProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  intensity?: number;
}

export function Tilt3D({
  children,
  className,
  innerClassName,
  intensity = 14,
}: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const rotateX = useSpring(0, { stiffness: 260, damping: 28 });
  const rotateY = useSpring(0, { stiffness: 260, damping: 28 });

  const handlePointer = (clientX: number, clientY: number) => {
    if (!ref.current || prefersReducedMotion) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width - 0.5;
    const y = (clientY - rect.top) / rect.height - 0.5;
    rotateY.set(x * intensity);
    rotateX.set(-y * intensity);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    handlePointer(e.clientX, e.clientY);
  };

  const motionStyle: MotionStyle = prefersReducedMotion
    ? {}
    : {
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      };

  return (
    <div
      ref={ref}
      className={cn("[perspective:1200px]", className)}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
    >
      <motion.div style={motionStyle} className={cn("will-change-transform", innerClassName)}>
        {children}
      </motion.div>
    </div>
  );
}

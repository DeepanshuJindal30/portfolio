"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface VisualPerformanceState {
  /** Lightweight 3D (skills orbit) — desktop only */
  enable3D: boolean;
  /** Hero 3D character — desktop + mobile */
  enableHero3D: boolean;
  /** Skills 3D orbit — desktop + mobile */
  enableSkills3D: boolean;
  canvasDpr: number | [number, number];
  isMobile: boolean;
  reducedEffects: boolean;
}

function computeVisualState(prefersReducedMotion: boolean | null) {
  if (typeof window === "undefined") {
    return {
      enable3D: false,
      enableHero3D: false,
      enableSkills3D: false,
      canvasDpr: 1 as number | [number, number],
      isMobile: true,
      reducedEffects: true,
    };
  }

  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  const connection = (
    navigator as Navigator & { connection?: { saveData?: boolean } }
  ).connection;
  const saveData = connection?.saveData ?? false;
  const lowCores = (navigator.hardwareConcurrency ?? 8) <= 4;
  const enableHero3D = !prefersReducedMotion && !saveData;
  const enable3D = enableHero3D && !isMobile && !lowCores;

  return {
    enable3D,
    enableHero3D,
    enableSkills3D: enableHero3D,
    canvasDpr: (isMobile ? 1 : enable3D ? [1, 1.25] : 1) as
      | number
      | [number, number],
    isMobile,
    reducedEffects: Boolean(prefersReducedMotion) || isMobile,
  };
}

export function useVisualPerformance(): VisualPerformanceState {
  const prefersReducedMotion = useReducedMotion();
  const [state, setState] = useState<VisualPerformanceState>(() =>
    computeVisualState(prefersReducedMotion)
  );

  useEffect(() => {
    setState(computeVisualState(prefersReducedMotion));
  }, [prefersReducedMotion]);

  return state;
}

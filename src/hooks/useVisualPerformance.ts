"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface VisualPerformanceState {
  /** Lightweight 3D (skills orbit) — desktop only */
  enable3D: boolean;
  /** Hero 3D character — desktop + mobile */
  enableHero3D: boolean;
  canvasDpr: number | [number, number];
  isMobile: boolean;
  reducedEffects: boolean;
}

export function useVisualPerformance(): VisualPerformanceState {
  const prefersReducedMotion = useReducedMotion();
  const [state, setState] = useState<VisualPerformanceState>({
    enable3D: false,
    enableHero3D: false,
    canvasDpr: 1,
    isMobile: true,
    reducedEffects: true,
  });

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    const saveData = connection?.saveData ?? false;
    const lowCores = (navigator.hardwareConcurrency ?? 8) <= 4;
    const enableHero3D = !prefersReducedMotion && !saveData;
    const enable3D =
      enableHero3D && !isMobile && !lowCores;

    setState({
      enable3D,
      enableHero3D,
      canvasDpr: isMobile ? 1 : enable3D ? [1, 1.25] : 1,
      isMobile,
      reducedEffects: prefersReducedMotion || isMobile,
    });
  }, [prefersReducedMotion]);

  return state;
}

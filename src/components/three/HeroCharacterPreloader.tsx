"use client";

import { useEffect } from "react";
import { preloadCharacterModel } from "@/lib/characterModelCache";

/** Starts model fetch/decrypt and the Three.js chunk as soon as the hero mounts. */
export function HeroCharacterPreloader() {
  useEffect(() => {
    void preloadCharacterModel();
    void import("@/components/three/HeroDeveloperCharacter");
  }, []);

  return null;
}

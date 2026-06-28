"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { cn, withBasePath } from "@/lib/utils";
import { preloadCharacterModel } from "@/lib/characterModelCache";
import {
  applyHeadRotation,
  setupCharacterAnimations,
} from "./character/characterAnimations";
import {
  prepareCharacterMeshes,
  updateDeskReveal,
  type CharacterSceneRefs,
} from "./character/characterSceneSetup";

interface HeroDeveloperCharacterProps {
  onToggle: () => void;
  onLoadError?: () => void;
  onReady?: () => void;
  className?: string;
}

export function HeroDeveloperCharacter({
  onToggle,
  onLoadError,
  onReady,
  className,
}: HeroDeveloperCharacterProps) {
  const canvasHostRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef<HTMLDivElement>(null);
  const rimRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const onLoadErrorRef = useRef(onLoadError);
  const onReadyRef = useRef(onReady);
  onLoadErrorRef.current = onLoadError;
  onReadyRef.current = onReady;

  useEffect(() => {
    const host = canvasHostRef.current;
    if (!host) return;

    let disposed = false;
    let animationId = 0;
    let unbindHover: (() => void) | undefined;
    let deskRevealProgress = 0;
    let deskRevealActive = false;
    let headTrackingEnabled = false;
    let screenFlicker = 0;

    const scene = new THREE.Scene();
    const getSize = () => host.getBoundingClientRect();

    const isMobileView = window.matchMedia("(max-width: 767px)").matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: !isMobileView && window.devicePixelRatio < 2,
        powerPreference: isMobileView ? "default" : "high-performance",
      });
    } catch {
      failLoadEarly();
      return;
    }

    function failLoadEarly() {
      if (disposed) return;
      setError(true);
      setLoading(false);
      onLoadErrorRef.current?.();
    }
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.domElement.style.pointerEvents = "none";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    host.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(14.5, 1, 0.1, 1000);
    camera.position.set(0, 13.1, 24.7);
    camera.zoom = 1.05;

    const resizeRenderer = () => {
      const next = getSize();
      if (next.width < 2 || next.height < 2) return;
      renderer.setSize(next.width, next.height);
      renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, isMobileView ? 1 : 2)
      );
      camera.aspect = next.width / next.height;
      camera.updateProjectionMatrix();
    };

    const resizeObserver = new ResizeObserver(resizeRenderer);
    resizeRenderer();
    resizeObserver.observe(host);

    const directionalLight = new THREE.DirectionalLight(0xffa366, 0);
    directionalLight.position.set(-0.47, -0.32, -1);
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, isMobileView ? 0.45 : 0);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xf97316, 0, 100, 3);
    pointLight.position.set(3, 12, 4);
    scene.add(pointLight);

    if (!isMobileView) {
      new RGBELoader()
        .setPath(withBasePath("/models/"))
        .load(
          "char_enviorment.hdr",
          (texture) => {
            if (disposed) return;
            texture.mapping = THREE.EquirectangularReflectionMapping;
            scene.environment = texture;
            scene.environmentIntensity = 0;
            scene.environmentRotation.set(5.76, 85.85, 1);
          },
          undefined,
          () => {
            /* HDR optional — scene still renders without it */
          }
        );
    }

    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(withBasePath("/draco/"));
    loader.setDRACOLoader(dracoLoader);

    const clock = new THREE.Clock();
    let mixer: THREE.AnimationMixer | undefined;
    let headBone: THREE.Object3D | null = null;
    let character: THREE.Object3D | null = null;
    let sceneRefs: CharacterSceneRefs = {
      monitor: null,
      screenLight: null,
      neckBone: null,
    };
    const mouse = { x: 0, y: 0 };

    const fadeLights = (targetEnv: number, targetDir: number, ms: number) => {
      const startEnv = scene.environmentIntensity;
      const startDir = directionalLight.intensity;
      const start = performance.now();
      const step = (now: number) => {
        if (disposed) return;
        const t = Math.min((now - start) / ms, 1);
        scene.environmentIntensity = THREE.MathUtils.lerp(
          startEnv,
          targetEnv,
          t
        );
        directionalLight.intensity = THREE.MathUtils.lerp(
          startDir,
          targetDir,
          t
        );
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const turnOnLights = () => {
      fadeLights(0.64, 1, 1800);
      if (rimRef.current) {
        rimRef.current.style.opacity = "1";
        rimRef.current.style.transform = "translate(-50%, 52%) scale(1.35)";
      }
    };

    const onPointerMove = (event: PointerEvent | TouchEvent) => {
      const clientX =
        "touches" in event && event.touches[0]
          ? event.touches[0].clientX
          : (event as PointerEvent).clientX;
      const clientY =
        "touches" in event && event.touches[0]
          ? event.touches[0].clientY
          : (event as PointerEvent).clientY;
      mouse.x = (clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });

    const scheduleTimeline = (
      animations: ReturnType<typeof setupCharacterAnimations>
    ) => {
      const introDelay = isMobileView ? 200 : 600;
      const typingDelay = isMobileView ? 1200 : 2800;
      const deskDelay = isMobileView ? 2200 : 4800;

      setTimeout(() => {
        if (disposed) return;
        turnOnLights();
        animations.playIntro();
      }, introDelay);

      setTimeout(() => {
        if (disposed) return;
        headTrackingEnabled = true;
        animations.startTyping();
      }, typingDelay);

      setTimeout(() => {
        if (disposed) return;
        deskRevealActive = true;
      }, deskDelay);
    };

    const failLoad = () => {
      if (disposed) return;
      setError(true);
      setLoading(false);
      onLoadErrorRef.current?.();
    };

    (async () => {
      try {
        const encrypted = await preloadCharacterModel();
        if (disposed) return;

        const blobUrl = URL.createObjectURL(new Blob([encrypted]));
        loader.load(
          blobUrl,
          async (gltf) => {
            if (disposed) return;
            URL.revokeObjectURL(blobUrl);

            character = gltf.scene;
            character.traverse((child) => {
              if ((child as THREE.Mesh).isMesh) {
                const mesh = child as THREE.Mesh;
                mesh.castShadow = false;
                mesh.receiveShadow = false;
                mesh.frustumCulled = true;
              }
            });

            sceneRefs = prepareCharacterMeshes(character);
            scene.add(character);
            headBone = character.getObjectByName("spine006") ?? null;
            const footR = character.getObjectByName("footR");
            const footL = character.getObjectByName("footL");
            if (footR) footR.position.y = 3.36;
            if (footL) footL.position.y = 3.36;

            const animations = setupCharacterAnimations(gltf);
            mixer = animations.mixer;
            if (hoverRef.current) {
              unbindHover = animations.bindHover(hoverRef.current);
            }

            try {
              if (typeof renderer.compileAsync === "function") {
                await renderer.compileAsync(character, camera, scene);
              }
            } catch {
              /* compileAsync optional on older mobile GPUs */
            }
            resizeRenderer();
            setLoading(false);
            onReadyRef.current?.();
            scheduleTimeline(animations);
            dracoLoader.dispose();
          },
          undefined,
          failLoad
        );
      } catch {
        failLoad();
      }
    })();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (deskRevealActive && deskRevealProgress < 1 && character) {
        deskRevealProgress = Math.min(deskRevealProgress + delta * 0.45, 1);
        updateDeskReveal(deskRevealProgress, sceneRefs, character);
      }

      if (headBone) {
        applyHeadRotation(
          headBone,
          mouse.x,
          mouse.y,
          THREE.MathUtils.lerp,
          headTrackingEnabled
        );
      }

      if (
        sceneRefs.screenLight?.material &&
        !Array.isArray(sceneRefs.screenLight.material)
      ) {
        const mat = sceneRefs.screenLight.material as THREE.MeshStandardMaterial;
        if (mat.opacity > 0.85) {
          screenFlicker = Math.random();
          mat.emissiveIntensity = screenFlicker * 8;
          pointLight.intensity = screenFlicker * 20;
        } else {
          pointLight.intensity = 0;
        }
      }

      mixer?.update(delta);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      disposed = true;
      cancelAnimationFrame(animationId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("touchmove", onPointerMove);
      resizeObserver?.disconnect();
      unbindHover?.();
      scene.clear();
      renderer.dispose();
      if (host.contains(renderer.domElement)) {
        host.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        "relative w-full h-full min-h-[340px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[520px] cursor-pointer overflow-hidden touch-manipulation",
        "rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        className
      )}
      aria-label="Switch to profile photo"
    >
      <div
        className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background via-background/90 to-transparent z-20 pointer-events-none"
        aria-hidden="true"
      />

      <div
        ref={rimRef}
        className="absolute top-[38%] left-1/2 w-[min(85%,300px)] aspect-square rounded-full opacity-0 transition-all duration-1000 pointer-events-none z-0 hero-rim-glow"
        aria-hidden="true"
      />

      <div ref={canvasHostRef} className="absolute inset-0 z-10 hero-canvas-host" aria-hidden="true" />

      <div
        ref={hoverRef}
        className="absolute top-[16%] left-1/2 -translate-x-1/2 w-36 h-36 sm:w-44 sm:h-44 z-[15] rounded-full"
        aria-hidden="true"
      />

      {loading && !error && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-3 bg-background/40 backdrop-blur-sm">
          <div className="h-10 w-10 rounded-full border-2 border-accent/30 border-t-accent animate-spin" />
          <p className="text-xs text-stone-400 font-mono">Loading 3D dev...</p>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 z-30 flex items-center justify-center text-xs text-stone-400 px-4 text-center">
          3D character failed to load. Click to show profile photo.
        </div>
      )}

      {!loading && !error && (
        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 px-2.5 py-0.5 rounded-full bg-zinc-950/70 border border-white/10 text-[9px] font-mono text-stone-500 uppercase tracking-wider opacity-70">
          Click for photo
        </span>
      )}
    </button>
  );
}

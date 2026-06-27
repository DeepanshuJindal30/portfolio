"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { cn, withBasePath } from "@/lib/utils";
import { decryptModelFile } from "@/lib/decryptModel";
import {
  applyHeadRotation,
  setupCharacterAnimations,
} from "./character/characterAnimations";
import {
  prepareCharacterMeshes,
  updateDeskReveal,
  type CharacterSceneRefs,
} from "./character/characterSceneSetup";
import { HeroSkillDesk } from "./HeroSkillDesk";

interface HeroDeveloperCharacterProps {
  onToggle: () => void;
  className?: string;
}

type ScenePhase = "loading" | "intro" | "tracking" | "desk" | "ready";

export function HeroDeveloperCharacter({
  onToggle,
  className,
}: HeroDeveloperCharacterProps) {
  const containerRef = useRef<HTMLButtonElement>(null);
  const canvasHostRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef<HTMLDivElement>(null);
  const rimRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [phase, setPhase] = useState<ScenePhase>("loading");
  const [showDesk, setShowDesk] = useState(false);

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
    const initial = getSize();

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: window.devicePixelRatio < 2,
      powerPreference: "high-performance",
    });
    renderer.setSize(initial.width, initial.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.domElement.style.pointerEvents = "none";
    host.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(
      14.5,
      initial.width / initial.height,
      0.1,
      1000
    );
    camera.position.set(0, 13.1, 24.7);
    camera.zoom = 1.05;
    camera.updateProjectionMatrix();

    const directionalLight = new THREE.DirectionalLight(0xffa366, 0);
    directionalLight.position.set(-0.47, -0.32, -1);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xf97316, 0, 100, 3);
    pointLight.position.set(3, 12, 4);
    scene.add(pointLight);

    new RGBELoader()
      .setPath(withBasePath("/models/"))
      .load("char_enviorment.hdr", (texture) => {
        if (disposed) return;
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;
        scene.environmentIntensity = 0;
        scene.environmentRotation.set(5.76, 85.85, 1);
      });

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
    let deskRevealed = false;
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
        rimRef.current.style.transform =
          "translate(-50%, 52%) scale(1.35)";
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const onResize = () => {
      const next = getSize();
      renderer.setSize(next.width, next.height);
      camera.aspect = next.width / next.height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("resize", onResize);

    const scheduleTimeline = (animations: ReturnType<typeof setupCharacterAnimations>) => {
      setPhase("intro");
      setTimeout(() => {
        if (disposed) return;
        turnOnLights();
        animations.playIntro();
      }, 600);

      setTimeout(() => {
        if (disposed) return;
        setPhase("tracking");
        headTrackingEnabled = true;
        animations.startTyping();
      }, 2800);

      setTimeout(() => {
        if (disposed) return;
        setPhase("desk");
        deskRevealActive = true;
      }, 4800);
    };

    (async () => {
      try {
        const encrypted = await decryptModelFile(
          withBasePath("/models/character.enc"),
          "Character3D#@"
        );
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
            character.getObjectByName("footR")!.position.y = 3.36;
            character.getObjectByName("footL")!.position.y = 3.36;

            const animations = setupCharacterAnimations(gltf);
            mixer = animations.mixer;
            if (hoverRef.current) {
              unbindHover = animations.bindHover(hoverRef.current);
            }

            await renderer.compileAsync(character, camera, scene);
            setLoading(false);
            scheduleTimeline(animations);
            dracoLoader.dispose();
          },
          undefined,
          () => {
            if (!disposed) {
              setError(true);
              setLoading(false);
            }
          }
        );
      } catch {
        if (!disposed) {
          setError(true);
          setLoading(false);
        }
      }
    })();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (deskRevealActive && deskRevealProgress < 1 && character) {
        deskRevealProgress = Math.min(deskRevealProgress + delta * 0.45, 1);
        updateDeskReveal(deskRevealProgress, sceneRefs, character);
        if (deskRevealProgress >= 1 && !deskRevealed) {
          deskRevealed = true;
          setPhase("ready");
          setShowDesk(true);
        }
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
      window.removeEventListener("resize", onResize);
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
      ref={containerRef}
      onClick={onToggle}
      className={cn(
        "relative w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] cursor-pointer overflow-hidden",
        "rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        className
      )}
      aria-label="Switch to profile photo"
    >
      <div
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent z-30 pointer-events-none"
        aria-hidden="true"
      />

      <div
        ref={rimRef}
        className="absolute top-[42%] left-1/2 w-[min(90%,320px)] aspect-square rounded-full opacity-0 transition-all duration-1000 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.5) 0%, rgba(234,88,12,0.15) 55%, transparent 72%)",
          transform: "translate(-50%, 100%) scale(1.35)",
          filter: "blur(48px)",
        }}
        aria-hidden="true"
      />

      <div
        ref={canvasHostRef}
        className="absolute inset-0 z-10"
        style={{ bottom: "-8%" }}
        aria-hidden="true"
      />

      <div
        ref={hoverRef}
        className="absolute top-[18%] left-1/2 -translate-x-1/2 w-40 h-40 sm:w-48 sm:h-48 z-20 rounded-full"
        aria-hidden="true"
      />

      <HeroSkillDesk visible={showDesk} />

      {loading && !error && (
        <div className="absolute inset-0 z-40 flex flex-col items-center justify-center gap-3 bg-background/40 backdrop-blur-sm">
          <div className="h-10 w-10 rounded-full border-2 border-accent/30 border-t-accent animate-spin" />
          <p className="text-xs text-stone-400 font-mono">Loading 3D dev...</p>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 z-40 flex items-center justify-center text-xs text-stone-400 px-4 text-center">
          3D character failed to load. Click to show profile photo.
        </div>
      )}

      {!loading && !error && (
        <span className="absolute top-3 left-1/2 -translate-x-1/2 z-40 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-[10px] font-mono text-accent-muted uppercase tracking-wider whitespace-nowrap">
          {phase === "intro" && "Welcome..."}
          {phase === "tracking" && "Move cursor — I follow you"}
          {(phase === "desk" || phase === "ready") && "Desk ready"}
        </span>
      )}

      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 z-40 px-3 py-1 rounded-full bg-zinc-900/80 border border-white/10 text-[10px] font-mono text-stone-400 uppercase tracking-wider whitespace-nowrap">
        Click for photo
      </span>
    </button>
  );
}

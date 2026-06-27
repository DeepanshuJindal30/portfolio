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
  pointerToNormalized,
  setupCharacterAnimations,
} from "./character/characterAnimations";

interface HeroDeveloperCharacterProps {
  onToggle: () => void;
  className?: string;
}

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

  useEffect(() => {
    const host = canvasHostRef.current;
    if (!host) return;

    let disposed = false;
    let animationId = 0;
    let unbindHover: (() => void) | undefined;

    const scene = new THREE.Scene();
    const rect = host.getBoundingClientRect();
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: window.devicePixelRatio < 2,
      powerPreference: "high-performance",
    });
    renderer.setSize(rect.width, rect.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    host.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(
      14.5,
      rect.width / rect.height,
      0.1,
      1000
    );
    camera.position.set(0, 13.1, 24.7);
    camera.zoom = 1.1;
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
    let screenLight: THREE.Object3D | null = null;
    let mouse = { x: 0, y: 0 };
    let isHovering = false;

    const turnOnLights = () => {
      scene.environmentIntensity = 0.64;
      directionalLight.intensity = 1;
      if (rimRef.current) {
        rimRef.current.style.opacity = "1";
        rimRef.current.style.transform =
          "translate(-50%, 55%) scale(1.4)";
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      const bounds = containerRef.current?.getBoundingClientRect();
      if (!bounds) return;
      isHovering =
        event.clientX >= bounds.left &&
        event.clientX <= bounds.right &&
        event.clientY >= bounds.top &&
        event.clientY <= bounds.bottom;
      if (isHovering) {
        mouse = pointerToNormalized(
          event.clientX,
          event.clientY,
          bounds
        );
      }
    };

    const onResize = () => {
      if (!host) return;
      const next = host.getBoundingClientRect();
      renderer.setSize(next.width, next.height);
      camera.aspect = next.width / next.height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("resize", onResize);

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

            const character = gltf.scene;
            character.traverse((child) => {
              if ((child as THREE.Mesh).isMesh) {
                const mesh = child as THREE.Mesh;
                mesh.castShadow = false;
                mesh.receiveShadow = false;
                mesh.frustumCulled = true;
              }
            });

            scene.add(character);
            headBone = character.getObjectByName("spine006") ?? null;
            screenLight = character.getObjectByName("screenlight") ?? null;
            character.getObjectByName("footR")!.position.y = 3.36;
            character.getObjectByName("footL")!.position.y = 3.36;

            const animations = setupCharacterAnimations(gltf);
            mixer = animations.mixer;
            if (hoverRef.current) {
              unbindHover = animations.bindHover(hoverRef.current);
            }

            await renderer.compileAsync(character, camera, scene);
            setLoading(false);
            setTimeout(() => {
              turnOnLights();
              animations.playIntro();
            }, 400);

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
      if (headBone && isHovering) {
        applyHeadRotation(headBone, mouse.x, mouse.y, THREE.MathUtils.lerp);
      } else if (headBone) {
        applyHeadRotation(headBone, 0, 0, THREE.MathUtils.lerp);
      }
      if (
        screenLight &&
        (screenLight as THREE.Mesh).material &&
        !Array.isArray((screenLight as THREE.Mesh).material)
      ) {
        const mat = (screenLight as THREE.Mesh).material as THREE.MeshStandardMaterial;
        pointLight.intensity =
          mat.opacity > 0.9 ? mat.emissiveIntensity * 20 : 0;
      }
      const delta = clock.getDelta();
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
        "relative w-full h-full min-h-[280px] sm:min-h-[320px] cursor-pointer",
        "rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        className
      )}
      aria-label="Switch back to profile photo"
    >
      <div
        ref={rimRef}
        className="absolute top-1/2 left-1/2 w-[70%] max-w-[280px] aspect-square rounded-full opacity-0 transition-all duration-700 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.55) 0%, rgba(234,88,12,0.2) 55%, transparent 70%)",
          transform: "translate(-50%, 100%) scale(1.4)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />
      <div
        ref={canvasHostRef}
        className="absolute inset-0 z-10"
        aria-hidden="true"
      />
      <div
        ref={hoverRef}
        className="absolute inset-[18%] z-20 rounded-full"
        aria-hidden="true"
      />
      {loading && !error && (
        <div className="absolute inset-0 z-30 flex items-center justify-center">
          <div className="h-10 w-10 rounded-full border-2 border-accent/30 border-t-accent animate-spin" />
        </div>
      )}
      {error && (
        <div className="absolute inset-0 z-30 flex items-center justify-center text-xs text-stone-400 px-4 text-center">
          3D character failed to load. Click to return to photo.
        </div>
      )}
      <span className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-[10px] font-mono text-accent-muted uppercase tracking-wider whitespace-nowrap">
        Click for photo
      </span>
    </button>
  );
}

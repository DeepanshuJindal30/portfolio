"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { cn, withBasePath } from "@/lib/utils";

interface CartoonHeroCharacterProps {
  onToggle: () => void;
  onLoadError?: () => void;
  onReady?: () => void;
  className?: string;
}

const PREFERRED_CLIPS = [
  "Idle",
  "idle",
  "Idle_A",
  "Idle_B",
  "Cheer",
  "cheer",
  "Wave",
  "wave",
  "Happy_Idle",
];

function pickAnimationClip(clips: THREE.AnimationClip[]) {
  if (!clips.length) return null;
  for (const name of PREFERRED_CLIPS) {
    const found = THREE.AnimationClip.findByName(clips, name);
    if (found) return found;
  }
  const soft = clips.find((c) =>
    /idle|cheer|wave|happy|stand/i.test(c.name)
  );
  return soft ?? clips[0];
}

function findHeadBone(root: THREE.Object3D): THREE.Object3D | null {
  const names = [
    "Head",
    "head",
    "mixamorigHead",
    "HeadTop_End",
    "spine006",
    "DEF-head",
  ];
  for (const name of names) {
    const bone = root.getObjectByName(name);
    if (bone) return bone;
  }
  let found: THREE.Object3D | null = null;
  root.traverse((obj) => {
    if (found) return;
    if (/head/i.test(obj.name) && (obj as THREE.Bone).isBone) {
      found = obj;
    }
  });
  return found;
}

function fitCameraToObject(
  camera: THREE.PerspectiveCamera,
  object: THREE.Object3D,
  offset = 1.35
) {
  const box = new THREE.Box3().setFromObject(object);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const maxDim = Math.max(size.x, size.y, size.z) || 1;
  const fov = THREE.MathUtils.degToRad(camera.fov);
  let distance = (maxDim / (2 * Math.tan(fov / 2))) * offset;
  distance = Math.max(distance, maxDim * 1.6);

  camera.position.set(center.x, center.y + size.y * 0.05, center.z + distance);
  camera.near = Math.max(0.05, distance / 100);
  camera.far = distance * 20;
  camera.lookAt(center.x, center.y + size.y * 0.05, center.z);
  camera.updateProjectionMatrix();
  return { center, size, distance };
}

export function CartoonHeroCharacter({
  onToggle,
  onLoadError,
  onReady,
  className,
}: CartoonHeroCharacterProps) {
  const canvasHostRef = useRef<HTMLDivElement>(null);
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
    let mixer: THREE.AnimationMixer | null = null;
    let character: THREE.Object3D | null = null;
    let headBone: THREE.Object3D | null = null;
    let baseY = 0;
    let useProceduralIdle = false;

    const mouse = { x: 0, y: 0 };
    const clock = new THREE.Clock();
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
      setError(true);
      setLoading(false);
      onLoadErrorRef.current?.();
      return;
    }

    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.domElement.style.pointerEvents = "none";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    host.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(32, 1, 0.05, 100);

    const resizeRenderer = () => {
      const next = getSize();
      if (next.width < 2 || next.height < 2) return;
      renderer.setSize(next.width, next.height);
      renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, isMobileView ? 1 : 1.75)
      );
      camera.aspect = next.width / next.height;
      camera.updateProjectionMatrix();
    };

    const resizeObserver = new ResizeObserver(resizeRenderer);
    resizeRenderer();
    resizeObserver.observe(host);

    const hemi = new THREE.HemisphereLight(0xfff0e0, 0x2a1810, 0.85);
    scene.add(hemi);

    const key = new THREE.DirectionalLight(0xffb070, 1.35);
    key.position.set(2.5, 4.5, 3.5);
    scene.add(key);

    const rim = new THREE.DirectionalLight(0xf97316, 0.75);
    rim.position.set(-3, 2, -2);
    scene.add(rim);

    const fill = new THREE.PointLight(0xffedd5, 0.55, 20);
    fill.position.set(0, 2.2, 3);
    scene.add(fill);

    const failLoad = () => {
      if (disposed) return;
      setError(true);
      setLoading(false);
      onLoadErrorRef.current?.();
    };

    const loader = new GLTFLoader();
    loader.load(
      withBasePath("/models/cartoon-hero.glb"),
      (gltf) => {
        if (disposed) return;

        character = gltf.scene;
        character.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = false;
            mesh.receiveShadow = false;
            mesh.frustumCulled = true;
            if (mesh.material) {
              const mats = Array.isArray(mesh.material)
                ? mesh.material
                : [mesh.material];
              mats.forEach((m) => {
                m.side = THREE.FrontSide;
                if ("envMapIntensity" in m) {
                  (m as THREE.MeshStandardMaterial).envMapIntensity = 0.35;
                }
              });
            }
          }
        });

        // Center on origin
        const box = new THREE.Box3().setFromObject(character);
        const center = box.getCenter(new THREE.Vector3());
        character.position.sub(center);
        character.position.y -= box.min.y - center.y;

        scene.add(character);
        baseY = character.position.y;
        headBone = findHeadBone(character);
        fitCameraToObject(camera, character, isMobileView ? 1.55 : 1.4);

        mixer = new THREE.AnimationMixer(character);
        const clip = pickAnimationClip(gltf.animations);
        if (clip) {
          const action = mixer.clipAction(clip);
          action.reset().fadeIn(0.35).play();
          useProceduralIdle = false;
        } else {
          useProceduralIdle = true;
        }

        resizeRenderer();
        setLoading(false);
        onReadyRef.current?.();
      },
      undefined,
      failLoad
    );

    const onPointerMove = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      if (rect.width < 1 || rect.height < 1) return;
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const t = clock.elapsedTime;

      if (mixer) mixer.update(delta);

      if (character) {
        if (useProceduralIdle) {
          character.position.y = baseY + Math.sin(t * 1.4) * 0.04;
          character.rotation.y = Math.sin(t * 0.55) * 0.12;
        } else {
          character.position.y = baseY + Math.sin(t * 1.1) * 0.025;
        }

        if (headBone) {
          const maxY = 0.35;
          const maxX = 0.2;
          headBone.rotation.y = THREE.MathUtils.lerp(
            headBone.rotation.y,
            mouse.x * maxY,
            0.08
          );
          headBone.rotation.x = THREE.MathUtils.lerp(
            headBone.rotation.x,
            -mouse.y * maxX,
            0.08
          );
        } else if (!useProceduralIdle) {
          character.rotation.y = THREE.MathUtils.lerp(
            character.rotation.y,
            mouse.x * 0.35,
            0.06
          );
        }
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      disposed = true;
      cancelAnimationFrame(animationId);
      window.removeEventListener("pointermove", onPointerMove);
      resizeObserver.disconnect();
      mixer?.stopAllAction();
      if (character) {
        scene.remove(character);
        character.traverse((obj) => {
          const mesh = obj as THREE.Mesh;
          if (mesh.isMesh) {
            mesh.geometry?.dispose();
            const mats = Array.isArray(mesh.material)
              ? mesh.material
              : mesh.material
                ? [mesh.material]
                : [];
            mats.forEach((m) => m.dispose());
          }
        });
      }
      renderer.dispose();
      if (renderer.domElement.parentNode === host) {
        host.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (error) {
    return (
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          "flex h-full min-h-[340px] w-full items-center justify-center text-sm text-zinc-400",
          className
        )}
      >
        3D character failed to load. Click to show profile photo.
      </button>
    );
  }

  return (
    <div className={cn("relative h-full w-full min-h-[340px]", className)}>
      {loading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="h-10 w-10 rounded-full border-2 border-accent/30 border-t-accent animate-spin" />
        </div>
      )}
      <div
        ref={canvasHostRef}
        className="absolute inset-0"
        aria-hidden="true"
      />
      <button
        type="button"
        onClick={onToggle}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 px-3 py-1.5 rounded-full bg-black/50 border border-white/15 text-[10px] font-mono uppercase tracking-wider text-zinc-300 hover:text-white hover:border-accent/40 transition-colors"
        aria-label="Show profile photo"
      >
        Click for photo
      </button>
    </div>
  );
}

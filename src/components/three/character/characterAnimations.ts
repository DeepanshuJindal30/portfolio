import * as THREE from "three";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import { eyebrowBoneNames, typingBoneNames } from "./boneData";

function filterAnimationTracks(
  clip: THREE.AnimationClip,
  boneNames: string[]
): THREE.AnimationClip {
  const filteredTracks = clip.tracks.filter((track) =>
    boneNames.some((boneName) => track.name.includes(boneName))
  );
  return new THREE.AnimationClip(
    `${clip.name}_filtered`,
    clip.duration,
    filteredTracks
  );
}

function createBoneAction(
  gltf: GLTF,
  mixer: THREE.AnimationMixer,
  clipName: string,
  boneNames: string[]
): THREE.AnimationAction | null {
  const clip = THREE.AnimationClip.findByName(gltf.animations, clipName);
  if (!clip) return null;
  return mixer.clipAction(filterAnimationTracks(clip, boneNames));
}

export function setupCharacterAnimations(gltf: GLTF) {
  const mixer = new THREE.AnimationMixer(gltf.scene);

  const introClip = gltf.animations.find(
    (clip) => clip.name === "introAnimation"
  );
  if (introClip) {
    const introAction = mixer.clipAction(introClip);
    introAction.setLoop(THREE.LoopOnce, 1);
    introAction.clampWhenFinished = true;
    introAction.play();
  }

  ["key1", "key2", "key5", "key6"].forEach((name) => {
    const clip = THREE.AnimationClip.findByName(gltf.animations, name);
    if (clip) {
      const action = mixer.clipAction(clip);
      action.play();
      action.timeScale = 1.2;
    }
  });

  const typingAction = createBoneAction(
    gltf,
    mixer,
    "typing",
    typingBoneNames
  );
  if (typingAction) {
    typingAction.enabled = true;
    typingAction.play();
    typingAction.timeScale = 1.2;
  }

  function playIntro() {
    if (!introClip) return;
    const introAction = mixer.clipAction(introClip);
    introAction.clampWhenFinished = true;
    introAction.reset().play();
    setTimeout(() => {
      const blink = gltf.animations.find((clip) => clip.name === "Blink");
      if (blink) mixer.clipAction(blink).play().fadeIn(0.5);
    }, 2500);
  }

  function bindHover(hoverDiv: HTMLDivElement) {
    const eyeBrowUpAction = createBoneAction(
      gltf,
      mixer,
      "browup",
      eyebrowBoneNames
    );
    if (!eyeBrowUpAction) return;

    eyeBrowUpAction.setLoop(THREE.LoopOnce, 1);
    eyeBrowUpAction.clampWhenFinished = true;
    eyeBrowUpAction.enabled = true;

    let isHovering = false;
    const onEnter = () => {
      if (isHovering) return;
      isHovering = true;
      eyeBrowUpAction.reset();
      eyeBrowUpAction.enabled = true;
      eyeBrowUpAction.setEffectiveWeight(4);
      eyeBrowUpAction.fadeIn(0.5).play();
    };
    const onLeave = () => {
      if (!isHovering) return;
      isHovering = false;
      eyeBrowUpAction.fadeOut(0.6);
    };

    hoverDiv.addEventListener("mouseenter", onEnter);
    hoverDiv.addEventListener("mouseleave", onLeave);
    return () => {
      hoverDiv.removeEventListener("mouseenter", onEnter);
      hoverDiv.removeEventListener("mouseleave", onLeave);
    };
  }

  return { mixer, playIntro, bindHover };
}

export function applyHeadRotation(
  headBone: THREE.Object3D,
  mouseX: number,
  mouseY: number,
  lerp: (from: number, to: number, t: number) => number
) {
  const maxRotation = Math.PI / 6;
  headBone.rotation.y = lerp(
    headBone.rotation.y,
    mouseX * maxRotation,
    0.2
  );

  const minRotationX = -0.3;
  const maxRotationX = 0.4;
  let targetX: number;
  if (mouseY > minRotationX) {
    targetX =
      mouseY < maxRotationX
        ? -mouseY - 0.5 * maxRotation
        : -maxRotation - 0.5 * maxRotation;
  } else {
    targetX = -minRotationX - 0.5 * maxRotation;
  }
  headBone.rotation.x = lerp(headBone.rotation.x, targetX, 0.1);
}

export function pointerToNormalized(
  clientX: number,
  clientY: number,
  rect: DOMRect
) {
  const x = ((clientX - rect.left) / rect.width) * 2 - 1;
  const y = -(((clientY - rect.top) / rect.height) * 2 - 1);
  return { x, y };
}

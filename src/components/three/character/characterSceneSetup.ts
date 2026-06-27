import * as THREE from "three";

export interface CharacterSceneRefs {
  monitor: THREE.Mesh | null;
  screenLight: THREE.Mesh | null;
  neckBone: THREE.Object3D | null;
}

export function prepareCharacterMeshes(
  character: THREE.Object3D
): CharacterSceneRefs {
  let monitor: THREE.Mesh | null = null;
  let screenLight: THREE.Mesh | null = null;

  character.children.forEach((object) => {
    if (object.name === "Plane004") {
      object.children.forEach((child) => {
        const mesh = child as THREE.Mesh;
        const material = mesh.material;
        if (!material || Array.isArray(material)) return;
        const mat = material as THREE.MeshStandardMaterial;
        mat.transparent = true;
        mat.opacity = 0;
        if (mat.name === "Material.027") {
          monitor = mesh;
          mat.color.set("#ffffff");
          mesh.position.y = -10;
          mesh.position.z = 2;
        }
      });
    }
    if (object.name === "screenlight") {
      const mesh = object as THREE.Mesh;
      const material = mesh.material;
      if (!material || Array.isArray(material)) return;
      const mat = material as THREE.MeshStandardMaterial;
      mat.transparent = true;
      mat.opacity = 0;
      mat.emissive.set("#f97316");
      screenLight = mesh;
    }
  });

  const neckBone = character.getObjectByName("spine005") ?? null;

  return { monitor, screenLight, neckBone };
}

export function updateDeskReveal(
  progress: number,
  refs: CharacterSceneRefs,
  character: THREE.Object3D
) {
  const t = THREE.MathUtils.clamp(progress, 0, 1);
  const eased = 1 - Math.pow(1 - t, 3);

  if (refs.monitor?.material && !Array.isArray(refs.monitor.material)) {
    const mat = refs.monitor.material as THREE.MeshStandardMaterial;
    mat.opacity = eased;
    refs.monitor.position.y = THREE.MathUtils.lerp(-10, 0, eased);
    refs.monitor.position.z = THREE.MathUtils.lerp(2, 0, eased);
  }

  if (refs.screenLight?.material && !Array.isArray(refs.screenLight.material)) {
    const mat = refs.screenLight.material as THREE.MeshStandardMaterial;
    mat.opacity = eased;
  }

  character.rotation.y = THREE.MathUtils.lerp(0, 0.42, eased);
  character.rotation.x = THREE.MathUtils.lerp(0, 0.08, eased);

  if (refs.neckBone) {
    refs.neckBone.rotation.x = THREE.MathUtils.lerp(0, 0.45, eased);
  }
}

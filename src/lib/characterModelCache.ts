import { decryptModelFile } from "@/lib/decryptModel";
import { withBasePath } from "@/lib/utils";

let cachedModel: ArrayBuffer | null = null;
let loadPromise: Promise<ArrayBuffer> | null = null;

/** Fetch + decrypt the hero character model once; safe to call multiple times. */
export function preloadCharacterModel(): Promise<ArrayBuffer> {
  if (cachedModel) return Promise.resolve(cachedModel);
  if (!loadPromise) {
    loadPromise = decryptModelFile(
      withBasePath("/models/character.enc"),
      "Character3D#@"
    )
      .then((buffer) => {
        cachedModel = buffer;
        return buffer;
      })
      .catch((err) => {
        loadPromise = null;
        throw err;
      });
  }
  return loadPromise;
}

export function getCachedCharacterModel(): ArrayBuffer | null {
  return cachedModel;
}

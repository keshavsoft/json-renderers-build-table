export async function loadBuildSpecElement() {
  let buildSpecElement = null;

  try {
    const localMod = await import("../../../dist/min.js");
    buildSpecElement = localMod.buildSpecElement || localMod.default;
  } catch (error) {
    try {
      const cdnMod = await import("https://keshavsoft.github.io/json-to-tag/dist/min.js");
      buildSpecElement = cdnMod.buildSpecElement || cdnMod.default;
    } catch (cdnError) {
      try {
        const v9Mod = await import("../../../dist/v9/min.js");
        buildSpecElement = v9Mod.buildSpecElement || v9Mod.default;
      } catch (fallbackError) {
        console.error("Failed to load buildSpecElement:", fallbackError);
      }
    }
  }

  if (!buildSpecElement && window.ks?.jsonToTag?.buildSpecElement) {
    buildSpecElement = window.ks.jsonToTag.buildSpecElement;
  }

  return buildSpecElement;
}

export async function loadBuildSpecElement() {
  const localUrl = new URL("../../../../node_modules/@keshavsoft/json-to-tag/src/index.js", import.meta.url);
  const loaders = [
    () => import(localUrl.href),
    () => import("https://cdn.jsdelivr.net/npm/@keshavsoft/json-to-tag@1.9.3/src/index.js"),
    () => import("https://keshavsoft.github.io/json-to-tag/src/index.js"),
    () => import("https://keshavsoft.github.io/json-to-tag/dist/min.js"),
  ];

  for (const loadModule of loaders) {
    try {
      const mod = await loadModule();
      const fn = mod.buildSpecElement || mod.default || mod.specToDom;

      if (typeof fn === "function") {
        return fn;
      }
    } catch (error) {
      console.warn("buildSpecElement loader attempt failed:", error.message || error);
    }
  }

  if (window.ks?.jsonToTag?.buildSpecElement) {
    return window.ks.jsonToTag.buildSpecElement;
  }

  return null;
}

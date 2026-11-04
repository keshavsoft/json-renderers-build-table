import meta from "./meta.js";

export const registerGlobal = (inDefinition) => {
    const localDefinition = inDefinition;

    if (typeof globalThis === "undefined" || !localDefinition) return;

    globalThis.ks ??= {};
    globalThis.ks.jsonRenderers ??= {};
    globalThis.ks.jsonRenderers.build ??= {};

    globalThis.ks.jsonRenderers.build.table = {
        meta,
        render: localDefinition
    };
};

export default registerGlobal;
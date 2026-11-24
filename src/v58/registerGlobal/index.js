import meta from "./meta.js";

export const registerGlobal = (render) => {
    if (typeof globalThis === "undefined") return;

    globalThis.ks ??= {};
    globalThis.ks.jsonRenderers ??= {};
    globalThis.ks.jsonRenderers.build ??= {};

    globalThis.ks.jsonRenderers.build.table = {
        meta,
        render
    };
};

export default registerGlobal;

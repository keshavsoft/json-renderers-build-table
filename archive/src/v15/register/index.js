import meta from "./meta.js";

export const registerGlobal = ({ inDefinition } = {}) => {
    const localDefinition = inDefinition;

    if (typeof globalThis === "undefined" || !localDefinition) return;

    globalThis.ks ??= {};

    const renderFunc = typeof localDefinition === "function"
        ? localDefinition
        : localDefinition.render;

    const buildSpecFunc = typeof localDefinition === "object"
        ? localDefinition.buildSpec
        : undefined;

    const tablePackage = {
        meta,
        renderToDom: renderFunc,
        render: renderFunc,
        ...(buildSpecFunc ? { buildSpec: buildSpecFunc } : {}),
        ...(typeof localDefinition === "object" ? localDefinition : {})
    };

    globalThis.ks.jsonRenderersBuildTable = tablePackage;
    globalThis.ks.jsonRenderersBuild ??= tablePackage;
};

export default registerGlobal;

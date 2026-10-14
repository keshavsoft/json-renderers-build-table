import buildSpec from "./buildSpec/index.js";
import registerGlobal from "./register/index.js";
import spec from "./spec.json" with { type: "json" };

const render = (input = {}) => {
    const localInput = (input && typeof input === "object" && "inConfig" in input)
        ? input.inConfig
        : input;

    const localColumns = localInput.columns || [];
    const localData = localInput.data || [];
    const localOptions = localInput.options || {};
    const localSerial = localInput.serial;
    const localTargetHtmlId = localInput.targetHtmlId;

    const tableSpec = buildSpec({
        inConfig: {
            columns: localColumns,
            data: localData,
            options: localOptions,
            serial: localSerial
        }
    });

    if (localTargetHtmlId && typeof document !== "undefined") {
        const container = document.getElementById(localTargetHtmlId);
        if (container) {
            const toTag = globalThis?.ks?.jsonToTag?.buildSpecElement;
            if (typeof toTag === "function") {
                const element = toTag(tableSpec);
                container.innerHTML = "";
                container.append(element);
            }
        }
    }

    return tableSpec;
};

registerGlobal({
    inDefinition: {
        render,
        renderToDom: render,
        buildSpec,
        spec
    }
});

export {
    render,
    render as renderToDom,
    buildSpec,
    spec
};

export default render;

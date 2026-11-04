import buildSpec from "./buildSpec/index.js";
import registerGlobal from "./register/index.js";
import spec from "./spec.json" with { type: "json" };

import simpleTable from "./simpleTable/index.js";
import tableWithWidths from "./tableWithWidths/index.js";
import tableWithFooter from "./tableWithFooter/index.js";
import tableWithSerial from "./tableWithSerial/index.js";
import tableWithOptions from "./tableWithOptions/index.js";
import tableWithButtonCell from "./tableWithButtonCell/index.js";
import tableFullGrid from "./tableFullGrid/index.js";
import tableHeadless from "./tableHeadless/index.js";

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

const scenarios = {
    simpleTable,
    tableWithWidths,
    tableWithFooter,
    tableWithSerial,
    tableWithOptions,
    tableWithButtonCell,
    tableFullGrid,
    tableHeadless
};

registerGlobal({
    inDefinition: {
        render,
        renderToDom: render,
        buildSpec,
        spec,
        ...scenarios
    }
});

export {
    render,
    render as renderToDom,
    buildSpec,
    spec,
    simpleTable,
    tableWithWidths,
    tableWithFooter,
    tableWithSerial,
    tableWithOptions,
    tableWithButtonCell,
    tableFullGrid,
    tableHeadless
};

export default render;

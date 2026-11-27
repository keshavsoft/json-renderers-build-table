import guardFunc from "json-renderers-guard";
import jsonToDom from "@keshavsoft/json-to-dom";
import { hookTableEvents } from "json-renderers-build-table-events";
import registerGlobal from "./registerGlobal/index.js";
import runInstructions from "json-renderers-run-instructions";

const render = (config = {}) => {
    guardFunc(config);
    const showLog = config?.showLog;
    const parts = (config.type || "").split(".");
    const instructionMainKey = parts.length > 1 ? parts[0] : "table";
    const instructionSubKey = parts.length > 1 ? parts[1] : parts[0];
    const options = config?.options;

    const spec = runInstructions({
        instructionMainKey,
        instructionSubKey,
        data: { data: config?.data, columns: config?.columns },
        options,
        showLog
    });

    const dom = jsonToDom({
        jsonSpec: spec,
        targetHtmlId: config.targetHtmlId,
        appendPosition: config.appendPosition,
        classToApply: config.classToApply ?? "",
        showLog
    });
    return dom;
};

/**
 * Convenient wrapper: hooks events using json-renderers-build-table-events
 * and automatically provides the default table re-render logic.
 */
const hookEvents = (config = {}) => {
    const rootElement = typeof config.container === "string"
        ? document.getElementById(config.container)
        : config.container;

    const defaultRenderTable = (filteredRecords) => {
        if (!rootElement) return;
        const targetElement = rootElement.querySelector("#table-content-container") ||
            rootElement.querySelector("table")?.parentElement;

        if (!targetElement) return;
        const targetId = targetElement.id || "table-content-container";
        if (!targetElement.id) targetElement.id = targetId;

        render({
            data: filteredRecords,
            columns: config.columns,
            targetHtmlId: targetId,
            appendPosition: "replace",
            type: "table.withFooter",
            options: {
                showSerial: config.options?.showSerial ?? true,
                showOptions: config.options?.showOptions ?? true
            },
            classToApply: "",
            showLog: false
        });
    };

    return hookTableEvents({
        ...config,
        renderTable: config.renderTable || defaultRenderTable
    });
};

registerGlobal({ render, hookEvents });

export { render, hookEvents };
export default render;

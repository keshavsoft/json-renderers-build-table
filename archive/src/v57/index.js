import guardFunc from "json-renderers-guard";
import jsonToDom from "@keshavsoft/json-to-dom";
import { hookTableEvents } from "json-renderers-build-table-events";
import registerGlobal from "./registerGlobal/index.js";
import runInstructions from "json-renderers-run-instructions";

/**
 * Normalizes options to support both:
 * 1. New 2-level format:
 *    {
 *      search: { showLabel: true, showHelper: true, showInput: true },
 *      serial: true,
 *      options: { showButton: true, showEditButton: true, showDeleteButton: true }
 *    }
 * 2. Legacy flat format:
 *    { showSerial: true, showSearch: true, showOptions: true }
 */
const normalizeOptions = (options) => {
    if (!options || typeof options !== "object") return options;

    const normalized = { ...options };

    // Legacy showSearch: true -> modern search feature block
    if (normalized.showSearch === true && !normalized.search) {
        normalized.search = {
            showLabel: true,
            showHelper: true,
            showInput: true
        };
    }

    // Legacy showSerial: true -> modern serial toggle
    if (normalized.showSerial === true && normalized.serial === undefined) {
        normalized.serial = true;
    }

    // Legacy showOptions: true -> modern row actions block
    if (normalized.showOptions === true && !normalized.options) {
        normalized.options = {
            showButton: true,
            showEditButton: true,
            showDeleteButton: true
        };
    }

    return normalized;
};

const render = (config = {}) => {
    console.log("config : ", config);
    guardFunc(config);
    const showLog = config?.showLog;
    const parts = (config.type || "").split(".");
    const instructionMainKey = parts.length > 1 ? parts[0] : "table";
    const instructionSubKey = parts.length > 1 ? parts[1] : (parts[0] || "simple");
    const options = normalizeOptions(config?.options);

    const spec = runInstructions({
        instructionMainKey,
        instructionSubKey,
        data: { data: config?.data, columns: config?.columns },
        options,
        showLog
    });
    console.log("spec : ", spec);

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
            rootElement.querySelector("table")?.parentElement ||
            rootElement;

        if (!targetElement) return;
        const targetId = targetElement.id || "table-content-container";
        if (!targetElement.id) targetElement.id = targetId;

        const tableType = "table.bodyOnly";
        console.log("tableType : ", tableType);

        render({
            data: filteredRecords,
            columns: config.columns,
            targetHtmlId: targetId,
            appendPosition: "replace",
            type: tableType,
            options: config.options,
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

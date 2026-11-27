import guardFunc from "json-renderers-guard";
import jsonToDom from "@keshavsoft/json-to-dom";
import registerGlobal from "./registerGlobal/index.js";
import runInstructions from "json-renderers-run-instructions";

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

    const dom = jsonToDom({
        jsonSpec: spec,
        targetHtmlId: config.targetHtmlId,
        appendPosition: config.appendPosition,
        classToApply: config.classToApply ?? "",
        showLog
    });

    return dom;
};

registerGlobal(render);

export { render };
export default render;

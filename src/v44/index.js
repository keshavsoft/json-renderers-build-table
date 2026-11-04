import registerGlobal from "./registerGlobal.js";

import guardFunc from "json-renderers-guard";
import jsonToDom from "@keshavsoft/json-to-dom";

import buildSpec from "./buildSpec/index.js";

// Main orchestrator: coordinates validation, spec building, and DOM rendering
const render = (config = {}) => {
    guardFunc(config);
    const showLog = config?.showLog;
    const localOptions = config?.options;

    if (showLog) console.log("first : ", config?.options, config?.columns, config?.data, config?.appendPosition);

    const spec = buildSpec({
        inColumns: config.columns,
        inData: config.data,
        inType: config.type,
        inShowLog: config.showLog,
        inOptions: localOptions
    });

    if (showLog) console.log("spec : ", spec);

    const dom = jsonToDom({
        jsonSpec: spec,
        targetHtmlId: config.targetHtmlId,
        appendPosition: config.appendPosition,
        showLog
    });

    if (showLog) console.log("dom : ", dom);

    return dom;
};

registerGlobal(render);

export { render };
export default render;
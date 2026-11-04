import registerGlobal from "./registerGlobal/index.js";

import guardFunc from "json-renderers-guard";
import jsonToDom from "@keshavsoft/json-to-dom";
import jsonRenderBuild from "json-renderers-specs";

const render = (config = {}) => {
    guardFunc(config);
    const showLog = config?.showLog;
    const localOptions = config?.options;

    if (showLog) console.log("first : ", config?.options, config?.columns, config?.data, config?.appendPosition);

    const spec = jsonRenderBuild({
        type: config.type,
        data: config.data,
        columns: config.columns,
        showLog: config.showLog,
        options: localOptions
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

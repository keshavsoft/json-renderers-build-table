import registerGlobal from "./registerGlobal/index.js";

import guardFunc from "json-renderers-guard";
import jsonToDom from "@keshavsoft/json-to-dom";
import bindEvents from "dom-primitive-bindings";
import jsonRenderBuild from "json-renderers-specs";
import applyActions from "json-renderers-actions";

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

    if (Array.isArray(config?.bindings) && config.bindings.length > 0) {
        bindEvents(config.targetHtmlId, config.bindings);
    } else if (config?.actions || config?.options?.bindEvents) {
        applyActions(config.targetHtmlId, {
            actions: config.actions,
            options: localOptions
        });
    }

    return dom;
};

registerGlobal(render);

export { render };
export default render;

import guardFunc from "json-renderers-guard";
import jsonToDom from "@keshavsoft/json-to-dom";
import registerGlobal from "./registerGlobal/index.js";
import buildTableSpec from "./buildTableSpec.js";
import hookEvents from "./hookEvents/index.js";

const render = (config = {}) => {
    guardFunc(config);
    const showLog = config?.showLog;
    const spec = buildTableSpec({
        type: config.type,
        data: config.data,
        columns: config.columns,
        options: config.options || {},
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

// Wrap hookEvents to inject render function automatically:
const wrappedHookEvents = (config = {}) => {
    return hookEvents({
        ...config,
        render: config.render || render
    });
};

registerGlobal({ render, hookEvents: wrappedHookEvents });

export { render, buildTableSpec, wrappedHookEvents as hookEvents };
export default render;

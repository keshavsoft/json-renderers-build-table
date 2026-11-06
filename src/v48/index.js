import registerGlobal from "./registerGlobal/index.js";

import guardFunc from "json-renderers-guard";
import jsonToDom from "@keshavsoft/json-to-dom";
import { definitions } from "spec-repo";
import buildTableSpec from "./buildTableSpec.js";

const render = (config = {}) => {
    guardFunc(config);
    const showLog = config?.showLog;
    const localOptions = config?.options || {};

    if (showLog) {
        console.log("[v48 build-table] input config:", {
            type: config.type,
            options: localOptions,
            columns: config.columns,
            data: config.data,
            appendPosition: config.appendPosition
        });
    }

    // Build the component spec directly using spec-repo definitions!
    const spec = buildTableSpec({
        definitions,
        type: config.type,
        data: config.data,
        columns: config.columns,
        options: localOptions,
        showLog
    });

    if (showLog) console.log("[v48 build-table] generated spec:", spec);

    // Mount to DOM via @keshavsoft/json-to-dom
    const dom = jsonToDom({
        jsonSpec: spec,
        targetHtmlId: config.targetHtmlId,
        appendPosition: config.appendPosition,
        showLog
    });

    if (showLog) console.log("[v48 build-table] mounted DOM element:", dom);

    return dom;
};

registerGlobal(render);

export { render, buildTableSpec };
export default render;

import registerGlobal from "./registerGlobal.js";

import guardFunc from "json-renderers-guard";
import jsonToDom from "@keshavsoft/json-to-dom";
import bindEvents from "dom-primitive-bindings";

import buildSpec from "./buildSpec/index.js";

const createDefaultBindings = (actions = {}) => {
    const bindings = [];

    bindings.push({
        event: "click",
        selector: "tbody button, tfoot button, button",
        onExtract: (matchElement, event) => {
            if (typeof actions?.rowClick === "function") {
                actions.rowClick(matchElement, event);
                return;
            }
            if (typeof actions?.buttonClick === "function") {
                actions.buttonClick(matchElement, event);
                return;
            }
            console.log("Button clicked target:", matchElement, event?.target);
        }
    });

    bindings.push({
        event: "keydown",
        selector: "input[type='search'], .table-search-input, thead input, input",
        onExtract: (result, event, matchElement) => {
            if (event?.key === "Enter") {
                const query = matchElement?.value ?? event?.target?.value ?? "";
                if (typeof actions?.searchKeydown === "function") {
                    actions.searchKeydown(query, event, matchElement);
                    return;
                }
                console.log("Search Enter target:", matchElement, "value:", query);
            }
        }
    });

    if (typeof actions?.footerClick === "function") {
        bindings.push({
            event: "click",
            selector: "tfoot button",
            onExtract: (matchElement, event) => {
                actions.footerClick(matchElement, event);
            }
        });
    }

    return bindings;
};

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

    if (Array.isArray(config?.bindings) && config.bindings.length > 0) {
        bindEvents(config.targetHtmlId, config.bindings);
    } else if (config?.actions || config?.options?.bindEvents) {
        const bindings = createDefaultBindings(config.actions);
        bindEvents(config.targetHtmlId, bindings);
    }

    return dom;
};

registerGlobal(render);

export { render };
export default render;

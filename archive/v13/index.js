import buildSpec from "./buildSpec/index.js";
import jsonToTag from "@keshavsoft/json-to-tag";

const render = ({
    targetHtmlId,
    inSpec
} = {}) => {
    const localTargetHtmlId = targetHtmlId;

    const element = jsonToTag(inSpec);

    if (localTargetHtmlId && typeof document !== "undefined") {
        const container = document.getElementById(localTargetHtmlId);
        if (container) {
            container.innerHTML = "";
            container.append(element);
        }
    }

    return element;
};

const startFunc = ({
    columns = [],
    data = [],
    colGroup = [],
    targetHtmlId
} = {}) => {
    const localSpec = buildSpec({ colGroup, columns, rows: data });

    render({
        targetHtmlId,
        inSpec: localSpec
    });
};

export default startFunc;
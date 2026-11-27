import jsonToDom from "@keshavsoft/json-to-dom";
import registerGlobal from "./registerGlobal/index.js";
import runInstructions from "json-renderers-run-instructions";

const render = ({
    type,
    data,
    columns,
    options,
    targetHtmlId,
    classToApply = "",
    appendPosition = "replace",
    showLog
}) => {
    const spec = runInstructions({
        instructionMainKey: "table",
        instructionSubKey: type,
        data: { columns, data },
        options
    });

    const dom = jsonToDom({
        jsonSpec: spec,
        targetHtmlId,
        appendPosition,
        classToApply,
        showLog
    });

    return dom;
};

registerGlobal(render);

export { render };

export default render;
import jsonToDom from "@keshavsoft/json-to-dom";
import registerGlobal from "./registerGlobal/index.js";
import runInstructionsSteps from "json-renderers-run-instructions-steps";
import declarativeSpec from "declarative-spec";

const render = ({
    data,
    columns,
    options,
    targetHtmlId,
    classToApply = "",
    appendPosition = "replace",
    showLog
}) => {
    console.log("spec : ", declarativeSpec);

    const base = structuredClone(declarativeSpec?.tableWithFooter);

    const spec = runInstructionsSteps({
        instructions: ["buildColgroup", "buildHeader"],
        base,
        data: { data, columns },
        showLog
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
